import React from 'react'
import './about.css'

const AboutCountDown = () => {
  return (
    <div className='py-24 bg-zinc-900 mb-20'>

        <div className="flex flex-col lg:flex-row space-y-32 lg:space-y-0 max-w-4xl px-5 lg:justify-between justify-center xl:px-0 mx-auto items-center">
            <div className="experience-bg">
               <h2 className='text-2xl text-gray-200 font-semibold'> Experience</h2>
            </div>
            <div className="project-bg">
               <h2 className='text-2xl text-gray-200 font-semibold'> Projects</h2>
            </div>
            <div className="award-bg">
               <h2 className='text-2xl text-gray-200 font-semibold'> Awards</h2>
            </div>
            <div className="member-bg">
               <h2 className='text-2xl text-gray-200 font-semibold'> Members</h2>
            </div>
        </div>

    </div>
  )
}

export default AboutCountDown