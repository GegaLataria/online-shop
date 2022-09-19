import React from "react";
import { Context } from "../App";

const CartButton = ({ header, iphone, price }) => {
  const value = React.useContext(Context);
  console.log(price);

  const handleClick = () => {
    value.setCartItems(value.cartItems + 1);
    window.localStorage.setItem(
      "cartItems",
      JSON.stringify(value.cartItems + 1)
    );
    window.localStorage.setItem(
      "product",
      JSON.stringify({ header: header, image: iphone, price: price })
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
