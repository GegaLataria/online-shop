import React from "react";
import { Context } from "../App";
import data from "../data";

const handleClick = ({ header, image, price, index }, value) => {
  let product = JSON.parse(localStorage.getItem("product"));
  console.log("valueeee", value);

  if (product.header) {
    value.setProducts(product);
  }

  const exist = value.products.find((x) => x.id === index);

  if (exist) {
    console.log("already exist", value.products);
    value.setCartItems(value.cartItems + 1);
    value.setProducts(
      value.products.map((x) =>
        x.id === index ? { ...exist, amount: exist.amount + 1 } : x
      )
    );
    value.setCartItems(value.cartItems + 1);
  } else {
    console.log("val.prods", value.products);
    value.setProducts([...value.products, { ...data[index], amount: 1 }]);
    value.setCartItems(value.cartItems + 1);
    value.setCartItems(value.cartItems + 1);
  }

  if (product) {
    let productData;
    if (!exist) {
      productData = [...value.products, { ...data[index], amount: 1 }];
    } else {
      productData = value.products.map((x) =>
        x.id === index ? { ...exist, amount: exist.amount + 1 } : x
      );
    }
    window.localStorage.setItem(
      "cartItems",
      JSON.stringify(value.cartItems + 1)
    );
    window.localStorage.setItem("product", JSON.stringify(productData));
  }
};

const CartButton = ({ header, image, price, index }) => {
  const value = React.useContext(Context);
  return (
    <div>
      <button
        onClick={() => handleClick({ header, image, price, index }, value)}
        className="cart-button"
      >
        Add To Cart
      </button>
    </div>
  );
};

const exportedObject = { CartButton, handleClick };
export default exportedObject;
