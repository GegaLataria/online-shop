import React from "react";
import { Context } from "../App";

const handleClick = ({ header, iphone, price }, value) => {
  console.log(value);
  value.setCartItems(value.cartItems + 1);
  window.localStorage.setItem("cartItems", JSON.stringify(value.cartItems + 1));
  window.localStorage.setItem(
    "product",
    JSON.stringify({ header: header, image: iphone, price: price })
  );
};

const CartButton = ({ header, iphone, price }) => {
  const value = React.useContext(Context);
  return (
    <div>
      <button
        onClick={() => handleClick({ header, iphone, price }, value)}
        className="cart-button"
      >
        კალათაში დამატება
      </button>
    </div>
  );
};

const exportedObject = { CartButton, handleClick };
export default exportedObject;
