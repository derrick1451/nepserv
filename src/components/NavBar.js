import React from 'react';
import logo from '../assets/images/angageicon.png'
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => (
  <header>
    <a className='logo' href='#'><img src={logo} alt='logo'/></a>
    <nav className='nav-bar'>
      <ul className='nav-links'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Services</a></li>
        <li><a href='#'>Partners</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
    </nav>
    <RxHamburgerMenu className='humberger'/>
  </header>
);

export default NavBar;