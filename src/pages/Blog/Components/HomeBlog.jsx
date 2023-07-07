import React from 'react'
import {data} from './homeBlogData.js'
import {BiSolidUserCircle} from "react-icons/bi"
import {BsCalendarDateFill} from "react-icons/bs"
import { Link } from 'react-router-dom'
const HomeBlog = () => {
  return (
    <div className=''>

        {/* -------- heading---------- */}
        <div className=" flex flex-col justify-center items-center text-center px-4 lg:px-0 lg:mb-20 mb-10 mt-10">
            <h2 className='steps-heading uppercase font-semibold  tracking-wide text-zink'>BLOG</h2>
                <h2 className='text-[35px] font-semibold text-zinc-900 mt-7'>My Latest Blogs</h2>
                <p className='text-gray-500 mt-2 max-w-xs'>Follow my blog to know what’s working
                and my latest knowledge base.
                </p>
                </div>


                {/* -------- blog card---------- */}


                <div className="max-w-7xl px-5 sm:px-10 md:px-5 xl:px-0 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">

                    {
                        data.map((item,index)=>{
                            const {id} = item
                            return <Link to={`/blog/${id}`} key={index} className="rounded-sm border shadow cursor-pointer">
                                <img className='min-h-[274px]' src={item.img} alt="" />
                                <div className="p-5">
                                <div className="flex  space-x-4 items-center">
                                    <div className="flex items-center space-x-2">
                                        <button className='text-xl text-zinc-500'><BiSolidUserCircle></BiSolidUserCircle></button>
                                        <p className='text-xs font-thin text-gray-500'>{item.author}</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <button className='text-[18px] text-zinc-500'><BsCalendarDateFill></BsCalendarDateFill></button>
                                        <p className='text-xs font-thin text-gray-500'>{item.date}</p>
                                    </div>
                                </div>


                                <h2 className='text-xl font-bold hover:underline py-3 text-zinc-900'>{item.title}</h2>
                                <p className='text-sm text-gray-600 mt-1 mb-3'>{item.description}</p>

                                <div className="flex justify-end pb-5 ">
                                    <button className='px-8 rounded-sm hover:bg-primary duration-150 py-[10px] text-gray-100 font-semibold bg-black'>Deals</button>
                                </div>
                                </div>
                            </Link>
                        })
                    }

                </div>
    </div>
  )
}

export default HomeBlog