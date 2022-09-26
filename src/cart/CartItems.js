import React from "react";
import exportedObject from "../products/CartButton";

export default function CartItems({
  header,
  image,
  price,
  index,
  amount,
  value,
}) {
  const handleClick = () => {
    console.log(index);
    value.setCartItems(value.cartItems - amount);
    value.products.splice(index, 1);
    value.setProducts(value.products);
    window.localStorage.setItem(
      "cartItems",
      JSON.stringify(value.cartItems - amount)
    );
    window.localStorage.setItem("product", JSON.stringify(value.products));
    let totalQty = JSON.parse(localStorage.getItem("cartItems"));
    if (totalQty === 0) {
      value.setProducts([]);
      window.localStorage.setItem("product", JSON.stringify([]));
    }
  };

  const handleSubtract = () => {
    const exist = value.products.find((x) => x.id === index);

    if (amount > 1) {
      value.setCartItems(value.cartItems - 1);
      window.localStorage.setItem(
        "cartItems",
        JSON.stringify(value.cartItems - 1)
      );
      value.setProducts(
        value.products.map((x) =>
          x.id === index ? { ...exist, amount: exist.amount - 1 } : x
        )
      );
      window.localStorage.setItem(
        "product",
        JSON.stringify(
          value.products.map((x) =>
            x.id === index ? { ...exist, amount: exist.amount - 1 } : x
          )
        )
      );
    }
  };

  return (
    <div>
      {header ? (
        <div className="cart-page-container">
          <div className="cart-page-container__item">
            <img src={image} alt="product" className="cart-image"></img>
          </div>
          <div className="cart-page-container__item">
            <div className="cart-numbers-button">
              <h2
                onClick={handleSubtract}
                className="cart-numbers-button__item"
              >
                —
              </h2>
              <h2>{amount}</h2>
              <h2
                onClick={() =>
                  exportedObject.handleClick(
                    { header, image, price, index },
                    value
                  )
                }
                className="cart-numbers-button__item"
              >
                +
              </h2>
            </div>
          </div>
          <div className="cart-page-container__item">
            <h2>{header}</h2>
            <h2>{price}₾</h2>
          </div>
          <div className="cart-page-container__item">
            <h2>სულ თანხა: </h2>
            <h2>{amount * price}₾</h2>
          </div>
          <div className="cart-page-container__item">
            <button onClick={handleClick} className="clear-cart-button">
              წაშლა
            </button>
          </div>
        </div>
      ) : null}
      <br></br>
    </div>
  );
}
