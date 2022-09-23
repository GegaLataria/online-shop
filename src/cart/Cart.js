import { Context } from "../App";
import React from "react";
import "./Cart.css";
// import exportedObject from "../products/CartButton";
import CartItems from "./CartItems";

const Cart = () => {
  const value = React.useContext(Context);

  let product = JSON.parse(localStorage.getItem("product"));
  console.log("cart product", product);
  // if (product) {
  //   product = product[0];
  // }

  // const { header, image, price, index } = product || {};

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
            key={x?.id}
            header={x?.header}
            price={x?.price}
            index={x?.index}
            image={x?.image}
            value={value}
          />
        );
      })}
    </div>
  );
};

export default Cart;
