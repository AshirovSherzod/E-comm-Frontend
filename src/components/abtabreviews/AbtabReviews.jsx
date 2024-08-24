import React from "react";

import "./abtabreviews.scss";
import { FiSliders } from "react-icons/fi";
import { useGetCommentsQuery } from "../../context/api/commentApi";

const AbtabReviews = ({ id }) => {
  const { data } = useGetCommentsQuery();
  console.log(data);

  let comments = data?.payload?.map((product) => (
    <div key={inx} className="abtab-reviews__bottom-comment">
      <h4>{product.adminId.username}</h4>
      <p>{product.text}</p>
    </div>
  ));
  console.log(comments);

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
      <div className="abtab-reviews__bottom">{comments}</div>
    </div>
  );
};

export default AbtabReviews;
