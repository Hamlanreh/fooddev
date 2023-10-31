import { NextRequest, NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (items: any) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  const itemPrices = items.map(item => item.price * item.quantity);
  const totalAmount = itemPrices.reduce((prev: Number, next: Number) => (prev + next), 0);
  return totalAmount;
};

export async function POST(req: NextRequest) {
  try {
    const { items }: any = req.body;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "usd",
      // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables itsfunctionality by default.
      automatic_payment_methods: {
        enabled: true,
      },
    });
      
    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch(err) {
    return NextResponse.json({
      error: err,
      message: 'Payment Intent Failure!'
    });
  }
};