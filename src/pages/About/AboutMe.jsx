import React from 'react'
import img from '../../assets/img/hrlimon-about-imge.png'
import './about.css'

const AboutMe = () => {
  return (
    <div>
      
      <div id='aboutme' className="max-w-7xl px-4 xl:px-0 mx-auto mb-20">
        <div className="flex justify-between items-center flex-col lg:flex-row space-x-6">
            <div className="left w-full lg:w-[50%]">
                <img src={img} alt="" />
            </div>
            <div className="right w-full lg:w-[50%]">
                <h2 className='about-heading uppercase font-semibold text-xl tracking-wide text-gray-800'>LITTLE ABOUT ME</h2>
                <h2 className='text-[39px] font-bold text-zinc-800 mt-7'>A Serial Entrepreneur Who Does Wonders</h2>
                <p className='text-gray-500 mt-5'>Howdy there, this is Habibur Rahman, a serial online entrepreneur with multiple successful milestones passed. I’ve been building businesses and helping others do the same for over 8 years now.
                </p>
                <p className='text-gray-500 mt-2'>Started out as a successful YouTube marketer, I settled as an SEO and helping people ever since. Being a successful SEO that I am, I’ve gathered some rare knowledge of growing and scaling businesses from pennies to millions for years.
                </p>
                <p className='text-gray-500 mt-6'>If you want my definition, I’m a deadly combination of:.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                    <div className="">
                    <div className="flex items-baseline space-x-2">
                        <h2 className='text-zinc-800 text-xl font-bold'>Passinate</h2>
                        <div className="w-12 h-[3px] bg-pink-800"></div>
                        </div>
                        <p className='text-gray-500 mt-2'>I don’t work with pressure because I do the things I love. And the thing I love the most is crafting killer SEO strategies.</p>
                    </div>
                    <div className="">
                    <div className="flex items-baseline space-x-2">
                        <h2 className='text-zinc-800 text-xl font-bold'>Workaholic</h2>
                        <div className="w-12 h-[3px] bg-pink-800"></div>
                        </div>
                       
                        <p className='text-gray-500 mt-2'>Every time I see a business take off with my strategies, I just can’t take my butt off my chair because I’m planning another.</p>
                    </div>
                    <div className="">
                        <div className="flex items-baseline space-x-2">
                        <h2 className='text-zinc-800 text-xl font-bold'>Visionary</h2>
                        <div className="w-12 h-[3px] bg-pink-800"></div>
                        </div>
                        <p className='text-gray-500 mt-2'>Some say, I’m gifted with knowledge, but I see it as a process of the vision I’ve seen years ago. To build businesses.</p>
                    </div>
                    
                </div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default AboutMe