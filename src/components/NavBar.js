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
  const closeModal = () => {
    setModal(false);
  };
 
  return (
    <header>
    <a className='logo' href='#'><img src={logo} alt='logo'/></a>
      <div className={`pop-up ${modal ? 'show' : ''}`}>
      <ul>
        <li><a href='#home' onClick={closeModal}>Home</a></li>
        <li><a href='#services' onClick={closeModal}>Services</a></li>
        <li><a href='#about' onClick={closeModal}>About</a></li>
        <li><a href='#partners' onClick={closeModal}>Partners</a></li>
        <li><a href='#contact' onClick={closeModal}>Contact</a></li>
      </ul>
      <IoMdClose onClick={toggleModal} className='close-icon'/>

    </div>
    
    <nav className='nav-bar'>
      <ul className='nav-links' >
        <li><a href='#home'>Home</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#partners'>Partners </a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
    </nav>
    <RxHamburgerMenu onClick={toggleModal} className='humberger'/>
  </header>
  )
}
export default NavBar;