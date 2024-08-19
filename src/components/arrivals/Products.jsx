import React from "react";
import { IoStar } from "react-icons/io5";

import "./products.scss";
import { productApi } from "../../context/api/productApi";
import ProductItem from "./ProductItem";

const Arrivals = ({ title, data, isSuccess, isLoading }) => {
  let cards = data.map((product) => (
    <ProductItem
      key={product._id}
      title={product.title}
      price={product.price}
      data={product}
      img={product.urls[0]}
    />
  ));

  return (
    <section className="arrivals container">
      <h1>{title}</h1>
      {isLoading ? (
        <div className="arrivals__loading">
          <div className="arrivals__loader">
            <div className="arrivals__loader-img"></div>
            <div className="arrivals__loader-content">
              <div className=""></div>
              <div className=""></div>
              <div className=""></div>
            </div>
          </div>
          <div className="arrivals__loader">
            <div className="arrivals__loader-img"></div>
            <div className="arrivals__loader-content">
              <div className=""></div>
              <div className=""></div>
              <div className=""></div>
            </div>
          </div>
          <div className="arrivals__loader">
            <div className="arrivals__loader-img"></div>
            <div className="arrivals__loader-content">
              <div className=""></div>
              <div className=""></div>
              <div className=""></div>
            </div>
          </div>
          <div className="arrivals__loader">
            <div className="arrivals__loader-img"></div>
            <div className="arrivals__loader-content">
              <div className=""></div>
              <div className=""></div>
              <div className=""></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="arrivals__cards">{cards}</div>
      )}
      <button className="viewAll">View All</button>
    </section>
  );
};

export default Arrivals;
