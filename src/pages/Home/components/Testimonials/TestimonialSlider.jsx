import React from 'react'
import {data} from './testimonialData.js'
import './testimonial.css'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import {AiFillStar} from 'react-icons/ai'
import {BiSolidQuoteSingleRight} from 'react-icons/bi'

// import required modules
import { Autoplay} from "swiper";

const TestimonialSlider = () => {
  return (
    <div className='w-full '>
           <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        slidesPerView={1}
        
        autoplay={{
          delay: 3000,
          loop:true,
          disableOnInteraction: false,
        }}
       
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        
        }}
        // navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
    
      
      <div className="grid grid-cols-1">
      {
        data.map((item,index)=>{
          return  <SwiperSlide key={index}>
            <div className="py-14 ">
              <div className="flex justify-between">
              <div className="left flex items-center space-x-3">
                <img className='rounded-full w-[70px] h-[70px]' src={item.img} alt="" />

               <div className=" space-y-2">
                <h2 className='font-medium text-gray-100'>{item.name}</h2>
                  <div className="flex">
                  <button className='text-primary'><AiFillStar></AiFillStar></button>
                  <button className='text-primary'><AiFillStar></AiFillStar></button>
                  <button className='text-primary'><AiFillStar></AiFillStar></button>
                  <button className='text-primary'><AiFillStar></AiFillStar></button>
                  <button className='text-primary'><AiFillStar></AiFillStar></button>
                  </div>
                 
               </div>
              </div>
                  <div className="flex items-center -space-x-5">
                    <button className='text-primary text-5xl'><BiSolidQuoteSingleRight></BiSolidQuoteSingleRight></button>
                    <button className='text-primary text-5xl'><BiSolidQuoteSingleRight></BiSolidQuoteSingleRight></button>
                  </div>
              </div>
             <p className='text-gray-400 text-sm px-5 mt-5'>{item.description}</p>
             <h2 className=' text-sm text-gray-300 flex justify-end pr-[10%] py-5'>-{item.client}-</h2>
              
            </div>
          </SwiperSlide>
        })
      }
      </div>
      </Swiper>

    </div>
  )
}

export default TestimonialSlider




