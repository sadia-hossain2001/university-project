import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import Home from './../../Pages/Home/Home';
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
               <img src={assets.logo} className='footer-logo' alt=''/>
               <p>Dessert Shop is an online platform dedicated to offering a tempting array of desserts, from decadent cakes and cupcakes to fluffy pastries and puddings. With a user-friendly interface, customers can explore a wide selection of treats, place orders effortlessly, and enjoy the convenience of having their favorite desserts delivered straight to their homes.</p>
               <div className='footer-social-icon'>
                <img src={assets.facebook_icon} alt=''/>
                <img src={assets.linkedin_icon} alt=''/>
                <img src={assets.twitter_icon} alt=''/>
               </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+880-17636-82826</li>
                    <li>contact@delicious_desert.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>Copyright 2024 © delicious_desert.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
