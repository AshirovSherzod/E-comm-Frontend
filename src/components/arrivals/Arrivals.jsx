import React from 'react'
import { IoStar } from 'react-icons/io5'

import './arrivals.scss'

const Arrivals = ({ title, img1, img2, img3, img4 }) => {
  return (
    <section className='arrivals container'>
      <h1>{title}</h1>
      <div className="arrivals__cards">
        <div className="arrivals__card">
          <div className="arrivals__card-img">
            <img src={img1} alt="" />
          </div>
          <div className="arrivals__card-content">
            <h2>T-shirt width tape details</h2>
            <p><IoStar style={{ color: "gold" }} /> <IoStar style={{ color: "gold" }} /> <IoStar style={{ color: "gold" }} /> <IoStar style={{ color: "gold" }} /> <IoStar style={{ color: "gold" }} /></p>
            <p>$140</p>
          </div>
        </div>
        <div className="arrivals__card">
          <div className="arrivals__card-img">
            <img src={img2} alt="" />
          </div>
          <div className="arrivals__card-content">
            <h2>Skinny Jeans Fit</h2>
            <p><IoStar style={{ color: "gold" }} /> <IoStar style={{ color: "gold" }} /> <IoStar style={{ color: "gold" }} /> <IoStar style={{ color: "gold" }} /> <IoStar style={{ color: "gold" }} /></p>
            <p>$240</p>
          </div>
        </div>
        <div className="arrivals__card">
          <div className="arrivals__card-img">
            <img src={img3} alt="" />
          </div>
          <div className="arrivals__card-content">
            <h2>Checkered Shirt</h2>
            <p><IoStar style={{ color: "gold" }} /> <IoStar style={{ color: "gold" }} /> <IoStar style={{ color: "gold" }} /> <IoStar style={{ color: "gold" }} /> <IoStar style={{ color: "gold" }} /></p>
            <p>$140</p>
          </div>
        </div>
        <div className="arrivals__card">
          <div className="arrivals__card-img">
            <img src={img4} alt="" />
          </div>
          <div className="arrivals__card-content">
            <h2>Sleeve Striped T-shirt</h2>
            <p><IoStar style={{ color: "gold" }} /> <IoStar style={{ color: "gold" }} /> <IoStar style={{ color: "gold" }} /> <IoStar style={{ color: "gold" }} /> <IoStar style={{ color: "gold" }} /></p>
            <p>$140</p>
          </div>
        </div>
      </div>
      <button>View All</button>
    </section>
  )
}

export default Arrivals