import React from 'react'
import img1 from '../../assets/img/home-banner.jpeg'
import img2 from '../../assets/img/member-2.jpeg'
import img3 from '../../assets/img/member-3.jpeg'
import 'aos/dist/aos.css';

const Members = () => {
  return (
    <div className='bg-gray-100 py-24'>
         <div className="max-w-6xl mx-auto px-5 lg:px-0">
         <h2 className='text-2xl about-heading max-w-lg font-bold text-black mb-10 '>Our Members</h2>
         </div>

  <div className="max-w-6xl pb-10 mx-auto px-5 lg:px-0 grid grid-cols-1 lg:grid-cols-3 gap-6 md:grid-cols-2">
 
    <div data-aos="zoom-in" className="">
        <img className='min-h-[350px] w-full object-cover' src={img1} alt="" />
    </div>
    <div className="">
        <img className='min-h-[350px] w-full object-cover' src={img2} alt="" />
    </div>
    <div data-aos="zoom-in" className="">
        <img className='min-h-[350px] w-full object-cover' src={img3} alt="" />
    </div>

  </div>

    </div>
  )
}

export default Members