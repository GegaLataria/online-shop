import { useEffect, useRef, useState } from "react";
import ImageSlider from "../slider/ImageSlider";
import "./Home.css";
import data from "../data";
import RenderProducts from "./RenderProducts";
import LoadingBar from "./LoadingBar";

const Home = ({ slides }) => {
  const [val, setVal] = useState(10);
  useEffect(() => {
    setTimeout(() => {
      setVal(val + 10);
    }, 500);
  }, [val]);

  const ref = useRef(null);
  
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      {val<100?<LoadingBar width={val}/>:
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
      </div>}
    </div>
  );
};

export default Home;
