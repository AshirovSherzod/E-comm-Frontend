import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

import "./counter.scss";
import { useDispatch } from "react-redux";
import { addToCart, decrementCart } from "../../context/slices/cartSlice";

const Counter = ({ data }) => {
  const dispatch = useDispatch();
  console.log(data);
  
  return (
    <div className="counter">
      <button onClick={() => dispatch(decrementCart(data))}>
        <FaMinus />
      </button>
      <button>{data?.stock}</button>
      <button
        onClick={() => {
          console.log("ok");
          dispatch(addToCart(data));
        }}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default Counter;
