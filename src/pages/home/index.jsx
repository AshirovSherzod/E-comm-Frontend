import React from "react";
import Hero from "../../components/hero/Hero";
import Products from "../../components/arrivals/Products";
import DressStyle from "../../components/dressStyle/DressStyle";
import Customers from "../../components/customers/Customers";
import { useGetProductsQuery } from "../../context/api/productApi";

const Home = () => {
  const { data, isLoading } = useGetProductsQuery({ limit: 4 });
  const { data: data1, isLoading: isLoading1 } = useGetProductsQuery({
    limit: 4,
    skip: 1,
  });

  return (
    <main>
      <Hero />
      <Products
        title={"NEW ARRIVALS"}
        data={data1 ? data1?.payload : []}
        isLoading={isLoading1}
      />
      <div className="container">
        <hr />
      </div>
      <Products
        title={"TOP SELLING"}
        data={data ? data?.payload : []}
        isLoading={isLoading}
      />
      <DressStyle />
      <Customers />
    </main>
  );
};

export default Home;
