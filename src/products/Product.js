import iphone from "./iphone.jpg";
import "./Product.css";
const Product = () => {
  return (
    <div className="product-page">
      <h2 className="product-header">Iphone 14 Pro Max</h2>

      <div className="product-page__container">
        <div className="product-page__container__column">
          <img src={iphone} alt="iphone-photo" className="product-image"></img>
        </div>
        <div className="product-page__container__column">
          <h3>მოკლე აღწერა:</h3>
          <p>ეკრანის ზომა: 6.7"</p>
          <p>შიდა მეხსიერება: 256GB</p>
          <p>ოპერატიული მეხსიერება: 6 GB</p>
          <p>მთავარი კამერა: 12+12+12 MP</p>
          <p>• უფასო მიწოდება 50 ლარიდან</p>
          <p>• მიწოდება თბილისში 1-3 სამუშაო დღე</p>
          <p>• მიწოდება საქართველოს მასშტაბით 3-5 სამუშაო დღე</p>
          <p>• გადახდა ნებისმიერი ბანკის ბარათით ან განვადებით</p>
          <p>• დაბრუნება შესაძლებელია მიღებიდან 14 დღის განმავლობაში</p>
        </div>
      </div>
      <div className="buttons-container">
        <h2 className="price-tag">ფასი: 4199₾</h2>
        <button className="shop-button">ყიდვა</button>
        <button className="cart-button">კალათაში დამატება</button>
      </div>
    </div>
  );
};
export default Product;
