import React from "react";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Packages from './components/Packages/Packages';
import Packageimg from "./components/Packageimg/Packageimg";


const Package = () => {
  return (
   <>
      <Navbar />
      <Packageimg />
      <Packages />
      <Footer />
   </>  
  );
}

export default Package;