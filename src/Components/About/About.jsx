import React from 'react'
import './About.css';
import Img1 from '../../Assets/contentimg.png';
import Img2 from '../../Assets/circle1.jpg';
import Img3 from '../../Assets/circle2.jpg';
import Img4 from '../../Assets/circle3.jpg';
import Img5 from '../../Assets/circle4.jpg';


export default function About() {
  return (
    <div className='aboutsection'>
         <div className='abouttitle'>
         <h1>Fast-track Your Custom Software Development Project to Success</h1>
           </div> 
        <div className='aboutfirst'>
           <div className='aboutimg'>
         <img src={Img1}/>
         </div>
         <div className='aboutcontent'>
            <h3>What We Do? </h3>
         <p>Empower your business with our software solutions that prioritize quality, scalability, and efficiency.
At Closeloop, our expertise in custom software solutions goes beyond the ordinary. Through comprehensive analysis of your business processes, challenges, and objectives, we craft software solutions precisely tailored to your needs, optimizing productivity and profitability. With us, you not only receive premier software services but also gain access to a full team dedicated solely to your project, including QA, project managers, designers, and developers.
</p>
        <button>Know More...</button>
         </div>
        </div>
        <div className='aboutsecond'>
        <div className='secondtitle'>
        <h1>OUR TEAM</h1>
        <p>Be successful. Find partners. Build your software. </p>
        </div>
        <div className='secondimg'>
        <div className='circles'>
        <div className='circleform'>
        <div className='circleone'>
            <div className='circleimg'>
            <img src={Img2}/>
            </div>
        </div>
        </div>
        <div className='joint'>
            <h3>Jane Smith</h3>
            <h5>Lead</h5>
        </div>
        </div>
         <div className='circles'>
        <div className='circleform'>
        <div className='circleone'>
            <div className='circleimg'>
            <img src={Img3}/>
            </div>
        </div>
        </div>
        <div className='joint'>
            <h3>Ann Loran</h3>
            <h5>Creative Director</h5>
        </div>
        </div>
         <div className='circles'>
        <div className='circleform'>
        <div className='circleone'>
            <div className='circleimg'>
            <img src={Img4}/>
            </div>
        </div>
        </div>
        <div className='joint'>
            <h3>Mary Chattel</h3>
            <h5>Manager</h5>
        </div>
        </div>
         <div className='circles'>
        <div className='circleform'>
        <div className='circleone'>
            <div className='circleimg'>
            <img src={Img5}/>
            </div>
        </div>
        </div>
        <div className='joint'>
            <h3>Andrew Pittson</h3>
            <h5>Tech Support</h5>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}
