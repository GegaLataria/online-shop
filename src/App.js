import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./cart/Cart";
import data from "./data";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import NewProduct from "./products/NewProduct";

export const Context = React.createContext();

const App = () => {
  const [cartItems, setCartItems] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("cartItems");
    const initialValue = JSON.parse(saved);
    if (!initialValue) {
      localStorage.setItem("cartItems", JSON.stringify(0));
    }
    return initialValue;
  });

  const slides = [
    { url: "http://localhost:3000/image-1.jpg", title: "Iphone" },
    { url: "http://localhost:3000/image-2.jpg", title: "Watch" },
    { url: "http://localhost:3000/image-3.jpg", title: "Macbook" },
    { url: "http://localhost:3000/image-4.jpg", title: "Homepod" },
  ];

  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("product");
    const initialValue = JSON.parse(saved);
    if (!initialValue) {
      localStorage.setItem("product", JSON.stringify([]));
    }
    return initialValue || [];
  });

  const Home = lazy(() => import("./home/Home"));

  return (
    <div>
      <Router>
        <Context.Provider
          value={{ cartItems, setCartItems, products, setProducts, data }}
        >
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home slides={slides} />} />
              <Route
                exact
                path="/product/id-0"
                element={<NewProduct index={0} />}
              />
              <Route
                exact
                path="/product/id-1"
                element={<NewProduct index={1} />}
              />
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
