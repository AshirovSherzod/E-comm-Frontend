import React, { memo, useState } from 'react'
import { IoClose, IoPersonCircleOutline, IoSearch } from 'react-icons/io5'

import './header.scss'
import Search from '../../search/Search'
import { Link } from 'react-router-dom'
import { LuShoppingCart } from 'react-icons/lu'
import { RxHamburgerMenu } from 'react-icons/rx'

const Header = () => {

  const [hideSubHeader, setHideSubHeader] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)
  const [showSearch, setShowSearch] = useState(false)


  return (
    <>
      <div style={{ display: hideSubHeader ? "none" : "flex" }} className={`sub-header`}>
        <div className="sub-header__wrapper container">
          <p>Sign up and get 20% off to your first order. <span>Sign Up Now</span></p>
          <button onClick={() => setHideSubHeader(true)}><IoClose /></button>
        </div>
      </div>
      <header>
        <div className="container">
          <nav className='nav '>
            <div className="nav__logo">
              <button onClick={() => setShowSidebar(true)}><RxHamburgerMenu /></button>
              <h1>SHOP.CO</h1>
            </div>
            <div className={`nav__links ${showSidebar ? "show" : ""}`}>
              <ul>
                <div className="nav__links-show">
                  <h1>SHOP.CO</h1>
                  <button onClick={() => setShowSidebar(false)}><IoClose /></button>
                </div>
                <li>Shop</li>
                <li>On Sale</li>
                <li>New Arrivals</li>
                <li>Brands</li>
              </ul>
            </div>
            <Search />
            <div className="nav__right">
              <button onClick={() => setShowSearch(true)}><IoSearch /></button>
              <Link to={"#"}><LuShoppingCart /></Link>
              <Link to={"#"}><IoPersonCircleOutline /></Link>
            </div>
          </nav>
        </div>
        {
          showSidebar
            ?
            <div onClick={() => setShowSidebar(false)} className="overlay"></div>
            :
            <></>
        }
        {
          showSearch
            ?
            <div className="search container">
              <form className='form' action="">
                <button><IoSearch /></button>
                <input type="text" placeholder='search' />
                <button onClick={()=> setShowSearch(false)}><IoClose /></button>
              </form>
            </div>
            :
            <></>
        }
      </header>
    </>
  )
}

export default memo(Header)