import React from "react";

import "./hero.scss";
import img from "../../assets/images/hero/hero-img1.png";
import img1 from "../../assets/images/hero/hero-1.png";
import img2 from "../../assets/images/hero/hero-2.png";
import img3 from "../../assets/images/hero/hero-3.png";
import img4 from "../../assets/images/hero/hero-4.png";
import img5 from "../../assets/images/hero/hero-5.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__wrapper container">
        <div className="hero__left">
          <h1>
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
          </h1>
          <p>
            Browse through our diverse range of meticulously crafted garments,{" "}
            <br /> designed to bring out your individuality and cater to your
            sense of style.
          </p>
          <button>Shop Now</button>
          <div className="hero__left-result">
            <div className="hero__left-result__card">
              <h3>200+</h3>
              <p>International Brands</p>
            </div>
            <div className="hero__left-result__card">
              <h3>2,000+</h3>
              <p>High-Quality Products</p>
            </div>
            <div className="hero__left-result__card">
              <h3>30,000+</h3>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="hero__right">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="hero__bottom">
        <div className="hero__bottom-wrapper container">
          <div className="hero__bottom-wrapper__scroll">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
          </div>
          <div className="hero__bottom-wrapper__scroll">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
