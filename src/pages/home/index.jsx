import React from 'react'
import Hero from '../../components/hero/Hero'
import Arrivals from '../../components/arrivals/Arrivals'
import Selling from '../../components/selling/Selling'
import DressStyle from '../../components/dressStyle/DressStyle'
import Customers from '../../components/customers/Customers'

import img1 from "../../assets/images/arrivals/1.png"
import img2 from "../../assets/images/arrivals/2.png"
import img3 from "../../assets/images/arrivals/3.png"
import img4 from "../../assets/images/arrivals/4.png"

import img5 from "../../assets/images/arrivals/5.png"
import img6 from "../../assets/images/arrivals/6.png"
import img7 from "../../assets/images/arrivals/7.png"
import img8 from "../../assets/images/arrivals/8.png"

const Home = () => {
    return (
        <main>
            <Hero />
            <Arrivals title={"NEW ARRIVALS"} img1={img1} img2={img2} img3={img3} img4={img4} />
            <Arrivals title={"TOP SELLING"} img1={img5} img2={img6} img3={img7} img4={img8}/>
            <DressStyle />
            <Customers />
        </main>
    )
}

export default Home