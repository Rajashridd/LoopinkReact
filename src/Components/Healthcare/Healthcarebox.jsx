import React from 'react'
import './Health.css';
import Health from './Health';

export default function Healthcarebox({title,para}) {
  return (
    <div className='carebox'>
      <h3>{title}</h3>
      <p>{para}</p>
    </div>
  )
}
