import React from 'react'
import './Contact.css';

export default function Contact() {
  return (
    <div className='contactsection'>
        <div className='contactcontent'>
         <p>Create your dream platforms with a top-tier custom software development agency.</p>
         <button>GET STARTED</button>
        </div>
        <div className='contactbox'>
        <h3>Contact Us</h3>
        <p>Reach out to us to find out more</p>
        <div className='myform'>
            <input type='text' placeholder='Name'/>
            <input type='number' placeholder='Phone'/>
            <input type='email' placeholder='Email' />
            <input type='text' placeholder='Message'/><br></br>
            <button>SEND MESSAGE</button>
        </div>
        </div>
    </div>
  )
}
