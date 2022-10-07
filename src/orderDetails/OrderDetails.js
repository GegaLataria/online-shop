import React, { useState } from "react";
import { Context } from "../App";
import "./OrderDetails.css";

export default function OrderDetails() {
  const value = React.useContext(Context);
  const [buyText, setBuyText] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    value.setCartItems(0);
    value.setProducts([]);
    window.localStorage.setItem("cartItems", JSON.stringify(0));
    window.localStorage.setItem("product", JSON.stringify([]));
    setBuyText("Order is Confirmed!");
  };

  return (
    <div>
      {!buyText ? (
        <div>
          <h2 className="cart-header">Order Details</h2>
          <div className="form-container">
            <form onSubmit={handleClick} className="form-container__list">
              <input
                className="form-container__list__item"
                type={"text"}
                required
                placeholder="First Name"
              ></input>
              <input
                className="form-container__list__item"
                type={"text"}
                required
                placeholder="Last Name"
              ></input>
              <input
                className="form-container__list__item"
                type={"number"}
                required
                placeholder="Phone Number"
              ></input>
              <input
                className="form-container__list__item"
                type={"email"}
                required
                placeholder="Email"
              ></input>
              <input
                className="form-container__list__item"
                type={"text"}
                required
                placeholder="Country"
              ></input>
              <input
                className="form-container__list__item"
                type={"text"}
                required
                placeholder="City"
              ></input>
              <input
                className="form-container__list__item"
                type={"text"}
                required
                placeholder="Address"
              ></input>
              <button className="clear-cart-button">Submit</button>
            </form>
          </div>
        </div>
      ) : (
        <div className="order-container">
          <h1 className="buyText">{buyText}</h1>
          <a className="clear-cart-button" href="/">
            Continue Shopping
          </a>
        </div>
      )}
    </div>
  );
}
