import React from 'react'
import Service from './Service'
import './Service.css';


export default function Servicebox({icon,title,para}) {
  return (
<div className='serviceicon'>
    <div className='icon'>{icon}</div>
    <div className='contentpart'>
        <h1>{title}</h1>
        <p>{para}</p>
    </div>
</div>
  )
}
