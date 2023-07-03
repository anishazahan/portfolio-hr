import React from 'react'
import light from '../../../../assets/img/light.png' 
import cloud from '../../../../assets/img/cloud.png' 
import arrow from '../../../../assets/img/arrow.png' 
import './timeline.css'

const TimeLine = () => {
  return (
    <>
    

    {/* <!-- component --> */}
<div className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative mt-10">
    
      <div className="border-l-2 border-black mt-10">
        {/* <!-- Card 1 --> */}
        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-zinc-800 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          {/* <!-- Dot Follwing the Left Vertical Line --> */}
          <div className="w-16 h-16 bg-white  absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-5  lg:mt-0">
            <img className='flip-in-ver-left border-2 border-black rounded-full flip-in-ver-right ' src={light} alt="" />
          </div>

          {/* <!-- Line that connecting the box with the vertical line --> */}
          <div className="w-14 h-1 bg-black absolute -left-14 z-0"></div>

          {/* <!-- Content that showing in the box --> */}
          <div className="flex-auto py-7">
            <h1 className="text-lg font-semibold">Understanding The Needs</h1>
            <p className="text-gray-100 mt-4">I start by analyzing the current stats and understanding the goals of the project. This helps me plan better and forecast with certainty that the steps we’ll take can out-do the competition.</p>
            
          </div>
       
        </div>

        {/* <!-- Card 2 --> */}
        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 border bg-white shadow text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          {/* <!-- Dot Follwing the Left Vertical Line --> */}
          <div className="w-16 h-16 bg-white absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-5  lg:mt-0">
          <img className='flip-in-ver-left border-2 border-black rounded-full flip-in-ver-right ' src={cloud} alt="" />
          </div>

          {/* <!-- Line that connecting the box with the vertical line --> */}
          <div className="w-10 h-1 bg-black absolute -left-10 z-0"></div>

          {/* <!-- Content that showing in the box --> */}
          <div className="flex-auto py-7">
            <h1 className="text-lg text-zinc-950 font-semibold">Planning The Best Strategy</h1>
            <p className="text-gray-600 mt-4">Once I have the weaknesses and strengths laid out, alongside the goals for the project, I tailor a killer strategy that is not only better than competition, but also future proof by itself.</p>
            
          </div>
        </div>

        {/* <!-- Card 3 --> */}
        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-zinc-900 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          {/* <!-- Dot Follwing the Left Vertical Line --> */}
          <div className="w-16 h-16 bg-white absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-5  lg:mt-0">
          <img className='flip-in-ver-left border-2 border-black rounded-full flip-in-ver-right ' src={arrow} alt="" />
          </div>

          {/* <!-- Line that connecting the box with the vertical line --> */}
          <div className="w-10 h-1 bg-black absolute -left-10 z-0"></div>

          {/* <!-- Content that showing in the box --> */}
          <div className="flex-auto py-7">
            <h1 className="text-lg font-semibold">Execution And Testing</h1>
            <p className="text-gray-100 mt-4">Then it comes to the execution phase where I test different things before reporting one killer move that can do magic to dominate the industry you’re trying to crush with better offers.</p>
            
          </div>
        </div>

      
      </div>
    
    </div>
    
    </>
  )
}

export default TimeLine