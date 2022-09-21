import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./cart/Cart";
import data from "./data";
import Footer from "./footer/Footer";
import Header from "./header/Header";
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

  const [products, setProducts] = useState(data);

  const Home = lazy(() => import("./home/Home"));
  const Product = lazy(() => import("./products/Product"));

  return (
    <div>
      <Router>
        <Context.Provider
          value={{ cartItems, setCartItems, products, setProducts }}
        >
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
