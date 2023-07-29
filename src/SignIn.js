import React from "react";
import './signin.css';
import Navbar from './components/Navbar/Navbar';
import SignIn from './components/SignIn/signin';
import Footer from './components/Footer/Footer';

const SignIn = () => {
  return (
   <>
      <Navbar />
      <SignIn />
      <Footer />
   </>  
  );
}

export default SignIn;