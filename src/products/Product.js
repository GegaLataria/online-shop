import iphone from "./iphone.jpg";
import "./Product.css";
const Product = () => {
  return (
    <div className="product-page">
      <h2 className="product-header">Iphone 14 Pro Max</h2>
      <img src={iphone} alt="iphone-photo" className="product-image"></img>
    </div>
  );
};
export default Product;
