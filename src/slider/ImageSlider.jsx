import { useState } from "react";
import "./ImageSlider.css";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // setTimeout(()=>{
  //   goToNext();
  // }, 2500);


  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className={"sliderStyles"}>
      <div className={"leftArrowStyles"} onClick={goToPrevious}>
        ❰
      </div>
      <div className={"rightArrowStyles"} onClick={goToNext}>
        ❱
      </div>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="slideStyles"
      ></div>
      <div className="dotsContainerStyles">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className={currentIndex===slideIndex?"dotStyles selectedDot":"dotStyles"}
            onClick={(e) => goToSlide(slideIndex)}
          >
            •
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
