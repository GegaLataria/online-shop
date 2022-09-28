import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./cart/Cart";
import data from "./data";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import NewProduct from "./products/NewProduct";
import image1 from "./photos/image-1.jpg";
import image2 from "./photos/image-2.jpg";
import image3 from "./photos/image-3.jpg";
import image4 from "./photos/image-4.jpg";
import FilteredProducts from "./products/FilteredProducts";
import Terms from "./footer/Terms";

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
    { url: image1, title: "Iphone" },
    { url: image2, title: "Watch" },
    { url: image3, title: "Macbook" },
    { url: image4, title: "Homepod" },
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
              <Route
                exact
                path="/product/id-2"
                element={<NewProduct index={2} />}
              />
              <Route
                exact
                path="/product/id-3"
                element={<NewProduct index={3} />}
              />
              <Route
                exact
                path="/product/id-4"
                element={<NewProduct index={4} />}
              />
              <Route
                exact
                path="/product/id-5"
                element={<NewProduct index={5} />}
              />
              <Route
                exact
                path="/product/id-6"
                element={<NewProduct index={6} />}
              />
              <Route
                exact
                path="/product/id-7"
                element={<NewProduct index={7} />}
              />
              <Route
                exact
                path="/product/id-8"
                element={<NewProduct index={8} />}
              />
              <Route
                exact
                path="/iphone"
                element={<FilteredProducts product={"Iphone"} />}
              />
              <Route
                exact
                path="/mac"
                element={<FilteredProducts product={"Macbook"} />}
              />
              <Route
                exact
                path="/airpods"
                element={<FilteredProducts product={"Airpods"} />}
              />
              <Route
                exact
                path="/watch"
                element={<FilteredProducts product={"Apple Watch"} />}
              />
              <Route
                exact
                path="/accessories"
                element={<FilteredProducts product={"Acc"} />}
              />
              <Route
                exact
                path="/terms-and-conditions"
                element={<Terms header={"წესები და პირობები"} />}
              />
              <Route
                exact
                path="/contact"
                element={<Terms header={"კონტაქტი"} />}
              />
              <Route
                exact
                path="/partners"
                element={<Terms header={"პარტნიორები"} />}
              />
              <Route
                exact
                path="/about-us"
                element={<Terms header={"ჩვენ შესახებ"} />}
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
