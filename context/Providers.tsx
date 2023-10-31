'use client';
import SessionProvider from '@components/SessionProvider';
import { CartProvider } from '@context/CartProvider';

export function Providers({children} : {children: React.ReactNode}) {
  return (
    <SessionProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </SessionProvider>
  )
}