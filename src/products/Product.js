import iphone from "./iphone.jpg";
import iphone2 from "./iphone-2.jpg";
import React, { useState } from "react";
import "./Product.css";
import { Context } from "../App";

const Product = () => {
  const [selected, setSelected] = useState(iphone);
  const [zoomedImage, setZoomedImage] = useState(false);
  const value = React.useContext(Context);
  const header = "Iphone 14 Pro Max";

  const handleClick = () => {
    value.setCartItems(value.cartItems + 1);
    window.localStorage.setItem(
      "cartItems",
      JSON.stringify(value.cartItems + 1)
    );
    window.localStorage.setItem(
      "product",
      JSON.stringify({ header: header, image: iphone })
    );
  };

  return (
    <div className="product-page">
      <h2 className="product-header">{header}</h2>
      <div className="product-page__container">
        <div className="product__column__small">
          <img
            src={iphone}
            alt="iphone"
            className={`product-image-small ${
              selected === iphone ? "selected-image" : ""
            }`}
            onClick={() => setSelected(iphone)}
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
            // onClick={() => setZoomedImage(true)}
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
      <div className="buttons-container">
        <h2 className="price-tag">ფასი: 4199₾</h2>
        <button className="shop-button">ყიდვა</button>
        <button onClick={handleClick} className="cart-button">
          კალათაში დამატება
        </button>
      </div>
    </div>
  );
};
export default Product;
