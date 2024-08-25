import React, { useState } from "react";

import "./shop.scss";
import {
  useGetProductByCategoryQuery,
  useGetProductsQuery,
} from "../../context/api/productApi";
import Products from "../../components/arrivals/Products";
import { FiSliders } from "react-icons/fi";
import { useGetAllCategoriesQuery } from "../../context/api/categoryApi";

const Shop = () => {
  const [id, setId] = useState("all");
  const { data: categoryData } = useGetAllCategoriesQuery();
  const { data, isLoading } = useGetProductByCategoryQuery(id);

  let categories = categoryData?.payload?.map((category) => (
    <p key={category._id} onClick={() => setId(category._id)}>
      {category.title}
    </p>
  ));

  return (
    <main className="shop container">
      <div className="shop__left">
        <div className="shop__left-top">
          <h2>Filters</h2>
          <p>
            <FiSliders />
          </p>
        </div>
        <div className="shop__left-category">
          <p onClick={() => setId("all")}>All</p>
          {categories}
        </div>
      </div>
      <div className="shop__right">
        <h2>Casual</h2>
        <Products
          title={"TOP SELLING"}
          data={data ? data?.payload : []}
          isLoading={isLoading}
        />
      </div>
    </main>
  );
};

export default Shop;
