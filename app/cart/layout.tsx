import { Metadata } from "next/types";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export const metadata : Metadata = {
  title: 'JekaEat | Your Shopping Cart',
  description: 'This is the shopping cart page'
};

export default function CartLayout({children} : {children: React.ReactNode}) {  
  return (
    <>
        <Navbar />
        {children}
        <Footer />    
    </>
  );
}


