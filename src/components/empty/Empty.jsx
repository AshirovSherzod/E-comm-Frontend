import React from "react";
import { Link } from "react-router-dom";

import "./empty.scss";

const Empty = ({ title, img }) => {
  return (
    <div className="empty ">
      <div className="empty__wrapper container">
        <img src={img} alt="" />
        <h1>{title}</h1>
        <Link to={"/"}>
          <button>Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Empty;
