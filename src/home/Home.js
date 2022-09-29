import { useRef } from "react";
import ImageSlider from "../slider/ImageSlider";
import "./Home.css";
import data from "../data";
import RenderProducts from "./RenderProducts";

const Home = ({ slides }) => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <ImageSlider slides={slides} />
      <div className="home-container">
        <button className="home-shop-button" onClick={handleClick}>
          Shop Now
        </button>
      </div>
      <div ref={ref} className="products-section">
        <div className="title-container">
          <h2 className="products-section__title">Featured Products</h2>
        </div>
        <RenderProducts data={data} />
      </div>
    </div>
  );
};

export default Home;
