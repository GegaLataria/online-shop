import React from "react";
import { Context } from "../App";

const CartButton = ({ header, iphone }) => {
  const value = React.useContext(Context);

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
    <div>
      <button onClick={handleClick} className="cart-button">
        კალათაში დამატება
      </button>
    </div>
  );
};

export default CartButton;
