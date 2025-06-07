import React from 'react'
import Finance from './Finance';
import './Finance.css';

export default function Financebox({num,title,para}) {
  return (
    <div className='finbox'>
        <h1>{num}</h1>
        <h2>{title}</h2>
        <p>{para}</p>
    </div>
  )
}
