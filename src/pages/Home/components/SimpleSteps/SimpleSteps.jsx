import React from 'react'
import img from '../../../../assets/img/Vector-2251 (1).svg'
import '../../home.css'
import {FaAward} from 'react-icons/fa'
import './step.css'

const SimpleSteps = () => {
  return (
    <div className='pt-28 pb-40 bg-zinc-900'>

        {/* ---------------this is heading------- */}
            <div className="mx-auto flex flex-col justify-center items-center text-center px-4 lg:px-0">
            <h2 className='steps-heading uppercase font-medium text-xl tracking-wide text-gray-100'>4 SIMPLE STEPS</h2>
                <h2 className='text-[35px] font-semibold text-zinc-100 mt-5'>Rank Better With My SEO Strats</h2>
                <p className='text-gray-100 mt-2 max-w-xl'>It takes only 4 steps to rank better and dominate the SERP.
                </p>
                <div className="mt-7">
                <button className='get-start'>
              Get Started
             </button>
                </div>
            </div>

             {/* ---------------this is steps------- */}

            <div className="mx-w-5xl justify-center px-5 lg:pl-8 xl:pl-0 mx-auto mt-20 flex flex-col lg:flex-row   ">

               <div className="relative">
                 <img className='hidden lg:block' src={img} alt="" />
                <div className="flex flex-col md:flex-row lg:-left-4 space-y-8 lg:space-y-0 lg:space-x-4 lg:mr-16 lg:-top-5 absolute">
                <div className="">
                        <p className='w-16 text-2xl flex items-center justify-center h-16 rounded-full bg-primary text-white font-bold'>1</p>
                        <h2 className='lg:mt-14 mt-4 font-semibold text-zinc-100'>Analyzing</h2>
                        <p className='text-zinc-100 mt-3 max-w-xs'>Sorting things in place with goals and obstacles is the first step towards better ranking</p>
                 </div>
                 <div className=" lg:pt-[40px]">
                 <p className='w-16 text-2xl flex items-center justify-center h-16 rounded-full bg-gray-100 text-zinc-900 font-bold'>2</p>
                        <h2 className='font-semibold text-zinc-100 mt-4 lg:mt-4'>Planning</h2>
                        <p className='text-zinc-100 mt-3 max-w-xs'>Planning the content, growth, and authority is where you get clarity of how to do things</p>
                 </div>
                 <div className="  lg:pt-5 md:ml-2 lg:ml-0">
                        <p className='w-16 text-2xl flex items-center justify-center h-16 rounded-full bg-gray-100 text-zinc-900 md:mt-8 lg:mt-0 font-bold'>3</p>
                        <h2 className='font-semibold text-zinc-100 mt-4 lg:mt-8'>Execution</h2>
                        <p className='text-zinc-100 mt-3 md:max-w-[250px]'>With a robust plan in place, impossibles become easy things when it’s execution time</p>
                 </div>
                </div>
               </div>

               <div className="flex justify-start md:justify-center lg:flex-none">
               <div className=" lg:right-0 py-7 pl-7 pr-2 border mt-[700px] md:mt-[300px] lg:mt-10 lg:ml-4 shadow-xl rounded-tl-[70px] rounded-br-[70px] bg-black flex flex-col items-center ">
               <button className='text-white text-5xl'><FaAward></FaAward></button>
                <h2 className='font-semibold text-zinc-100 mt-4'>Results</h2>
                        <p className='text-zinc-100 mt-3 max-w-[220px]'>Forecasting results, getting the fruit on the plate, and planning ahead is what’s next</p>
                </div>
               </div>

            </div>
       
    </div>
  )
}

export default SimpleSteps