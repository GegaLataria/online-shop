import { Context } from "../App";
import React from "react";
import "./Cart.css";

const Cart = () => {
  const value = React.useContext(Context);
  const handleClick = () => {
    value.setCartItems(0);
    window.localStorage.setItem("cartItems", JSON.stringify(0));
  };

  return (
    <div>
      <h2 className="cart-header">კალათა</h2>
      <button className="clear-cart-button" onClick={handleClick}>
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
