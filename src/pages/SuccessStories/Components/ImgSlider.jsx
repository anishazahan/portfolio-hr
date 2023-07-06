import React from 'react'
import img1 from '../../../assets/img/success-stories-1.png'

const ImgSlider = () => {
  return (
    <div>

<div className="max-w-7xl mx-auto px-5 my-20 xl:px-0">

    {/* ---------heading-------- */}
         <div className="">
         <h2 className='about-heading uppercase font-semibold max-w-sm  tracking-wide text-zink'>MY STORY</h2>
                <h2 className='text-[42px] max-w-2xl font-semibold text-zinc-900 mt-7'>How I Got Here</h2>
                <p className='text-gray-500 max-w-2xl mt-2 mb-6'>Have a look at what I’ve achieved so far over 9 years
               in my Digital marketing career:
                </p>
         </div>

   {/* {/* ---------img-slider-------- */}

   <div className="border-2 border-black relative overflow-hidden">
    <img className='p-10 w-full' src={img1} alt="" />
    <div className="absolute cursor-pointer border-2 scale-110 border-primary hover:bg-black/40 top-5 left-5 right-5 bottom-5 duration-500 "></div>
   </div>
               
        </div>
    </div>
  )
}

export default ImgSlider