import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-list">
        <a href="/terms-and-conditions" className="footer-list__item">
          Terms and Conditions
        </a>
        <a href="/contact" className="footer-list__item">
          Contact
        </a>
        <a href="/partners" className="footer-list__item">
          Partners
        </a>
        <a href="/about-us" className="footer-list__item">
          About Us
        </a>
      </div>
    </div>
  );
};
export default Footer;
