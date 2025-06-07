import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    
    <div className='head'>

    <div className='headlogo'>
    <div className='logoimg'>
    < i class='bx  bx-infinite'  ></i> 
    </div>
      <h1>LoOp<span>ink</span></h1>
    </div>
    <div className='menutoggle'>
      <span></span>
      <span></span>
      <span></span>
    <div className='headnav'>
       <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/service'>Service</Link></li>
        <li className='supermenu'><a>Industry</a>
           <ul className='dropdown'>
            <li><Link to='/health'>Healthcare</Link></li>
            <li><Link to='/finance'>Finance</Link></li>
            <li><Link to='/travel'>Travel</Link></li>
           </ul></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
       </ul>
    </div>
    </div>
    
   </div>
  )
}
