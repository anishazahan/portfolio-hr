import React from 'react'
import TimeLine from './TimeLine'

const WorkProcess = () => {
  return (
    <div className='  py-24 bg-zinc-50 mb-16'>

       <div className=" flex flex-col justify-center items-center text-center px-4 lg:px-0">
            <h2 className='steps-heading uppercase font-semibold  tracking-wide text-zink'>MY WORK PROCESS</h2>
                <h2 className='text-[35px] font-semibold text-zinc-800 mt-7'>How I Get Things Done</h2>
                <p className='text-gray-500 mt-2 max-w-xs'>Here’s the process that I follow to handle projects of any size; small or big:
                </p>

             
                </div>

                <div className="max-w-6xl mx-auto px-5 lg:px-0">
                <TimeLine></TimeLine>
                </div>


               

    </div>
  )
}

export default WorkProcess