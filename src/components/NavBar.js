import React from 'react';
import humberger from 'images/Menu.png'

const NavBar = () => (
  <header>
    <a href='#'></a>
    {/* <nav>
      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Contact</a></li>
        <li><a href='#'>Blog</a></li>
        <li><a href='#'>Shop</a></li>
      </ul>
    </nav> */}
    <img src={humberger} alt="humberger" />
    
  
  </header>
);

export default NavBar;