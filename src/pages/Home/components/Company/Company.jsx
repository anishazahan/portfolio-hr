import React from 'react'
import {data} from './companyImg.js'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay} from "swiper";

const Company = () => {
  return (
    <div className='max-w-6xl pb-20 px-5 lg:px-0 mx-auto '>
           <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        slidesPerView={2}
        
        autoplay={{
          delay: 1000,
          loop:true,
          disableOnInteraction: false,
        }}
       
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
    
      
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
          {
            data.map((item,index)=>{
              return  <SwiperSlide key={index}>
                <div className="py-12 px-3 flex justify-center bg-gray-200 hover:bg-gray-300">
                    <img src={item.img} alt="" />
                </div>
              </SwiperSlide>
            })
          }
      </div>
      </Swiper>

    </div>
  )
}

export default Company