import React from 'react'
import './getStated.css'

const GetStarted = () => {
  return (
    <div className='pt-8 pb-20 px-5 lg:px-0'>
     
     <div className="parent-wrapper">
     
  <span className="close-btn glyphicon glyphicon-remove"></span>
  <div className="subscribe-wrapper">
 
    <h4>BOOK A FREE CONSULTATION NOW!</h4>
    <div className=" w-40 h-[3px] mt-2 bg-primary mx-auto"></div>
    <input type="email" name="email" className="subscribe-input" placeholder="Your e-mail"/>
    <div className="submit-btn">Get Started</div>
  </div>
   </div>

    </div>
  )
}

export default GetStarted