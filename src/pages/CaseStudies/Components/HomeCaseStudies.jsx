import React from 'react'
import {data} from './data.js'
import {BiSolidUserCircle} from "react-icons/bi"
import {BsCalendarDateFill} from "react-icons/bs"
import { Link } from 'react-router-dom'
import './case-studies.css'
const HomeCaseStudies = () => {
  return (
    <div className=''>

        {/* -------- heading---------- */}
        <div className=" max-w-7xl mx-auto  flex flex-col justify-center items-start px-4 lg:px-0  mb-10 mt-10">
            <h2 className='steps-heading uppercase font-semibold  tracking-wide text-zink'>PORTFOLIO</h2>
                <h2 className='text-[35px] font-semibold text-zinc-900 mt-7'>See My Works</h2>
                <p className='text-gray-500 mt-2 max-w-xl'>I’ve built, scaled, and worked in hundreds of big projects. Here are a few case studies of what I’ve done over the years.
                </p>
                </div>


                {/* -------- blog card---------- */}


                <div className="max-w-7xl px-5 sm:px-10 md:px-5 xl:px-0 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">

                    {
                        data.map((item,index)=>{
                            return <div key={index} className="rounded-sm border shadow cursor-pointer">
                                <img className='min-h-[274px] img-animation' src={item.img} alt="" />
                                <div className="p-5">
                                <div className="flex  space-x-4 items-center">
                                    <div className="flex items-center space-x-2">
                                        <button className='text-xl text-zinc-500'><BiSolidUserCircle></BiSolidUserCircle></button>
                                        <p className='text-xs font-thin text-gray-700'>{item.author}</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <button className='text-[18px] text-zinc-500'><BsCalendarDateFill></BsCalendarDateFill></button>
                                        <p className='text-xs font-thin text-gray-700'>{item.author}</p>
                                    </div>
                                </div>


                                <Link to='/' className='text-xl hover:underline font-bold py-3 text-zinc-900'>{item.title}</Link>
                                <p className='text-sm text-gray-600 mt-1 mb-3'>{item.description}</p>

                                </div>
                            </div>
                        })
                    }

                </div>
    </div>
  )
}

export default HomeCaseStudies