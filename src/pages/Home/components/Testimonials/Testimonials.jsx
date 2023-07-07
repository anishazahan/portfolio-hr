import React from 'react'
import './testimonial.css'
import TestimonialSlider from './TestimonialSlider'

const Testimonials = () => {
  return (
    <div className='testimonial-bg pt-20 lg:pb-10 mb-20'>

            <div className="max-w-6xl px-5 xl:px-0 mx-auto flex justify-between items-center flex-col-reverse lg:flex-row">

                <div className="left-slider w-full md:w-[70%] lg:w-[60%] ">
                   <TestimonialSlider></TestimonialSlider>
                </div>

            <div className="w-full lg:w-[40%] flex  justify-center text-center lg:text-left px-4 lg:px-0">
           <div className="">
           <h2 className='about-heading uppercase font-semibold  tracking-wide text-gray-200'>TESTIMONIALS</h2>
                <h2 className=' text-[30px] md:text-[38px] font-semibold text-zinc-300 my-7'>People Call Me a <br/>Success Wizard</h2>
                <p className='text-gray-400 mt-2 max-w-xs'>Here’s What Others Say About Me:
                </p>
           </div>

             
                </div>

            </div>

    </div>
  )
}

export default Testimonials