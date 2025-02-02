import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import ServiceSection from './components/ServiceSection';
import About from './components/About';
import Partners from './components/Partners';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import React from 'react';
import './App.css';


const App = ()=> {
  return (
    <>
       
      <NavBar/>
      <HeroSection/>
      <ServiceSection/>
      <About/>
      <Partners/>
      <Contacts/>
      <Footer/>
  
    </>
   
  )
}

export default App;
