import React, { createContext, useState } from 'react'
export const CartContext = createContext(null);

/**
 * @param {{
* children:React.ReactNode
* }}
*/

const UserProvider = ({ children }) => {
    // logic for the cart:
    const [cart, setCart] = useState(
        () => JSON.parse(localStorage.getItem("cart")) || []
    );
    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default UserProvider