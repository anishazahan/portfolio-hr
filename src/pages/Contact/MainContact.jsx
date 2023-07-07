import React from 'react'
import img from '../../assets/img/map-img.png'

const MainContact = () => {
  return (
    <div className='max-w-6xl px-5 xl:px-0 mx-auto mt-10  lg:my-28'>

  <h2 className='text-3xl font-bold '>Let’s Schedule A Meeting</h2>
  <p className='text-gray-500 max-w-xl pt-5 pb-10'>Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday</p>
     <div className="mt-10 space-y-10 lg:space-y-0 flex flex-col items-stretch lg:flex-row  justify-between lg:space-x-9 lg:pb-16">
        <div className="left w-full md:w-[70%] mx-auto lg:w-[50%]">
            <form >
            <div className="w-full">
                <input type="text" className='text-sm text-black outline-none py-[15px] px-6 placeholder-gray-500 w-full font-medium border border-gray-300 rounded-sm' placeholder='Your Name' />
            </div>
            <div className="w-full my-6">
                <input type="email" className='text-sm text-black outline-none py-[15px] px-6 placeholder-gray-500 w-full font-medium border border-gray-300 rounded-sm' placeholder='Your Email' />
            </div>

            <div className="">
                <textarea placeholder='Your Message' className='text-sm text-black outline-none py-[15px] px-6 placeholder-gray-500 w-full font-medium border border-gray-300 rounded-sm' cols="30" rows="10"></textarea>
            </div>

            <div className="w-full mt-8">
                <input className='text-sm rounded-sm w-full cursor-pointer font-semibold text-gray-200 py-[15px] hover:bg-primary duration-200  bg-black' type="submit" value="Send Message" />
            </div>


            </form>
        </div>
        <div className="right  w-full md:hidden lg:flex justify-center  mx-auto lg:w-[50%] min-h-[460px]">
            <img className='h-full w-full flex justify-center text-center mx-auto object-cover' src={img} alt="" />
        </div>
     </div>
    </div>
  )
}

export default MainContact