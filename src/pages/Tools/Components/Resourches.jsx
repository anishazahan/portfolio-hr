import React from 'react'
import img1 from '../../../assets/img/tools-img-1.jpg'
import img2 from '../../../assets/img/tools-img-2.jpg'
import {BsArrowRightShort} from 'react-icons/bs'
import 'aos/dist/aos.css';

const Resourches = () => {
  return (
    <>

       <div className="max-w-7xl my-24 mx-auto px-5 xl:px-0 flex flex-col lg:flex-row justify-between items-center space-x-5 space-y-12 lg:space-y-0">

        <div  className="left w-full lg:w-[50%]">
           <div className="relative">
           <img className='w-full px-5' src={img1} alt="" />
           <img className='absolute right-0 top-[40%] md:hidden lg:block' src={img2} alt="" />
           </div>
        </div>
        
        <div className="right w-full lg:w-[50%]">
        <div className="">
            <h2 className='about-heading uppercase font-semibold  tracking-wide text-zink'>TOOLS I USE</h2>
                <h2 className='text-[42px] font-semibold text-zinc-900 mt-7'>Resources That Help me Do What I Do</h2>
                <p className='text-gray-500 mt-2 mb-6'>In my online journey of over 9 years, I came across a ton of tools and resources that make my jobs a lot easier. That includes everything including domain, hosting, themes, plugins, and all sorts of useful tools.
                </p>
                <p className='text-gray-500 mt-2 my-6'>If you are also getting into the professional spectrum that I have been going across, I have compiled them in this page for you, with discounts for some!
                </p>
                <p className='text-gray-500 mt-2'>Go through my preferred services and tools if you want to skip the testing that takes years. Contact me if you need any assistance selecting any.
                </p>


                <div className="flex space-x-20 mt-14">
                    <button className='px-8 py-3 text-sm font-bold text-white bg-zinc-900 rounded-sm hover:bg-primary duration-200'>Get Started</button>
                    <div className="flex items-center space-x-1">
                        <button>Learn More</button>
                        <BsArrowRightShort className='text-3xl'></BsArrowRightShort>
                    </div>
                </div>
                </div>
                </div>
       </div>

    </>
  )
}

export default Resourches