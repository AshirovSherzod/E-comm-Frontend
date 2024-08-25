import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetProductByIdQuery,
  useGetProductsQuery,
} from "../../context/api/productApi";
import { IoStar } from "react-icons/io5";
import Counter from "../../components/counter/Counter";

import "./details.scss";
import AbtabDetails from "../../components/abtabdetails/AbtabDetails";
import AbtabReviews from "../../components/abtabreviews/AbtabReviews";
import AbtabFaqs from "../../components/abtabfaqs/AbtabFaqs";
import Products from "../../components/arrivals/Products";

const Deatails = () => {
  let { id } = useParams();
  const { data } = useGetProductByIdQuery(id);
  const { data: dataProducts, isLoading } = useGetProductsQuery({ limit: 4 });

  const [selectedImage, setSelectedImage] = useState(0);
  const [abtab, setAbtab] = useState(2);

  useEffect(() => {
    window.scroll(0, 0);
  }, [id]);

  let images = data?.payload?.urls.map((el, inx) => (
    <img
      key={inx}
      src={el}
      className={`${inx === selectedImage ? "active" : ""}`}
      onClick={() => setSelectedImage(inx)}
      alt={data?.payload?.title}
    />
  ));

  return (
    <section className="details container">
      <div className="details__top">
        <div className="details__top-left">
          <div className="details__top-left__images">{images}</div>
          <div className="details__top-left__image">
            <img src={data?.payload?.urls[selectedImage]} alt="" />
          </div>
        </div>
        <div className="details__top-right">
          <div className="details__top-right__title">
            <h1>{data?.payload?.title}</h1>
            <p>
              <IoStar style={{ color: "gold" }} />
              <IoStar style={{ color: "gold" }} />
              <IoStar style={{ color: "gold" }} />
              <IoStar style={{ color: "gold" }} />
              <IoStar style={{ color: "gold" }} />
            </p>
            <p>
              ${data?.payload?.price} <span>${data?.payload?.oldPrice}</span>
            </p>
            <p>{data?.payload?.desc}</p>
          </div>
          <div className="details__top-right__btns">
            <Counter data={data} />
            <button className="addtocart">Add to card</button>
          </div>
        </div>
      </div>
      <div className="details__bottom">
        <div className="abtab__header">
          <h3
            onClick={() => setAbtab(1)}
            className={`${abtab === 1 ? "active" : ""}`}
          >
            Details
          </h3>
          <h3
            onClick={() => setAbtab(2)}
            className={`${abtab === 2 ? "active" : ""}`}
          >
            Reviews
          </h3>
          <h3
            onClick={() => setAbtab(3)}
            className={`${abtab === 3 ? "active" : ""}`}
          >
            FAQs
          </h3>
        </div>
        <div className="abtab__body">
          {abtab === 1 ? (
            <AbtabDetails />
          ) : abtab === 2 ? (
            <AbtabReviews id={id} />
          ) : abtab === 3 ? (
            <AbtabFaqs />
          ) : (
            <></>
          )}
        </div>
      </div>
      <Products
        title={"YOU MIGHT ALSO LIKE"}
        data={dataProducts ? dataProducts?.payload : []}
        isLoading={isLoading}
      />
    </section>
  );
};

export default Deatails;
