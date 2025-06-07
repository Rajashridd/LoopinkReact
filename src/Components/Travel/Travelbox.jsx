import React from 'react'
import './Travel.css';
import Travel from './Travel';

export default function Travelbox({title,para}) {
  return (
    <div className='travelling'>
        <h3>{title}</h3>
        <p>{para}</p>
    </div>
  )
}
