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
        <div className="title-container">
          <h2 className="products-section__title">პოპულარული პროდუქცია</h2>
        </div>
        <div className="products-section__list">
          <div className="products-section__list__item">
            <a
              className="products-section__list__item__input"
              href="/product/id-1"
            >
              უთო
            </a>
          </div>
          <div className="products-section__list__item">
            <a
              className="products-section__list__item__input"
              href="https://extra.ge/"
            >
              გაზქურა
            </a>
          </div>
          <div className="products-section__list__item">
            <a
              className="products-section__list__item__input"
              href="https://extra.ge/"
            >
              ფენი
            </a>
          </div>
          <div className="products-section__list__item">
            <a
              className="products-section__list__item__input"
              href="https://extra.ge/"
            >
              ტელეფონი
            </a>
          </div>
          <div className="products-section__list__item">
            <a
              className="products-section__list__item__input"
              href="https://extra.ge/"
            >
              გაზქურა
            </a>
          </div>
          <div className="products-section__list__item">
            <a
              className="products-section__list__item__input"
              href="https://extra.ge/"
            >
              გაზქურა
            </a>
          </div>
          <div className="products-section__list__item">
            <a
              className="products-section__list__item__input"
              href="https://extra.ge/"
            >
              გაზქურა
            </a>
          </div>
          <div className="products-section__list__item">
            <a
              className="products-section__list__item__input"
              href="https://extra.ge/"
            >
              გაზქურა
            </a>
          </div>
          <div className="products-section__list__item">
            <a
              className="products-section__list__item__input"
              href="https://extra.ge/"
            >
              გაზქურა
            </a>
          </div>
          <div className="products-section__list__item">
            <a
              className="products-section__list__item__input"
              href="https://extra.ge/"
            >
              გაზქურა
            </a>
          </div>
          <div className="products-section__list__item">
            <a
              className="products-section__list__item__input"
              href="https://extra.ge/"
            >
              გაზქურა
            </a>
          </div>
          <div className="products-section__list__item">
            <a
              className="products-section__list__item__input"
              href="https://extra.ge/"
            >
              გაზქურა
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;