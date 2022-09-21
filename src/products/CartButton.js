import React from "react";
import { Context } from "../App";
import data from "../data";

const handleClick = ({ header, image, price, index }, value) => {
  // const product = JSON.parse(localStorage.getItem("product"));
  // value.setProducts({ header: header, image: image, price: price });

  //new start
  console.log("header", header);
  console.log("data", data);
  console.log("index", index);
  const exist = value.products.find((x) => x.id === index);
  if (exist) {
    console.log(exist);
  } else {
    value.setProducts([...value.products, { ...data[index], amount: 1 }]);
  }
  //finish

  value.setCartItems(value.cartItems + 1);
  window.localStorage.setItem("cartItems", JSON.stringify(value.cartItems + 1));
  window.localStorage.setItem(
    "product",
    JSON.stringify({ header: header, image: image, price: price })
  );
};

const CartButton = ({ header, image, price, index }) => {
  const value = React.useContext(Context);
  return (
    <div>
      <button
        onClick={() => handleClick({ header, image, price, index }, value)}
        className="cart-button"
      >
        კალათაში დამატება
      </button>
    </div>
  );
};

const exportedObject = { CartButton, handleClick };
export default exportedObject;
