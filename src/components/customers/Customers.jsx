import React from "react";

import "./customers.scss";
import Comments from "../comments/Comments";

const Customers = () => {
  return (
    <section className="customers ">
      <div className="customers__wrapper container">
        <h1>OUR HAPPY CUSTOMERS</h1>
        <Comments />
      </div>
    </section>
  );
};

export default Customers;
