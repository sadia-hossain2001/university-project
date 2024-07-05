import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
const Navbar = ({setShowLogin}) => {
    const [menu,setMenu]=useState("home");
  return (
    <div className='navbar'>
      <img src={assets.logo} alt='logo' className='logo'/>
      <ul className='navbar-menu'>
        <Link to="/" onClick={()=>setMenu("home")} className={menu==="home"? "active":""}>home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"? "active":""}>menu</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"? "active":""}>mobile-app</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"? "active":""}>contact-us</a>
      </ul>
      <div className='navbar-right'>
        <div className='navbar-input'>
        <input type='text' placeholder='Search here'/>
        <div className='navbar-icon'>
        <img src={assets.search_icon} alt='Search-icon'/>
        </div>
        
        </div>
      
        <div className='navbar-search-icon'>
            <img src={assets.basket_icon} alt='basket-icon'/>
            <div className='dot'></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
