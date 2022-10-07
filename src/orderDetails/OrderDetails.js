import React from "react";
import "./OrderDetails.css";

export default function OrderDetails() {
  return (
    <div>
      <h2 className="cart-header">Buy</h2>
      <div className="form-container">
        <form className="form-container__list">
          <input
            className="form-container__list__item"
            type={"text"}
            placeholder="First Name"
            required
          ></input>
          <input
            className="form-container__list__item"
            type={"text"}
            placeholder="Last Name"
            required
          ></input>
          <input
            className="form-container__list__item"
            type={"email"}
            placeholder="Email"
            required
          ></input>
          <input
            className="form-container__list__item"
            type={"text"}
            placeholder="Country"
            required
          ></input>
          <input
            className="form-container__list__item"
            type={"text"}
            placeholder="City"
            required
          ></input>
          <input
            className="form-container__list__item"
            type={"text"}
            placeholder="Address"
            required
          ></input>
          <button className="clear-cart-button">Submit</button>
        </form>
      </div>
    </div>
  );
}
