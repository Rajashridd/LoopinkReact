import React from 'react'
import './Health.css';
import Healthcarebox from './Healthcarebox';

export default function Health() {
  return (
    <div className='health'>
     <div className='healthcontent'>
       <h1>Healthcare Digital Solutions for Efficiency and Innovation</h1>
       <p>Experience the future of healthcare with HIPAA-compliant software solutions and adapt seamlessly to industry disruptions.</p>
       <p>Closeloop leads the charge in healthcare software solutions, addressing industry challenges through advanced digital technologies. Our comprehensive approach integrates Mobility, Cloud, Big Data, AI, and IoT to streamline processes and drive innovation, ensuring personalized, efficient care while mitigating risks and costs. From automating processes to enhancing patient care, we empower organizations to thrive in a hyperconnected service ecosystem.</p>
     </div>
     <div className='healthbox'>
       <h1>Our Healthcare Solutions</h1>
       <div className='healthboxes'>
         <div className='healthbox1'>
            <Healthcarebox title={'Healthcare IoT solutions'} para={'Enhance healthcare connectivity with IoT for proactive, error-free care delivery. By harnessing IoT, we empower healthcare professionals to deliver proactive care through seamless data exchange across devices. Our commitment to providing easy-to-access healthcare benefits patients, physicians, hospitals, and insurers.'} />
            <Healthcarebox title={'mHealth solutions'} para={'Empower your patients with cutting-edge mHealth solutions for personalized diagnostic tracking. With expertise in wearable technology, we develop market-ready solutions that analyze historical data, facilitate faster diagnosis, and alert patients to alarming signals, all accessible remotely.'} />
         </div>
         <div className='healthbox1'>
            <Healthcarebox title={'Pharmacy Management system'} para={'Optimize pharmacy operations with our efficient, accurate, and secure management systems. With features like barcode scanning and data loading, we provide holistic systems that simplify operations from POS to the backend, ensuring seamless management for administrators.'} />
            <Healthcarebox title={'Wellness and Fitness Apps'} para={'Empower holistic wellness with our personalized health and fitness apps. Our holistic health and wellness apps offer personalized workouts, nutrition tracking, and mental health exercises, empowering users to achieve their wellness goals.'} />
         </div>
         <div className='healthbox1'>
            <Healthcarebox title={'Telemedicine Software Development'} para={'Enhance patient care with tailored telehealth solutions for seamless consultations and secure data encryption. Specializing in web and mobile app development, we facilitate efficient practitioner-patient engagement, offering on-the-go consultations to streamline healthcare delivery.'} />
            <Healthcarebox title={'Healthcare Data Analytics'} para={'Harness the power of data analytics to optimize healthcare resources and strategy. Our data-driven analytics apps empower healthcare providers to make informed decisions by analyzing patient behavior, disease patterns, and resource usage.'} />
         </div>
       </div>
     </div>
    </div>
  )
}
