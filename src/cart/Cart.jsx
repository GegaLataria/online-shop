import { Context } from "../App";
import React from "react";
import "./Cart.css";
import CartItems from "./CartItems";

const Cart = () => {
  const value = React.useContext(Context);

  let product = JSON.parse(localStorage.getItem("product"));
  console.log("cart product", product);

  const handleClick = () => {
    value.setCartItems(0);
    value.setProducts([]);
    window.localStorage.setItem("cartItems", JSON.stringify(0));
    window.localStorage.setItem("product", JSON.stringify([]));
  };

  return (
    <div>
      <h2 className="cart-header">Cart</h2>

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
