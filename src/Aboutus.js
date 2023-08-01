import React from "react";
import "./Aboutus.css"
import Navbar from './components/Navbar/Navbar';
import About from "./components/About/about";
import Footer from './components/Footer/Footer';
import Aboutmain from "./components/Aboutmain/Aboutmain";
import Aboutpeople from "./components/Aboutpeople/Aboutpeople";


const Aboutus = () => {
  return (
   <>
      <Navbar />
      <About />
      <Aboutmain />
      <Aboutpeople />
      <Footer />
   </>  
  );
}

export default Aboutus;