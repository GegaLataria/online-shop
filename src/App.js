import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./cart/Cart";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import image from "./photos/iphone.jpg";
import imageWatch from "./photos/apple-watch-ultra.jpg";
import Product2 from "./products/Product-2";

export const Context = React.createContext();

const App = () => {
  const [cartItems, setCartItems] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("cartItems");
    const initialValue = JSON.parse(saved);
    return initialValue;
  });

  const slides = [
    { url: "http://localhost:3000/image-1.jpg", title: "Iphone" },
    { url: "http://localhost:3000/image-2.jpg", title: "Watch" },
    { url: "http://localhost:3000/image-3.jpg", title: "Macbook" },
    { url: "http://localhost:3000/image-4.jpg", title: "Homepod" },
  ];

  const products = [
    {
      header: "Iphone 14 Pro Max",
      image: image,
      price: 4199,
    },
    {
      header: "Apple Watch Ultra",
      image: imageWatch,
      price: 2999,
    },
  ];

  const Home = lazy(() => import("./home/Home"));
  const Product = lazy(() => import("./products/Product"));

  return (
    <div>
      <Router>
        <Context.Provider value={{ cartItems, setCartItems, products }}>
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home slides={slides} />} />
              <Route exact path="/product/id-1" element={<Product />} />
              <Route exact path="/product/id-2" element={<Product2 />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Suspense>
          <Footer />
        </Context.Provider>
      </Router>
    </div>
  );
};

export default App;
