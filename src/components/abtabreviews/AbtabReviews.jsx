import React from "react";

import "./abtabreviews.scss";
import { FiSliders } from "react-icons/fi";
import { useGetCommentsQuery } from "../../context/api/commentApi";
import { IoStar } from "react-icons/io5";

const AbtabReviews = ({ id }) => {
  // const { data } = useGetCommentsQuery();

  // let comments = data?.payload?.map((product, inx) => (
  //   <div key={inx} className="abtab-reviews__bottom-comment">
  //     {/* <h4>{product.adminId.username}</h4> */}
  //     <p>{product.text}</p>
  //   </div>
  // ));

  return (
    <div className="abtab-reviews">
      <div className="abtab-reviews__top">
        <h4>
          All Reviews <span>(435)</span>
        </h4>
        <div className="abtab-reviews__top-btns">
          <button className="sliders">
            <FiSliders />
          </button>
          <select name="" id="">
            <option value="">Latest</option>
            <option value="">Oldest</option>
          </select>
          <button className="review">Write a Review</button>
        </div>
      </div>
      <div className="abtab-reviews__bottom">
        <div className="abtab-reviews__bottom__card">
          <p>
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
          </p>
          <h3>James Gun</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            doloribus suscipit ipsum, culpa officiis aut dignissimos? Neque
            eaque nostrum porro!
          </p>
        </div>
        <div className="abtab-reviews__bottom__card">
          <p>
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
          </p>
          <h3>James Gun</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            doloribus suscipit ipsum, culpa officiis aut dignissimos? Neque
            eaque nostrum porro!
          </p>
        </div>
        <div className="abtab-reviews__bottom__card">
          <p>
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
          </p>
          <h3>James Gun</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            doloribus suscipit ipsum, culpa officiis aut dignissimos? Neque
            eaque nostrum porro!
          </p>
        </div>
        <div className="abtab-reviews__bottom__card">
          <p>
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
          </p>
          <h3>James Gun</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            doloribus suscipit ipsum, culpa officiis aut dignissimos? Neque
            eaque nostrum porro!
          </p>
        </div>
        <div className="abtab-reviews__bottom__card">
          <p>
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
          </p>
          <h3>James Gun</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            doloribus suscipit ipsum, culpa officiis aut dignissimos? Neque
            eaque nostrum porro!
          </p>
        </div>
        <div className="abtab-reviews__bottom__card">
          <p>
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
          </p>
          <h3>James Gun</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            doloribus suscipit ipsum, culpa officiis aut dignissimos? Neque
            eaque nostrum porro!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AbtabReviews;
