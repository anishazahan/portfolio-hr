import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import '../../home.css'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay,Mousewheel, Pagination } from "swiper";
import {data} from './expertiseData.js'




const ExpertiseSlider = () => {
  return (
    <>

    <div className='max-w-7xl pb-20 px-5 xl:px-0 mx-auto '>
           <Swiper
           direction={"horizontal"}
        spaceBetween={15}
        mousewheel={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={1}
        pagination={{
            clickable: true,
          }}
        
        // autoplay={{
        //   delay: 3000,
        //   loop:true,
        //   disableOnInteraction: false,
        // }}
       
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
        }}
        // navigation={true}
        modules={[Mousewheel, Pagination,Autoplay]}
        className="mySwiper"
      >
    
      
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 ">
          {
            data.map((item,index)=>{
              return  <SwiperSlide key={index}>
               <div className="bg-white group py-6 px-3   md:min-h-56 lg:h-48 cursor-pointer border hover:shadow">
                <div className="flex  space-x-5 h-full">
                    <div className="left">
                        <img className='w-28 grayscale group-hover:grayscale-0' src={item.img} alt="" />
                    </div>
                    <div className="right">
                        <h2 className='text-xl font-bold text-zink '>{item.name}</h2>
                        <p className='text-gray-500 mt-3'>{item.description}</p>
                    </div>
                </div>
               </div>
              </SwiperSlide>
            })
          }
      </div>
      </Swiper>

    </div>

    </>
  )
}

export default ExpertiseSlider