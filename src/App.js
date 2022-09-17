import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./cart/Cart";
import Footer from "./footer/Footer";
import Header from "./header/Header";

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
    { url: "http://localhost:3000/image-4.jpg", title: "City" },
    { url: "http://localhost:3000/image-5.jpg", title: "Italy" },
  ];

  const Home = lazy(() => import("./home/Home"));
  const Product = lazy(() => import("./products/Product"));

  return (
    <div>
      <Router>
        <Context.Provider value={{ cartItems, setCartItems }}>
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home slides={slides} />} />
              <Route path="/product/id-1" element={<Product />} />
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
