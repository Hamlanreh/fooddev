'use client';
import { createContext, useContext, useState } from 'react';

const CartContext = createContext({});

export function CartProvider ({children} : {children: React.ReactNode}) 
{
    const [cartData, setCartData] = useState({
        cartItems: [],
        totalCartItems: 0,
        subtotal: 0,
    });

    const calculateTotals = (cartItems: any) => {
        let totalCartItems = 0;
        let subtotal = 0;

        cartItems.forEach(cartItem => {
            totalCartItems += cartItem.quantity;
            subtotal += (cartItem.quantity * cartItem.price);
        })
        
        return { totalCartItems, subtotal };
    }

    const addToCart = (newItem: any) => {
        const index = cartData.cartItems.findIndex(cartItem => cartItem.id ===  newItem.id);
        // if not exists add to cart
        if (index === -1) {
            setCartData(state => {
                const newCartItems = [...state.cartItems, { ...newItem, quantity: 1 }];
                const { totalCartItems, subtotal } = calculateTotals(newCartItems);
                return {
                    ...state, 
                    cartItems: [...newCartItems],
                    totalCartItems,
                    subtotal
                }
            });
        } 
    };

    const increaseItem = (itemId: Number) => {
        setCartData(state => {
            const newCartItems = state.cartItems.map(cartItem => {
                if (cartItem.id === itemId) cartItem.quantity++;
                return cartItem;
            });
            const { totalCartItems, subtotal } = calculateTotals(newCartItems);

            return {
                ...state, 
                cartItems: [...newCartItems],
                totalCartItems,
                subtotal
            }
        });
    };

    const decreaseItem = (itemId: Number) => {
        setCartData(state => {
            const newCartItems = state.cartItems.map(cartItem => {
                if (cartItem.id === itemId && cartItem.quantity > 1) cartItem.quantity--;
                return cartItem;
            });
            const { totalCartItems, subtotal } = calculateTotals(newCartItems);

            return {
                ...state, 
                cartItems: [...newCartItems],
                totalCartItems,
                subtotal
            }
        });
    };

    const deleteFromCart = (itemId: Number) => {
        setCartData(state => { 
            const newCartItems = state.cartItems.filter(cartItem => cartItem.id !== itemId);
            const { totalCartItems, subtotal } = calculateTotals(newCartItems);

            return {
                ...state, 
                cartItems: [...newCartItems],
                totalCartItems,
                subtotal
            }
        });
    };


    return (
        <CartContext.Provider value={{ cartData, addToCart, increaseItem, decreaseItem, deleteFromCart }}>
            {children}
        </CartContext.Provider>
    )
}


export function useCartContext() {
    return useContext(CartContext);
}