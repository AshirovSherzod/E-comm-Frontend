import React from "react";
import { Link } from "react-router-dom";

import "./empty.scss";
import Products from "../arrivals/Products";
import { useGetProductsQuery } from "../../context/api/productApi";

const Empty = ({ title, img, desc }) => {
  const { data, isLoading } = useGetProductsQuery({ limit: 4 });

  return (
    <div className="empty ">
      <div className="empty__wrapper container">
        <img src={img} alt="" />
        <h1>{title}</h1>
        <p>{desc}</p>
        <Link to={"/"}>
          <button>Go Home</button>
        </Link>
      </div>
      <Products
        title={"YOU MIGHT ALSO LIKE"}
        data={data ? data?.payload : []}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Empty;
