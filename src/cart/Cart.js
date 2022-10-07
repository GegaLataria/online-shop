import { Context } from "../App";
import React, { useState } from "react";
import "./Cart.css";
// import exportedObject from "../products/CartButton";
import CartItems from "./CartItems";

const Cart = () => {
  const value = React.useContext(Context);
  const [buyText, setBuyText] = useState(null);

  let product = JSON.parse(localStorage.getItem("product"));
  console.log("cart product", product);

  const handleClick = () => {
    value.setCartItems(0);
    value.setProducts([]);
    window.localStorage.setItem("cartItems", JSON.stringify(0));
    window.localStorage.setItem("product", JSON.stringify([]));
  };

  const handleBuyButton = () => {
    handleClick();
    setBuyText("Order is Confirmed!");
  };

  return (
    <div>
      <h2 className="cart-header">Cart</h2>

      {!buyText ? (
        <div className="order-container">
          {value.cartItems ? (
            <h2 className="buyText black">
              You have {value.cartItems} items in Cart
            </h2>
          ) : (
            <div>
              <h2 className="buyText black">Cart is Empty</h2>
              <a className="clear-cart-button" href="/">
                Continue Shopping
              </a>
            </div>
          )}
        </div>
      ) : (
        <div className="order-container">
          <div className="buyText">{buyText}</div>
          <a className="clear-cart-button" href="/">
            Continue Shopping
          </a>
        </div>
      )}

      {product?.map((x) => {
        return (
          <CartItems
            key={x.id}
            amount={x?.amount}
            header={x?.header}
            price={x?.price}
            index={x?.id}
            image={x?.image}
            value={value}
          />
        );
      })}
      {product.length > 0 ? (
        <div className="cart-items-container">
          <div className="clear-cart-button__helper">
            <button className="clear-cart-button" onClick={handleClick}>
              Clear Cart
            </button>
          </div>
          <div className="cart-helper-container">
            <h2 className="total-money-header">
              Total:{" "}
              {value.products.reduce(function (prev, cur) {
                return prev + cur.amount * cur.price;
              }, 0)}
              ₾
            </h2>
            <a href="/buy">
              <button className="clear-cart-button additional-buy">Buy</button>
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
