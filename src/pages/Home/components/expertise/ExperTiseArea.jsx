import React from 'react'
import '../../home.css'
import ExpertiseSlider from './ExpertiseSlider'

const ExperTiseArea = () => {
  return (
    <div className=" bg-gray-100">

    
    <div className='max-w-7xl px-4 xl:px-0 mx-auto pt-20 pb-10'>
            <h2 className='expertise-heading uppercase font-semibold text-xl tracking-wide text-gray-800'>MY EXPERTISE AREA</h2>
                <h2 className='text-[39px] font-bold text-zinc-800 mt-6'>Here’s What I Do The Best</h2>
                <p className='text-gray-500 mt-7 max-w-xl'>For more than eight years, I have served in the online industry.As mentioned below, I am expertise in the following category.”Feel free to knock me if you need any help.
                </p>

    </div>

    <ExpertiseSlider></ExpertiseSlider>
    </div>
  )
}

export default ExperTiseArea