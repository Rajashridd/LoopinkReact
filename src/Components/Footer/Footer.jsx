import React from 'react'
import './Footer.css';

export default function Footer() {
  return (
    < div className='foot'>
    <div className='footinfo'>
        <div className='foot1'>
        <h2>Address</h2>
        <p>12 Jackpot street, California, AA 9999</p>
        <h2>Contacts</h2>
        <ul>
           <li>Email: support@mobirise.com</li>
           <li>Phone: +1 (0) 000 0000 001</li>
           <li>Fax: +1 (0) 000 0000 002</li>
           </ul>
        </div>
        <div className='foot2'>
        <h2>Links</h2>
        <ul>
            <li>Projects</li>
            <li>Team</li>
            <li>Help</li>
            <li>Tech Support</li>
            <li>Contacts</li>

        </ul>
        </div>
    </div>
    <div className='footmap'>
        <p>map</p>
    </div>

    </div>
  )
}
