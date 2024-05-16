import React from 'react';
import humberger from '../assets/images/Menu.png'
import logo from '../assets/images/angageicon.png'

const NavBar = () => (
  <header>
    <a className='logo' href='#'><img src={logo} alt='logo'/></a>
    <img className='humberger' src={humberger} alt='humberger' />
  </header>
);

export default NavBar;