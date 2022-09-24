import "./Header.css";
// import cart from "./cart.jpg";
import React from "react";
import { Context } from "../App";

const Header = () => {
  const value = React.useContext(Context);
  return (
    <div className="header">
      <div className="header-list">
        <a href="/" className="header-list__item">
          მთავარი
        </a>
        <a href="https://extra.ge/" className="header-list__item">
          სათამაშოები
        </a>
        <a href="https://extra.ge/" className="header-list__item">
          ტექნიკა
        </a>
        <a href="https://extra.ge/" className="header-list__item">
          სახლი
        </a>
        <a href="https://extra.ge/" className="header-list__item">
          სპორტი
        </a>
        <a href="https://extra.ge/" className="header-list__item">
          სილამაზე
        </a>
        <a href="/cart" className="header-list__item header-list__cart">🛒{value.cartItems?<span className="cart-items">{value.cartItems}</span>:null}</a>
      </div>
    </div>
  );
};
export default Header;
