import React from 'react';
import humberger from '../assets/images/Menu.png'

const NavBar = () => (
  <header>
    <a className='logo' href='#'>Logo</a>
    <img className='humberger' src={humberger} alt='humberger' />
  </header>
);

export default NavBar;