import React from "react";

import "./empty.scss";

const Empty = ({ title, img }) => {
  return (
    <div className="empty ">
      <div className="empty__wrapper container">
        <img src={img} alt="" />
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Empty;
