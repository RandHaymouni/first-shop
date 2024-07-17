import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

const Home = ({ deleteFromCart, addToCart, productCards }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("userIn");
        if (!user) {
            navigate("/login");
        }
    }, []);

    return (
        <div className="min-h-screen h-full bg-[#020711f9] mt-5 pt-20">
            <div className="flex items-center justify-center flex-wrap gap-5">
                {productCards.map((product) => {
                    return (
                        <Card
                            key={product.name}
                            product={product}
                            addToCart={addToCart}
                            deleteFromCart={deleteFromCart}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Home;