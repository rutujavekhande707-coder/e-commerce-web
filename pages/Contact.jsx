import React from 'react'
import "./Contact.css"

function Contact() {


  function click() {
    alert("Send Succesfully...")
  }
  return (
    <div className='cont-div'>
      <div className="container">
      <h2>Contact Me</h2>
      <input type="email" placeholder='username' />
      <textarea  placeholder='Your Message'></textarea>
      <button className='cont-btn' onClick={click}>Send Message</button>




    </div>
    </div>
  )
}

export default Contact
