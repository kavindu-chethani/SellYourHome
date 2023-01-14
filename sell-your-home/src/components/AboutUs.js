import React from 'react'
import "./styels.css"; 
import img1 from "../images/img.jpg";

const AboutUs = () => {
  return (
  <div>

    <div className='aboutUs'>
        <h2>Sell your home with confidence</h2>
        <h2>Zillow is making it simpler to sell your home and move forward.</h2>
        <img src={img1} alt="" />
    </div>
   
    
  </div>
  
  )
}

export default AboutUs