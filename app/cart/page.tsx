"use client";
import styles from '@styles/Cart.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useCartContext } from "@context/CartProvider";
import CheckoutForm from '@components/CheckoutForm';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

export default function Cart() {
    // Get auth session
    const { data: session, status}  = useSession();
    const [clientSecret, setClientSecret] = useState('');
    const appearance = { theme: 'stripe', };
    const options = {
        clientSecret,
        appearance,
    };
    const { cartData }: any = useCartContext();

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("/api/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cartData),
        })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret))
        .catch((err) => console.error(`Stripe payment connection failed!`));
    }, []);

    return (
        <>
            <header className={styles.cartHeader}>
                <h1>Your Cart [{cartData.totalCartItems} Items]</h1>
            </header>

            <main className={styles.cartMain}>
                <div className={styles.cartListHeader}>
                    <span>Product</span>
                    <span>Price</span>
                    <span>Quantity</span>
                    <span>Total</span>
                </div>
                <ul className={styles.cartList}>
                    {cartData.cartItems.length > 0 && cartData.cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} {...cartItem as any} />
                    ))}
                </ul>
            </main>

            <section className={styles.cartFooter}>
                <div className={styles.cartFooterLt}>
                    <h3>Delivery Info</h3>
                    <p>See our delivery & return info</p>
                    <h3>Payment Info</h3>
                    <p>We accept the following methods of payment</p>
                </div>
                <div className={styles.cartFooterRt}>
                    <h2><span>Subtotal</span> <span>${cartData.subtotal}</span></h2>
                    <p>Taxes and shipping calculated at checkout</p>
                    <div className={styles.cartPromo}>
                        <input type="text" placeholder="Add promo code" />
                        <span>&rarr;</span>
                    </div>
                    {session && clientSecret && 
                        (
                            <Elements options={options} stripe={stripePromise}>
                                <CheckoutForm />
                            </Elements>
                        ) 
                    }
                </div>
            </section>
        </>
    )
}



function CartItem({ id, name, price, quantity, image }) {
    const { increaseItem, decreaseItem, deleteFromCart } = useCartContext();

    const handleIncreaseItem = (itemId: Number) => {
        increaseItem(itemId);
    }

    const handleDecreaseItem = (itemId: Number) => {
        decreaseItem(itemId);
    }

    const handleDeleteFromCart = (itemId: Number) => {
        deleteFromCart(itemId);
    }


    return (
        <li className={styles.cartItem}>
            <div className={styles.cartItemProduct}>
                <Image className={styles.cartItemImg} src={image} alt="Cart product" width="140" height="140" />
                <div>
                    <h4>{name}</h4>
                    <button onClick={() => handleDeleteFromCart(id)}>Remove</button>
                </div>
            </div>
            <div>
                <p>${price}</p>
            </div>
            <div className={styles.cartItemQuantity}>
                <span onClick={() => handleDecreaseItem(id)}>&minus;</span>
                <span>{quantity}</span>
                <span onClick={() => handleIncreaseItem(id)}>&#43;</span>
            </div>
            <div>
                <p>${price * quantity}</p>
            </div>
        </li>
    )
}

