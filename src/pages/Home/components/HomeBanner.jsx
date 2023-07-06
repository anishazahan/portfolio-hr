import React from 'react'
import '../home.css'
import img from '../../../assets/img/hrlimon.png'
import img2 from '../../../assets/img/Polygon-4.png'
import { Link, useLocation } from 'react-router-dom'

const HomeBanner = () => {
  return (
    <div className='Home-banner-bg'>
          <div className="max-w-7xl  px-5 lg:px-0 items-center flex flex-col-reverse lg:flex-row justify-between mx-auto mb-28">
    <div className="left space-y-8 items-center h-full  ">
          <div className="space-y-5">
       <h1 className=' text-gray-800 text-5xl md:text-6xl lg:text-7xl font-bold'>Build And
          Grow </h1>
       <h1 className='heading text-5xl md:text-6xl lg:text-7xl font-bold'>A Successful </h1>
       <h1 className=' text-gray-800 text-5xl md:text-6xl lg:text-7xl font-bold'>Business Online </h1>
       </div>
          <p className='max-w-2xl tracking-wider text-gray-500'>Are you struggling to outsmart your competition and grow an online business that makes you serious money? I’ve built dozens; enough to know what works and what don’t.</p>
          <div className=" flex flex-col md:flex-row space-y-5 md:space-y-0 lg:items-center justify-between">
           <button className='font-medium text-white py-3 px-8 rounded-md bg-pink-800'>Get Free Consultation</button>
           <Link className='text-center md:text-left about' to='/about'>Learn More About Me</Link>
           <img className='spin hidden md:block' src={img2} alt="" />
          </div>
    </div>
    <div className="left ">
       <img className='pt-12' src={img} alt="" />
    </div>
</div>

    </div>
  )
}

export default HomeBanner