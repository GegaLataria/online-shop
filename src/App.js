import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const App = () => {
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
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home slides={slides} />} />
            <Route path="/product/id-1" element={<Product />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
