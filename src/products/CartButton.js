import React from "react";
import { Context } from "../App";
import data from "../data";

const handleClick = ({ header, image, price, index }, value) => {
  // value.setProducts({ header: header, image: image, price: price });

  //new start
  const product = JSON.parse(localStorage.getItem("product"));
  console.log(product);
  if (product.header) {
    value.setProducts(product);
  }
  const exist = value.products.find((x) => x.id === index);
  if (exist) {
    value.setProducts(
      value.products.map((x) =>
        x.id === index ? { ...exist, amount: exist.amount + 1 } : x
      )
    );
  } else {
    value.setProducts([...value.products, { ...data[index], amount: 1 }]);
  }
  //finish

  value.setCartItems(value.cartItems + 1);
  window.localStorage.setItem("cartItems", JSON.stringify(value.cartItems + 1));
  window.localStorage.setItem("product", JSON.stringify(value.products));
};

const CartButton = ({ header, image, price, index }) => {
  const value = React.useContext(Context);
  return (
    <div>
      <button
        onClick={() => handleClick({ header, image, price, index }, value)}
        className="cart-button"
      >
        კალათაში დამატება
      </button>
    </div>
  );
};

const exportedObject = { CartButton, handleClick };
export default exportedObject;
