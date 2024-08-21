import React from "react";
import "./footer.scss";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();

  if (pathname.includes("/sign-in") || pathname.includes("/admin"))
    return <></>;

  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <div className="newsletter">
          <h2>
            STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
          </h2>
          <form className="subscribe" action="">
            <input type="text" placeholder="Enter your email address" />
            <button>Subscribe to Newslatter</button>
          </form>
        </div>
        <div className="footer-content">
          <div className="section">
            <h3>SHOP.CO</h3>
            <p>
              We have clothes that suit your style and which you're proud to
              wear. From women to men.
            </p>
            <div className="social-media">
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="section">
            <h4>COMPANY</h4>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Works</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>
          <div className="section">
            <h4>HELP</h4>
            <ul>
              <li>
                <a href="#">Customer Support</a>
              </li>
              <li>
                <a href="#">Delivery Details</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="section">
            <h4>FAQ</h4>
            <ul>
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <a href="#">Manage Deliveries</a>
              </li>
              <li>
                <a href="#">Orders</a>
              </li>
              <li>
                <a href="#">Payments</a>
              </li>
            </ul>
          </div>
          <div className="section">
            <h4>RESOURCES</h4>
            <ul>
              <li>
                <a href="#">Free eBooks</a>
              </li>
              <li>
                <a href="#">Development Tutorial</a>
              </li>
              <li>
                <a href="#">How to - Blog</a>
              </li>
              <li>
                <a href="#">Youtube Playlist</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="payment-methods">
            <img src="visa.png" alt="Visa" />
            <img src="mastercard.png" alt="MasterCard" />
            <img src="paypal.png" alt="PayPal" />
            <img src="apple-pay.png" alt="Apple Pay" />
            <img src="google-pay.png" alt="Google Pay" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
