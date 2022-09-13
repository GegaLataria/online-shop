import ImageSlider from "../slider/ImageSlider";
import "./Home.css";

const Home = ({ slides }) => {
  return (
    <div>
      <ImageSlider slides={slides} />
      <div className="home-container">
        <button className="home-shop-button">იშოპინგე</button>
      </div>
    </div>
  );
};

export default Home;
