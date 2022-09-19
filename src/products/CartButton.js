import React from "react";
import { Context } from "../App";

const handleClick = ({ header, image, price }, value) => {
  value.setCartItems(value.cartItems + 1);
  window.localStorage.setItem("cartItems", JSON.stringify(value.cartItems + 1));
  window.localStorage.setItem(
    "product",
    JSON.stringify({ header: header, image: image, price: price })
  );
};

const CartButton = ({ header, image, price }) => {
  const value = React.useContext(Context);
  return (
    <div>
      <button
        onClick={() => handleClick({ header, image, price }, value)}
        className="cart-button"
      >
        კალათაში დამატება
      </button>
    </div>
  );
};

const exportedObject = { CartButton, handleClick };
export default exportedObject;
