import React from 'react'
import '../home.css'
import img from '../../../assets/img/banner-3.png'
import img2 from '../../../assets/img/Polygon-4.png'
import { Link, useLocation } from 'react-router-dom'
import {BsArrowRightShort} from 'react-icons/bs'

const HomeBanner = () => {
  return (
    <div className='Home-banner-bg'>
          <div className="max-w-7xl  px-5 lg:px-0 items-center flex flex-col-reverse lg:flex-row justify-between mx-auto mb-28 ">
    <div className="left lg:w-[50%] space-y-8 items-center h-full py-12 lg:py-0 ">
          <div className="space-y-5">
       <h1 className=' text-gray-800 text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-left'>Build And
          Grow A</h1>
       <h1 className='heading text-5xl md:text-3xl lg:text-4xl font-bold text-center lg:text-left'>Successful </h1>
       <h1 className=' text-gray-800 text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-left'>Business Online </h1>
       </div>
          <p className='max-w-2xl tracking-wider text-gray-500 text-center lg:text-left'>Are you struggling to outsmart your competition and grow an online business that makes you serious money? I’ve built dozens; enough to know what works and what don’t.</p>
          <div className=" flex flex-col md:flex-row space-y-5 md:space-y-0 lg:items-center justify-between">
           <button className='font-medium bg-black text-white py-3 px-8 rounded-sm hover:bg-primary'>Get Free Consultation</button>
           <Link to='/about' className="flex items-center space-x-1">
                        <button>Learn More</button>
                        <BsArrowRightShort className='text-3xl'></BsArrowRightShort>
                    </Link>
           <img className='spin hidden md:block' src={img2} alt="" />
          </div>
    </div>
    <div className="left lg:w-[50%] ">
       <img className='pt-12 w-full min-h-[650px] object-cover' src={img} alt="" />
    </div>
</div>

    </div>
  )
}

export default HomeBanner