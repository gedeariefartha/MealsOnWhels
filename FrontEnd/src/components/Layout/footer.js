import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube} from "react-icons/bs"
import { NavLink } from "react-router-dom";
import "../../pages/_myStyle.css"
const Footer = ()=>{
    return(
<div>
        <footer className="Footerbody">
    <div className="contentfooter">
      <div className="top">
        <div className="logo-details">
          <span className="logo_name">Merry Meals</span>
        </div>
        <div className="media-icons">
        <NavLink to="#"><BsFacebook></BsFacebook></NavLink>
        <NavLink to="#"><BsTwitter/></NavLink>
        <NavLink to="#"><BsInstagram/></NavLink>
        <NavLink to="#"><BsLinkedin/></NavLink>
        <NavLink to="#"><BsYoutube/></NavLink>

        </div>
      </div>
      <div className="link-boxes">
        <ul className="box">
          <li className="link_name">Partner</li>
          <li><a href="https://www.nlfoodpartnership.com">Netherland Food Partnership</a></li>
          <li><a href="http://lovaniogourmet.com/">Lovanio Gourmet</a></li>
          <li><a href="https://www.weforum.org/blue-food-partnership">Blue food Partnership</a></li>
         
        </ul>
        <ul className="box">
          <li className="link_name">Page</li>
          <li><NavLink to="/">Homepage</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
          <li><NavLink to="/terms"> Terms and Conditions</NavLink></li>
        </ul>
        <ul className="box">
          <li className="link_name">Account</li>
          <li><NavLink to="/login"> Login</NavLink></li>
          <li><NavLink to="/signup"> Sign Up</NavLink></li>
        </ul>
        <ul className="box input-box">
          <li className="link_name">Subscribe</li>
          <li><input type="text" placeholder="Enter your email"/></li>
          <li><input type="button" value="Subscribe"/></li>
        </ul>
      </div>
    </div>
    <div className="bottom-details">
      <div className="bottom_text">
        <span className="copyright_text">Copyright © 2021 <a href="#">MerryMeals.com</a>All rights reserved</span>
        
      </div>
    </div>
  </footer>

    </div>

    );
};
export default Footer;