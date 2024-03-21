import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider ({children}) { 
    const [cart, setCart] = useState([]);

    const quantityInCart = cart.length;

    const addToCart = product => {
        const isInCart = cart.findIndex(item => item.id == product.id);

        //Agregar cantidad al producto

        // if(isInCart >= 0){
        //     const newCart = structuredClone(cart);
        //     newCart[isInCart].quantity += 1
        //     return setCart(newCart)
        // }

        //Agregar el Producto en la lista de Cart

        if(isInCart == -1) {
            setCart(prevState => ([
                ...prevState,
                {
                    ...product,
                    quantity : 1
                }
            ]))     
        }
    }


    const clearCart = () => {
        setCart([])
    }

    const removeFromCart = product => {
        setCart(prevState => prevState.filter(item => item.id != product.id))
        
    }

    return (
        <CartContext.Provider value={{
            cart, addToCart, clearCart, removeFromCart, quantityInCart, setCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}