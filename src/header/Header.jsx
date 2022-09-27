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
        <a href="/iphone" className="header-list__item">
          Iphone
        </a>
        <a href="/mac" className="header-list__item">
          Mac
        </a>
        <a href="/airpods" className="header-list__item">
          Airpods
        </a>
        <a href="/watch" className="header-list__item">
          Watch
        </a>
        <a href="/accessories" className="header-list__item">
          Accessories
        </a>
        <a href="/cart" className="header-list__item header-list__cart">🛒{value.cartItems?<span className="cart-items">{value.cartItems}</span>:null}</a>
      </div>
    </div>
  );
};
export default Header;
