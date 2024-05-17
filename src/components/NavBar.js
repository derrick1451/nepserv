import React from 'react';
import humberger from '../assets/images/Menu.png'
import logo from '../assets/images/angageicon.png'
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => (
  <header>
    <a className='logo' href='#'><img src={logo} alt='logo'/></a>
    <RxHamburgerMenu className='humberger'/>
  </header>
);

export default NavBar;