import React from "react";

export default function RenderProducts({ data }) {
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
              <span className="products-section__list__item__price">
                {x.header}
              </span>
              <br></br>
              <span className="products-section__list__item__price">
                {x.price}₾
              </span>
            </a>
          </div>
        );
      })}
    </div>
  );
}
