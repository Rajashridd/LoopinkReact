import React from 'react'
import './Travel.css';
import Travelbox from './Travelbox';

export default function Travel() {
  return (
    <div className='travel'>
        <div className='travelcontent'>
        <h1>Travel and Hospitality Software Solutions</h1>
        <p>Embark on a journey into the future of hospitality with Closeloop's innovative software solutions, meticulously designed to redefine travel experiences.</p>
        <p>Our comprehensive travel software suite is meticulously crafted to meet industry demands, driving innovation and personalized experiences. From seamless booking to agile backend systems, we empower businesses to thrive in the digital era, balancing efficiency with customer delight. Let us revolutionize your guest journey, enhancing satisfaction and operational excellence through cutting-edge technology.</p>
        </div>
        <div className='travelboxes'>
        <h1>Our Travel and Hospitality Solutions</h1>
        <div className='travelboxing'>

         <div className='travelbox1'>
         <Travelbox title={'Travel Web and App development'} para={'Stay competitive in the ever-evolving travel industry with our innovative web and app development services. From marketing features to secure payment gateways, we tailor solutions to enhance user experience and drive business growth.'}/>
         <Travelbox title={'Flight & Hotel booking software'} para={'Simplify and enhance your reservation process with our tailored airline and hotel booking software. Our custom software incorporates advanced features such as fare algorithms, seating management, and baggage check-in to streamline booking and improve customer experience.'}/>
         </div>
         <div className='travelbox1'>
         <Travelbox title={'Travel CRM software'} para={'Enhance guest relationships and drive loyalty with Closeloop Travel CRM solutions. Gain deep insights into customer preferences and behaviors, enabling highly personalized experiences that foster satisfaction and repeat business in the competitive travel industry.'}/>
         <Travelbox title={'Online Booking Engine software'} para={'Transform your online travel portal into a revenue powerhouse with our cutting-edge AI-driven booking engine software. Our travel solutions will streamline the booking process, reduce search time, and boost conversion rates for highly profitable sales channels.'}/>
         </div>
         <div className='travelbox1'>
         <Travelbox title={'Travel Agency Management software'} para={'Empower your travel agency with automated sales workflow and powerful engines. From instant quoting to automated follow-ups, our powerful engines optimize operations, sales, and finance, empowering you to focus on delivering exceptional customer experiences.'}/>
         <Travelbox title={'B2B & B2C Travel Portal development'} para={'Transform the travel booking experience with our B2C &amp; B2B portal development services. From end-users to travel agents, our tailored solutions create seamless, user-friendly experiences that drive satisfaction and loyalty.'}/>
         </div>

        </div>
        </div>
    </div>
  )
}
