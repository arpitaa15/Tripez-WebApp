import React from "react";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Packages from './components/Packages/Packages';

const Package = () => {
  return (
   <>
      <Navbar />
      <Packages />
      <Footer />
   </>  
  );
}

export default Package;