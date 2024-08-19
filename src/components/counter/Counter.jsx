import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

import './counter.scss'

const Counter = () => {
  return (
    <div className="counter">
      <button>
        <FaMinus />
      </button>
      <button>1</button>
      <button>
        <FaPlus />
      </button>
    </div>
  );
};

export default Counter;
