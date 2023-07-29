import React from "react";
import './contact.css';
import Navbar from './components/Navbar/Navbar';
import Contacts from "./components/Contacts/Contact";
import Footer from './components/Footer/Footer';

const Contact = () => {
  return (
   <>
      <Navbar />
      <Contacts />
      <Footer />
   </>  
  );
}

export default Contact;