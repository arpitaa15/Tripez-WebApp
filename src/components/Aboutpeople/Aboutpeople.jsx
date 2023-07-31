import React from 'react'
import "./aboutpeople.css"
import img from '../../Assets/Mike.jpg'
import img2 from '../../Assets/Jane.jpg'
import img3 from '../../Assets/Kate.jpg'

function Aboutpeople() {
  return (
<section className='people'>
<h2 className='title'>Meet Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">
    <img src={img}/>
      <div className="container">
        <h2>Jane Doe</h2>
        <p className="title">CEO</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
    <img src={img2} />
      <div className="container">
        <h2>Mike Ross</h2>
        <p className="title">Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
    <img src={img3} />
      <div className="container">
        <h2>Kate Williams</h2>
        <p className="title">Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>kate@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
  </div>


    </section>

    );
}

export default Aboutpeople