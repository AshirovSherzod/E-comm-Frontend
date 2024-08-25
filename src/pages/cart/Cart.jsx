import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";

import Empty from "../../components/empty/Empty";
import Counter from "../../components/counter/Counter";
import img from "../../assets/images/empty-cart.webp";
import "./cart.scss";
import { removeFromCart } from "../../context/slices/cartSlice";

const Cart = () => {
  const cartData = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  let carts = cartData?.map((product, inx) => (
    <div key={inx} className="cart__left-card">
      <div className="cart__left-card__content">
        <div className="cart__left-card__content-img">
          <img src={product?.urls[0]} alt="" />
        </div>
        <div className="cart__left-card__content-title">
          <h3 title={product.title} className="line-clamp">
            {product.title}
          </h3>
          <p>${product.price}</p>
        </div>
      </div>
      <div className="cart__left-card__btns">
        <button
          onClick={() => dispatch(removeFromCart(product._id))}
          className="delete"
        >
          <FaTrashAlt />
        </button>
        <Counter data={product} />
      </div>
    </div>
  ));

  return (
    <main className="cart container">
      {cartData.length ? (
        <>
          <h1>Your Cart</h1>
          <div className="cart__wrapper">
            <div className="cart__left">{carts}</div>
            <div className="cart__right">
              <h2>Order Summary</h2>
              <div className="cart__right-subtotal">
                <p>Subtotal</p>
                <p>$565</p>
              </div>
              <div className="cart__right-subtotal">
                <p>Discount (-20%)</p>
                <p>$565</p>
              </div>
              <div className="cart__right-subtotal">
                <p>Delevery Free</p>
                <p>$565</p>
              </div>
              <div className="cart__right-total">
                <p>Total</p>
                <p>$565</p>
              </div>
              <form action="">
                <input type="text" placeholder="Add promo code" />
                <button>Apply</button>
              </form>
              <button className="checkout">Go To Checkout</button>
            </div>
          </div>
        </>
      ) : (
        <Empty
          title={"Your cart is empty"}
          img={img}
          desc={"Your cart is empty. Add items to start your shopping journey"}
        />
      )}
    </main>
  );
};

export default Cart;
