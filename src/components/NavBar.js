import React from 'react';
import logo from '../assets/images/angage.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';

const NavBar = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
 
  return (
    <header>
    <a className='logo' href='#'><img src={logo} alt='logo'/></a>
      <div className={`pop-up ${modal ? 'show' : ''}`}>
      <ul>
        <li><a href='#home'>Home</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#partners'>Partners</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <IoMdClose onClick={toggleModal} className='close-icon'/>

    </div>
    
    <nav className='nav-bar'>
      <ul className='nav-links' >
        <li><a href='#home'>Home</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#partners'>Partners</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
    </nav>
    <RxHamburgerMenu onClick={toggleModal} className='humberger'/>
  </header>
  )

}


export default NavBar;