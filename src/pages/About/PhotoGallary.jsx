import React from 'react'
import './about.css'
import 'aos/dist/aos.css';

const PhotoGallary = () => {
  return (
    <div className='hidden lg:block'>

    <h2 className='text-4xl font-bold mx-auto text-center max-w-7xl px-5 xl:px-0'>Our Photo gallary</h2>
        <p className='text-gray-500 text-center  xl:mb-8 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
 
    <div className='relative min-h-[85vh] pb-16'>
        
     <ul className="main-nav  my-24">
  <li data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="item1">
    <div className="bg"></div>
  </li>
  <li data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="item2">
    <div className="bg"></div>
  </li>
  <li data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="item3">
    <div className="bg"></div>
  </li>
  <li data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="item4">
    <div className="bg"></div>
  </li>
  <li data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="item5">
    <div className="bg"></div>
  </li>
</ul>
    
    </div>
    </div>
  )
}

export default PhotoGallary