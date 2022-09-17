import { Context } from "../App";
import React from "react";

const Cart = () => {
  const value = React.useContext(Context);
  const handleClick = () => {
    value.setCartItems(0);
    window.localStorage.setItem("cartItems", JSON.stringify(0));
  };

  return (
    <div>
      <button onClick={handleClick}>Clear Cart</button>
    </div>
  );
};

export default Cart;
