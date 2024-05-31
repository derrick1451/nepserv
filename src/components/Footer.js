import React from "react";
import { FaFacebook,FaInstagram , FaTwitter,FaGooglePlusG ,FaYoutube } from "react-icons/fa";
const Footer = ()=>{
    return(
        <footer className="footer-section">
            <div className="footer-container">
                <div className="links">
                    <a href=""><FaFacebook className='react-icon'/></a>
                    <a href=""><FaInstagram className='react-icon'/></a>
                    <a href=""><FaTwitter className='react-icon'/></a>
                    <a href=""><FaGooglePlusG className='react-icon'/></a>
                    <a href=""><FaYoutube className='react-icon' /></a>
                    
                </div>
                <ul class="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Partners</a></li>
          </ul>
         <div className="footer-p"> <p>© 2024 Angage. All rights reserved.</p></div>
            </div>
        </footer>
    )
}
export default Footer;