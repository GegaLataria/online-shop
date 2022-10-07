import React from "react";

export default function Buy() {
  return (
    <div>
      <h2 className="cart-header">Buy</h2>
      <div className="form-container">
        <form>
          <input type={"text"} placeholder="First Name" required></input>
          <input type={"text"} placeholder="Last Name" required></input>
          <input type={"email"} placeholder="Email" required></input>
          <input type={"text"} placeholder="Country" required></input>
          <input type={"text"} placeholder="City" required></input>
          <input type={"text"} placeholder="Address" required></input>
          <input type={"submit"} placeholder="Submit"></input>
        </form>
      </div>
    </div>
  );
}
