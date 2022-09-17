import React from "react";
import { Context } from "../App";

const CartButton = () => {
  const value = React.useContext(Context);
  const handleClick = () => {
    value.setCartItems(value.cartItems + 1);
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
