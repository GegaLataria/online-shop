import { useRef } from "react";
import ImageSlider from "../slider/ImageSlider";
import "./Home.css";

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
          იშოპინგე
        </button>
      </div>
      <div ref={ref} className="products-section">
        <h2>პოპულარული პროდუქცია</h2>
        <div className="products-section__list">
          <div className="products-section__list__item">
            <a href="www.sleek.ge">უთო</a>
          </div>
          <div className="products-section__list__item">
            <a href="www.sleek.ge">გაზქურა</a>
          </div>
          <div className="products-section__list__item">
            <a href="www.sleek.ge">ფენი</a>
          </div>
          <div className="products-section__list__item">
            <a
              className="products-section__list__item__input"
              href="www.sleek.ge"
            >
              ტელეფონი
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
