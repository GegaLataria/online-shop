import { Context } from "../App";
import React from "react";
import "./Cart.css";
import exportedObject from "../products/CartButton";

const Cart = () => {
  const value = React.useContext(Context);
  const handleClick = () => {
    value.setCartItems(0);
    window.localStorage.setItem("cartItems", JSON.stringify(0));
    window.localStorage.setItem("product", JSON.stringify({}));
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
      <div className="cart-page-container">
        <div className="cart-page-container__item">
          {product.image ? (
            <img src={product.image} alt="product" className="cart-image"></img>
          ) : null}
        </div>
        <div className="cart-page-container__item">
          <div className="cart-numbers-button">
            <h2 className="cart-numbers-button__item">—</h2>
            <h2>{value.cartItems}</h2>
            <h2 className="cart-numbers-button__item">+</h2>
          </div>
        </div>
        <div className="cart-page-container__item">
          <h2>{product.header}</h2>
          <h2>{product.price}</h2>
        </div>
      </div>
      <br></br>
      <button className="clear-cart-button" onClick={handleClick}>
        კალათის გასუფთავება
      </button>
    </div>
  );
};

export default Cart;
