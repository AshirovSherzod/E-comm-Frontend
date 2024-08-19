import React from "react";

import "./dressstyle.scss";
import img1 from "../../assets/images/dress-style/1.jpg";
import img2 from "../../assets/images/dress-style/2.png";
import img3 from "../../assets/images/dress-style/3.png";
import img4 from "../../assets/images/dress-style/4.png";

const DressStyle = () => {
  return (
    <section className="dress-style">
      <div className="container">
        <div className="dress-style__wrapper">
          <h1>PROWSE BY DRESS STYLE</h1>
          <div className="dress-style__cards">
            <div className="dress-style__card">
              <h3>Casual</h3>
              <img src={img1} alt="" />
            </div>
            <div className="dress-style__card">
              <h3>Formal</h3>
              <img src={img2} alt="" />
            </div>
            <div className="dress-style__card">
              <h3>Party</h3>
              <img src={img3} alt="" />
            </div>
            <div className="dress-style__card">
              <h3>Gym</h3>
              <img src={img4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressStyle;
