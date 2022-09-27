import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-list">
        <a href="/terms-and-conditions" className="footer-list__item">
          წესები და პირობები
        </a>
        <a href="/contact" className="footer-list__item">
          კონტაქტი
        </a>
        <a href="/partners" className="footer-list__item">
          პარტნიორები
        </a>
        <a href="/about-us" className="footer-list__item">
          ჩვენ შესახებ
        </a>
      </div>
    </div>
  );
};
export default Footer;
