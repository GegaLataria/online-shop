import { Context } from "../App";
import React from "react";
import "./Cart.css";
import exportedObject from "../products/CartButton";

const Cart = () => {
  const value = React.useContext(Context);

  const handleClick = () => {
    value.setCartItems(0);
    window.localStorage.setItem("cartItems", JSON.stringify(0));
    window.localStorage.setItem(
      "product",
      JSON.stringify({ header: null, image: null, price: null })
    );
  };

  const handleSubtract = () => {
    if (value.cartItems > 1) {
      value.setCartItems(value.cartItems - 1);
      window.localStorage.setItem(
        "cartItems",
        JSON.stringify(value.cartItems - 1)
      );
      window.localStorage.setItem(
        "product",
        JSON.stringify({ header: header, image: image, price: price })
      );
    }
  };

  const product = JSON.parse(localStorage.getItem("product"));
  const { header, image, price } = product;

  return (
    <div>
      <h2 className="cart-header">კალათა</h2>
      <h2>
        {value.cartItems
          ? `თქვენ გაქვთ ${value.cartItems} ნივთი კალათაში`
          : `თქვენი კალათა ცარიელია`}
      </h2>
      {header ? (
        <div className="cart-page-container">
          <div className="cart-page-container__item">
            <img src={image} alt="product" className="cart-image"></img>
          </div>
          <div className="cart-page-container__item">
            <div className="cart-numbers-button">
              <h2
                onClick={handleSubtract}
                className="cart-numbers-button__item"
              >
                —
              </h2>
              <h2>{value.cartItems}</h2>
              <h2
                onClick={() =>
                  exportedObject.handleClick({ header, image, price }, value)
                }
                className="cart-numbers-button__item"
              >
                +
              </h2>
            </div>
          </div>
          <div className="cart-page-container__item">
            <h2>{header}</h2>
            <h2>{price}₾</h2>
          </div>
          <div className="cart-page-container__item">
            <h2>სულ თანხა: </h2>
            <h2>{value.cartItems * price}₾</h2>
          </div>
          <div className="cart-page-container__item">
            <button onClick={handleClick} className="clear-cart-button">
              წაშლა
            </button>
          </div>
        </div>
      ) : null}
      <br></br>
      {header ? (
        <button className="clear-cart-button" onClick={handleClick}>
          კალათის გასუფთავება
        </button>
      ) : null}
    </div>
  );
};

export default Cart;
