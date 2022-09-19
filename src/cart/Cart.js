import { Context } from "../App";
import React from "react";
import "./Cart.css";

const Cart = () => {
  const value = React.useContext(Context);
  const handleClick = () => {
    value.setCartItems(0);
    window.localStorage.setItem("cartItems", JSON.stringify(0));
    window.localStorage.setItem(
      "product",
      JSON.stringify({ header: null, image: null })
    );
  };

  const product = JSON.parse(localStorage.getItem("product"));

  return (
    <div>
      <h2 className="cart-header">კალათა</h2>
      <h2>
        {value.cartItems
          ? `თქვენ გაქვთ ${value.cartItems} ნივთი კალათაში`
          : `თქვენი კალათა ცარიელია`}
      </h2>
      <h2>{product.header}</h2>
      {product.image ? (
        <img src={product.image} alt="product" className="cart-image"></img>
      ) : null}
      <br></br>
      <button className="clear-cart-button" onClick={handleClick}>
        კალათის გასუფთავება
      </button>
    </div>
  );
};

export default Cart;
