import React from "react";
import { IoStar } from "react-icons/io5";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { BsCartCheckFill, BsCartPlus } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { like } from "../../context/slices/wishlistSlice";
import { Link } from "react-router-dom";
import { addToCart } from "../../context/slices/cartSlice";

const ProductItem = ({ title, price, img, data }) => {
  const dispatch = useDispatch();
  const wishlistData = useSelector((state) => state.wishlist.value);
  const cartData = useSelector((state) => state.cart.value);

  return (
    <div className="arrivals__card">
      <div className="arrivals__card-img">
        <Link to={`details/${data._id}`}>
          <img src={img} alt="" />
        </Link>
        <div className="arrivals__card-img__btns">
          <button onClick={() => dispatch(like(data))}>
            {wishlistData.some((el) => el._id === data._id) ? (
              <IoIosHeart />
            ) : (
              <IoIosHeartEmpty />
            )}
          </button>
          <button onClick={() => dispatch(addToCart(data))}>
            {cartData.some((el) => el._id === data._id) ? (
              <>
                <BsCartCheckFill />
              </>
            ) : (
              <>
                <BsCartPlus />
              </>
            )}
          </button>
        </div>
      </div>
      <div className="arrivals__card-content">
        <h2>{title}</h2>
        <p>
          <IoStar style={{ color: "gold" }} />
          <IoStar style={{ color: "gold" }} />
          <IoStar style={{ color: "gold" }} />
          <IoStar style={{ color: "gold" }} />
          <IoStar style={{ color: "gold" }} />
        </p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
