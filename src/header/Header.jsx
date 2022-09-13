import "./Header.css";
import cart from "./cart.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-list">
        <a href="https://extra.ge/" className="header-list__item">
          მთავარი
        </a>
        <a href="https://extra.ge/" className="header-list__item">
          სათამაშოები
        </a>
        <a href="https://extra.ge/" className="header-list__item">
          ტექნიკა
        </a>
        <a href="https://extra.ge/" className="header-list__item">
          სახლი
        </a>
        <a href="https://extra.ge/" className="header-list__item">
          სპორტი
        </a>
        <a href="https://extra.ge/" className="header-list__item">
          სილამაზე
        </a>
        <a href="https://extra.ge/" className="header-list__item header-list__cart">🛒</a>
      </div>
    </div>
  );
};
export default Header;
