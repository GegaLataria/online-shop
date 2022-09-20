import image from "./iphone.jpg";
import iphone2 from "./iphone-2.jpg";
import React, { useState } from "react";
import "./Product.css";
import exportedObject from "./CartButton";
import BuyButton from "./BuyButton";

const Product = () => {
  const [selected, setSelected] = useState(image);
  const [zoomedImage, setZoomedImage] = useState(false);
  const header = "Iphone 14 Pro Max";
  const price = 4199;

  return (
    <div className="product-page">
      <h2 className="product-header">{header}</h2>
      <div className="product-page__container">
        <div className="product__column__small">
          <img
            src={image}
            alt="iphone"
            className={`product-image-small ${
              selected === image ? "selected-image" : ""
            }`}
            onClick={() => setSelected(image)}
          ></img>
          <img
            src={iphone2}
            alt="iphone"
            className={`product-image-small ${
              selected === iphone2 ? "selected-image" : ""
            }`}
            onClick={() => setSelected(iphone2)}
          ></img>
        </div>
        <div className="product-page__container__column_photo">
          <img
            src={selected}
            alt="iphone"
            className={`product-image ${zoomedImage ? "zoomed-image" : ""}`}
          ></img>
          <button className="zoom-button" onClick={() => setZoomedImage(true)}>
            +
          </button>
          <button className="zoom-button" onClick={() => setZoomedImage(false)}>
            -
          </button>
        </div>
        <div className="product-page__container__column">
          <h3>მოკლე აღწერა:</h3>
          <p>ეკრანის ზომა: 6.7"</p>
          <p>შიდა მეხსიერება: 256GB</p>
          <p>ოპერატიული მეხსიერება: 6 GB</p>
          <p>მთავარი კამერა: 12+12+12 MP</p>
          <p>• უფასო მიწოდება 50 ლარიდან</p>
          <p>• მიწოდება თბილისში 1-3 სამუშაო დღე</p>
          <p>• მიწოდება საქართველოს მასშტაბით 3-5 სამუშაო დღე</p>
          <p>• გადახდა ნებისმიერი ბანკის ბარათით ან განვადებით</p>
          <p>• დაბრუნება შესაძლებელია მიღებიდან 14 დღის განმავლობაში</p>
        </div>
      </div>
      <h2 className="price-tag">ფასი: {price}₾</h2>
      <div className="buttons-container">
        <BuyButton />
        <exportedObject.CartButton
          header={header}
          image={image}
          price={price}
        />
      </div>
    </div>
  );
};
export default Product;
