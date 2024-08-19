import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./comments.scss";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { IoStar } from "react-icons/io5";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <p>
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
          </p>
          <h3>Sarah M</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolor
            pariatur earum dignissimos? Vitae commodi voluptate, quod beatae
            inventore laborum ab quaerat eligendi, earum quam quo adipisci hic
            numquam nostrum.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p>
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
          </p>
          <h3>Sarah M</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolor
            pariatur earum dignissimos? Vitae commodi voluptate, quod beatae
            inventore laborum ab quaerat eligendi, earum quam quo adipisci hic
            numquam nostrum.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p>
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
          </p>
          <h3>Sarah M</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolor
            pariatur earum dignissimos? Vitae commodi voluptate, quod beatae
            inventore laborum ab quaerat eligendi, earum quam quo adipisci hic
            numquam nostrum.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p>
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
          </p>
          <h3>Sarah M</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolor
            pariatur earum dignissimos? Vitae commodi voluptate, quod beatae
            inventore laborum ab quaerat eligendi, earum quam quo adipisci hic
            numquam nostrum.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p>
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
          </p>
          <h3>Sarah M</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolor
            pariatur earum dignissimos? Vitae commodi voluptate, quod beatae
            inventore laborum ab quaerat eligendi, earum quam quo adipisci hic
            numquam nostrum.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p>
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
            <IoStar style={{ color: "gold" }} />
          </p>
          <h3>Sarah M</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolor
            pariatur earum dignissimos? Vitae commodi voluptate, quod beatae
            inventore laborum ab quaerat eligendi, earum quam quo adipisci hic
            numquam nostrum.
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
