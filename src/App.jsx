import { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { CartContext } from "./components/providers/CartProvider";
import { UserContext } from "./components/providers/UserProvider";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);

  useEffect(() => {
    if (userContext.userIn === true)
      navigate("/")
    if (userContext.userIn === false)
      navigate("/login")
  }, [userContext.userIn]);

  const addToCart = (product) => {
    if (cartContext.cart.some((item) => item.name === product.name)) {
      return;
    }
    cartContext.setCart([...cartContext.cart, product]);
  };

  const deleteFromCart = (product) => {
    const newCart = cartContext.cart.filter((item) => item.name !== product.name);
    cartContext.setCart(newCart);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartContext.cart));
  }, [cartContext.cart]);

  const productCards = [
    {
      name: "Wireless Bluetooth Headphones",
      price: 59.99,
      description: "High-quality wireless headphones with noise-cancellation and long battery life.",
      imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ymx1ZXRvb3RoJTIwaGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Smart Fitness Watch",
      price: 199.99,
      description: "Advanced fitness watch with heart rate monitor, GPS, and sleep tracking.",
      imageUrl: "https://cdn.thewirecutter.com/wp-content/media/2023/06/fitnesstrackers-2048px-09819-3x2-1.jpg?auto=webp&quality=75&crop=1.91:1&width=1200"
    },
    {
      name: "Portable Power Bank",
      price: 29.99,
      description: "Compact 10000mAh power bank with fast charging support and multiple ports.",
      imageUrl: "https://t4.ftcdn.net/jpg/04/31/42/21/360_F_431422181_bZ8gkwFIKWDcRluFCheBBE4EDPUbpNNH.jpg"
    },
    {
      name: "4K Ultra HD Smart TV",
      price: 499.99,
      description: "50-inch 4K UHD Smart TV with HDR and built-in streaming apps.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXqrFH3E1EkzeCcycpFCck05OiWWpVhKmMVMJWQE8Lq30c4mvFk5Gmf5p_xzDbZhRbViI&usqp=CAU"
    },
    {
      name: "Wireless Gaming Mouse",
      price: 49.99,
      description: "Ergonomic wireless gaming mouse with customizable buttons and RGB lighting.",
      imageUrl: "https://img.freepik.com/free-photo/computer-mouse-yellow-background-isolated-flat-lay_169016-26395.jpg?w=2000"
    },
    {
      name: "Electric Toothbrush",
      price: 89.99,
      description: "Rechargeable electric toothbrush with multiple brushing modes and a 2-minute timer.",
      imageUrl: "https://www.telegraph.co.uk/content/dam/recommended/2023/01/18/TELEMMGLPICT000322429860_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpeg?imwidth=680"
    },
    {
      name: "Instant Pot Pressure Cooker",
      price: 99.99,
      description: "7-in-1 electric pressure cooker with multiple cooking functions and safety features.",
      imageUrl: "https://helios-i.mashable.com/imagery/articles/03Gv9BJnlyP408r2eljgsy0/hero-image.fill.size_1248x702.v1689167594.jpg"
    },
    {
      name: "Noise-Cancelling Earbuds",
      price: 79.99,
      description: "True wireless earbuds with active noise cancellation and touch controls.",
      imageUrl: "https://i.pinimg.com/736x/30/6d/a9/306da922e13bf34e80283f2788c07dcf.jpg"
    },
    {
      name: "Smart Home Security Camera",
      price: 129.99,
      description: "1080p HD smart security camera with night vision, motion detection, and cloud storage.",
      imageUrl: "https://cdn.thewirecutter.com/wp-content/media/2023/10/securitycameras-2048px-04824.jpg?auto=webp&quality=75&width=1024"
    },
    {
      name: "Electric Scooter",
      price: 299.99,
      description: "Foldable electric scooter with a top speed of 15 mph and a range of up to 15 miles.",
      imageUrl: "https://img.freepik.com/premium-photo/white-modern-eco-electric-kick-scooter-white-yellow-background-3d-rendering_476612-18669.jpg"
    }
  ];

  return (
    <div>
      {userContext.userIn && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              addToCart={addToCart}
              deleteFromCart={deleteFromCart}
              productCards={productCards}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/cart"
          element={
            <Cart
              addToCart={addToCart}
              deleteFromCart={deleteFromCart}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;