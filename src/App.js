import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header/Header";

const App = () => {
  const slides = [
    { url: "http://localhost:3000/image-1.jpg", title: "Beach" },
    { url: "http://localhost:3000/image-2.jpg", title: "Boat" },
    { url: "http://localhost:3000/image-3.jpg", title: "Forest" },
    { url: "http://localhost:3000/image-4.jpg", title: "City" },
    { url: "http://localhost:3000/image-5.jpg", title: "Italy" },
  ];

  const Home = lazy(() => import("./home/Home"));

  return (
    <div>
      <Router>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home slides={slides} />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
