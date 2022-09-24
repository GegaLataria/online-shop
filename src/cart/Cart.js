import { Context } from "../App";
import React from "react";
import "./Cart.css";
// import exportedObject from "../products/CartButton";
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
      <h2 className="cart-header">კალათა</h2>
      <h2>
        {value.cartItems
          ? `თქვენ გაქვთ ${value.cartItems} ნივთი კალათაში`
          : `თქვენი კალათა ცარიელია`}
      </h2>
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
          <button className="clear-cart-button" onClick={handleClick}>
            კალათის გასუფთავება
          </button>
          <div className="cart-helper-container">
            <h2 className="total-money-header">
              ჯამური თანხა:{" "}
              {value.products.reduce(function (prev, cur) {
                return prev + cur.amount * cur.price;
              }, 0)}
              ₾
            </h2>
            <button className="clear-cart-button">ყიდვა</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
