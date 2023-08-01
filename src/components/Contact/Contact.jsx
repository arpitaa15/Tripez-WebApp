import React from 'react';
import "./contact.css"

function Contact() {
  return (
    <section className="contact">
        <div className="content">
            <h1 className='contactus'>Contact Us</h1>
        </div>
        <div className="containers">
            <div className="contactInfo">
                <div className="box">
                    <div className="icon"><i className="fas fa-map-marker" aria-hidden="true"></i></div>
                    <div className="text">
                        <h3>Address</h3>
                        <p>1234 Pachora Road, Pune, India, 14568</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon"><i className="fas fa-phone" aria-hidden="true"></i></div>
                    <div className="text">
                        <h3>Phone</h3>
                        <p>12345678</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon"><i className="fa fa-envelope" aria-hidden="true"></i></div>
                    <div className="text">
                        <h3>Email</h3>
                        <p>abc@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="contactForm">
                <form>
                    <h2>Send Message</h2>
                    <div className="inputBox">
                        <input type="text" required="required"/>
                        <span>Full Name</span>
                    </div>
                    <div className="inputBox">
                        <input type="text" required="required"/>
                        <span>Eamil</span>
                    </div>
                    <div className="inputBox">
                        <textarea name="" id="" required="required"></textarea>
                        <span>Type your Message...</span>
                    </div>
                    <div className="inputBox">
                        <input type="submit" value="Send"/>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact
