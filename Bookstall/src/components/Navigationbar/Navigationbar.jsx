import React, { useState } from 'react'
import './Navigationbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navigationbar = () => {

    const [menu, setMenu] = useState("home")

  return (
    <div className='navbar'>
      {/* <img src={assets.logo} alt="" className='logo' /> */}
      <h1 className='logo'>Bookstall</h1>
      <ul className='navbar-menu'>
        <Link to='/' onClick={() => setMenu("home")} className={menu==="home" ? "active" : ""}>home</Link>
        <a href='#explore-category' onClick={() => setMenu("category")}className={menu==="category" ? "active" : ""}>categories</a>
        {/* <li onClick={() => setMenu("mobile-app")}className={menu==="mobile-app" ? "active" : ""}>mobile-app</li> */}
        <a href='#footer' onClick={() => setMenu("contact-us")}className={menu==="contact-us" ? "active" : ""}>contact us</a>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search-icon'>
            <img src={assets.basket_icon} alt="" />
            <div className='dot'></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  )
}

export default Navigationbar
