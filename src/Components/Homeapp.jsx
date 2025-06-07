import React from 'react'
// import Header from './Header/Header';
import Home from './Home/Home';
import Service from './Service/Service';
import About from './About/About';
import Contact from './Contact/Contact';
import Health from './Healthcare/Health';
import Finance from './Finance/Finance';
import Travel from './Travel/Travel';
// import Footer from './Footer/Footer';

export default function Homeapp() {
  return (
    <>
     {/* <Header/> */}
    <Home/>
    <Service/>
    <Health/>
    <Finance/>
    <Travel/>
    <About/>
    <Contact/>
    {/* <Footer/> */}
    </>
    )
}
