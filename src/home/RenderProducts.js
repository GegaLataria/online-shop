import React from "react";
import data from "../data";

export default function RenderProducts() {
  return (
    <div className="products-section__list">
      {data.map((x) => {
        return (
          <div key={x.id} className="products-section__list__item">
            <a
              className="products-section__list__item__input"
              href={`/product/id-${x.id}`}
            >
              <img
                className="products-section__list__item__image"
                src={x.image}
                alt={x.header}
              ></img>
              {x.header}
              <br></br>
              {x.price}₾
            </a>
          </div>
        );
      })}
    </div>
  );
}
