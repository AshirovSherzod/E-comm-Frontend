import React from "react";

import "./wishlist.scss";
import { useSelector } from "react-redux";
import Products from "../../components/arrivals/Products";
import Empty from "../../components/empty/Empty";
import img from "../../assets/images/empty-wishlist.webp";

const Wishlist = () => {
  const wishlistData = useSelector((state) => state.wishlist.value);

  return (
    <section>
      {wishlistData.length ? (
        <Products title={"Wishlist"} data={wishlistData} />
      ) : (
        <Empty title={"Your wishlist empty"} img={img} />
      )}
    </section>
  );
};

export default Wishlist;
