import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../context/api/productApi";
import { IoStar } from "react-icons/io5";
import Counter from "../../components/counter/Counter";

import "./details.scss";

const Deatails = () => {
  let { id } = useParams();
  const { data } = useGetProductByIdQuery(id);

  const [selectedImage, setSelectedImage] = useState(0);
  console.log(data);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  let images = data?.payload?.urls.map((el, inx) => (
    <img
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
            <Counter />
            <button className="addtocart">Add to card</button>
          </div>
        </div>
      </div>
      <div className="details__bottom"></div>
    </section>
  );
};

export default Deatails;
