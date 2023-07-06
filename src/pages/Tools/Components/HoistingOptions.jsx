import React from 'react'
import {data} from './hoistingData.js'

const HoistingOptions = () => {
  return (
    <div className='bg-gray-100 py-24'>
        <div className="max-w-7xl mx-auto px-5 xl:px-0">
        <h2 className='about-heading uppercase font-semibold max-w-sm  tracking-wide text-zink'>HOSTING</h2>
                <h2 className='text-[42px] max-w-2xl font-semibold text-zinc-900 mt-7'>My Go-To Hosting Options</h2>
                <p className='text-gray-500 max-w-2xl mt-2 mb-6'>I have used dozens of domain and hosting services across my career in the past years. And these are the ones that I found the most reliable:
                </p>


                <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-6">
                    {
                        data.map((item,index)=>{
                          return  <div key={index} className="px-7 pt-10 pb-14 text-center bg-white border shadow">
                                <img className='mx-auto' src={item.img} alt="" />
                                <h2 className='text-xl font-bold my-6'>{item.name}</h2>
                                <p className='text-gray-500 mb-10'>{item.description}</p>
                                <button className='px-6 py-3 rounded-sm bg-black text-sm font-bold text-gray-200'>{item.link}</button>
                            </div>
                        })
                    }
                </div>
        </div>

    </div>
  )
}

export default HoistingOptions