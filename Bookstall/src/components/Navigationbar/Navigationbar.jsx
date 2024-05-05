import React, { useContext, useState } from 'react'
import './Navigationbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navigationbar = ({setShowLogin}) => {

    const {getCurrentActiveMenu, setCurrentActiveMenu} = useContext(StoreContext);
    setCurrentActiveMenu("home");
    var currentActiveMenu = getCurrentActiveMenu();
    const [menu, setMenu] = useState(currentActiveMenu)
    const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar'>
      <Link to='/'  onClick={() => {
          setMenu("home");
          setCurrentActiveMenu("home")
        }}><h1 className='logo'>Bookstall</h1></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={() => {
          setMenu("home");
          setCurrentActiveMenu("home")
        }} className={menu==="home" ? "active" : ""}>home</Link>
        <a href='#explore-category' onClick={() => {
          setMenu("category")
          setCurrentActiveMenu("category")
        }}className={menu==="category" ? "active" : ""}>categories</a>
        <a href='#footer' onClick={() => {
          setMenu("contact-us")
          setCurrentActiveMenu("contact-us")
        }}className={menu==="contact-us" ? "active" : ""}>contact us</a>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className={menu === "cart" ? 'navbar-search-icon-active navbar-search-icon' : 'navbar-search-icon'}>
            <Link to='/cart' onClick={() => {
              setMenu("cart")
              setCurrentActiveMenu("cart")
            }}>
              <img src={assets.basket_icon} alt="" />
              </Link>
            <div className={getTotalCartAmount() === 0? '' : 'dot'}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default Navigationbar
