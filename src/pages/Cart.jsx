import React, { useContext } from "react";
import Card from "../components/Card";
import { CartContext } from "../components/providers/CartProvider";

const Cart = ({ deleteFromCart, addToCart }) => {
    const cartContext = useContext(CartContext);

    return (
        <div className="min-h-screen h-full bg-[#020711f9] mt-5 pt-20">
            <h1 className="text-3xl font-semibold text-center mt-10 text-white">
                Cart
            </h1>
            <div className="flex flex-wrap justify-center mt-5 gap-5">
                {cartContext.cart.map((product) => {
                    return (
                        <Card
                            product={product}
                            key={product.name}
                            addToCart={addToCart}
                            deleteFromCart={deleteFromCart}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Cart;