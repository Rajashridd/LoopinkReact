import React from 'react'
import './Service.css';
import Servicebox from './Servicebox';

export default function Service() {
  return (
    <div className='service'>
    <div className='servicecontent'>
    <div className='servetitle'>
    <h1>Our Software Development Services</h1>
    </div>
    <div className='servicecontents'>
    <div className='servecontent'>
        <Servicebox icon={< i class='bx  bx-lightbulb-alt-2'  ></i> } title={'Software consulting'} para={'Software consulting helps businesses understand and utilize technology to achieve their goals. Consultants assess IT needs, recommend solutions, guide implementation, and provide ongoing support. They essentially bridge the gap between business needs and technological capabilities, ensuring that software investments align with long-term strategic objectives.'}></Servicebox>
        <Servicebox icon={< i class='bx  bx-search-code'  ></i> } title={'Custom software development'} para={'Custom software development plays a crucial role in modern businesses by enabling them to create tailored, optimized solutions that address their specific needs and challenges, leading to improved efficiency, productivity, and a competitive edge.' }></Servicebox>
    </div>
    
    <div className='servecontent'>
        <Servicebox icon={< i class='bx  bx-enterprise'  ></i> } title={'Enterprise software development'} para={'Enterprise software development plays a crucial role in streamlining business operations, enhancing productivity, and improving overall efficiency for large organizations. It involves creating specialized software solutions that address the unique needs of businesses, such as CRM, ERP, and supply chain management systems.' }></Servicebox>
        <Servicebox icon={< i class='bx  bx-mobile'  ></i> } title={'Custom mobile and web app development'} para={'Custom mobile and web app development plays a vital role in modern businesses by enabling them to create tailored solutions that align perfectly with their specific needs and goals. These apps offer a range of benefits, including enhanced user experience, improved scalability, better data security, and seamless integration with existing systems.'}></Servicebox>
    </div>
    <div className='servecontent'>
        <Servicebox icon={< i class='bx  bx-keyboard'  ></i> } title={'Cloud computing'} para={'Cloud computing enables on-demand delivery of IT resources like servers, storage, and applications over the internet, allowing users to access these services without managing their own physical infrastructure'}></Servicebox>
        <Servicebox icon={< i class='bx  bx-folder-code'  ></i> } title={'Legacy software modernization'} para={'Legacy software modernization plays a crucial role in revitalizing and enhancing outdated IT systems. It enables businesses to leverage the latest technologies, improve security, enhance performance, and adapt to evolving business needs.' }></Servicebox>
    </div>
    
    </div>
    </div>
    <div className='servicesecond'>
        <button className='start'>GET STARTED</button>
        <button className='info'>MORE INFO</button>
        <button className='call'>CONTACT US</button>

    </div>
    </div>
  )
}
