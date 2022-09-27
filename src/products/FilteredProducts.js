import React from "react";
import data from "../data";
import RenderProducts from "../home/RenderProducts";
import "../home/Home.css";

export default function FilteredProducts({ product }) {
  const filteredData = data.filter((x) => x.header.includes(product));
  return (
    <div className="products-section">
      <RenderProducts data={filteredData} />
    </div>
  );
}
