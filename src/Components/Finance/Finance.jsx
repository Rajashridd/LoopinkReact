import React from 'react'
import './Finance.css';
import Financebox from './Financebox';

export default function Finance() {
  return (
    <div className='finance'>
       <div className='financecontent'>
        <h1>Finance Software Solutions</h1>
        <p>Experience a revolution in lending operations with Closeloop's comprehensive finance software solutions. Our innovative approach combines user-centric design with advanced functionality to meet the evolving needs of modern finance.</p>
        <p>At Closeloop, we're committed to revolutionizing the finance landscape by offering tailored software solutions that streamline operations and enhance customer satisfaction. With us, you can automate workflows, manage risks, and provide exceptional borrower experiences while maintaining regulatory compliance.</p>
       </div>
       <div className='financeboxes'>
        <h1>Sneak Peek into Our Innovative Journey</h1>
       <div className='financebox1'>

        <div className='financeboxinput'>
        <Financebox num={'150+'} title={'Expert Consultants'} para={'Seasoned consultants delivering top-tier finance software solutions with precision.'}/>
        <Financebox num={'250+'} title={'Projects Delivered'} para={'Accomplished projects showcasing expertise, quality, and client satisfaction.'}/>
        </div>
        <div className='financeboxinput'>
        <Financebox num={'70M+'} title={'Hours Worked'} para={'Accumulated hours dedicated to delivering excellence with commitment and diligence.'}/>
        <Financebox num={'100%'} title={'Client Retention Rate'} para={'Stellar client satisfaction reflected in impressive retention rates and enduring partnerships.'}/>
        </div>

       </div>
       </div>
    </div>
  )
}
