import React, {createContext, useState} from 'react'

const CartItems = createContext()

const CartContext = ({children}) => {
    const [cart, setCart] = useState([])
    return (
        <CartItems.Provider value={{cart, setCart}}>
            {children}
        </CartItems.Provider>
    )
}

export {CartItems, CartContext}
