import React from 'react'
import './contact.css'
import {BiLogoFacebookSquare} from 'react-icons/bi'
import {AiFillTwitterSquare,AiFillLinkedin,AiFillSkype} from 'react-icons/ai'

const HomeGetInTouch = () => {
  return (
    <div className=' py-20'>
       
       <div className="max-w-7xl mx-auto px-5 xl:px-0 flex flex-col lg:flex-row items-center space-y-9 lg:space-y-0 justify-between">
            <div className="left w-full lg:w-[30%]">
                 {/* -------- heading---------- */}
              <div className=" flex flex-col justify-center  ">
            <h2 className='contact-heading uppercase font-semibold  tracking-wide text-zink'>CONTACT ME</h2>
                <h2 className='text-[35px] font-semibold text-zinc-900 mt-7'>Let’s Get In Touch</h2>
                <p className='text-gray-500 mt-2 max-w-xs'>Need assistance in building a strategy? Contact me to discuss a project.
                <div className="flex items-center space-x-3 mt-5 mb-10">
                    <button className='text-3xl  text-primary'><BiLogoFacebookSquare></BiLogoFacebookSquare></button>
                    <button className='text-3xl  text-primary'><AiFillTwitterSquare></AiFillTwitterSquare></button>
                    <button className='text-3xl  text-primary'><AiFillLinkedin></AiFillLinkedin></button>
                    <button className='text-3xl  text-primary'><AiFillSkype></AiFillSkype></button>
                </div>
                <button className='px-5 py-3 border-2 border-black text-sm text-zinc-800 rounded-sm font-bold'>Book a Free Consultation</button>
                </p>
                </div>
            </div>
            <div className="right w-full lg:w-[70%]">

                <form action="">
                   <div className="flex flex-wrap items-baseline space-x-2">
                   <p className='p'>Hey, this is

                   <input className='border-b-2 mx-4 pl-3 pb-1 border-gray-400 outline-none ' type="text" placeholder='Your Name Here' />

                   I am doing
                    <select className='border-b-2 mt-5 md:mt-0 mx-4 text-gray-400 pr-5 pl-3 pb-1 border-gray-400 outline-none ' id="mySelect">
                        <option className='text-gray-400' value="option1">Select Service</option>
                        <option className='text-gray-400' value="option2">Option 2</option>
                        <option className='text-gray-400' value="option3">Option 3</option>
                    </select>

                    and need your consultancy regarding my website/channel,

                     <input className='border-b-2 mt-5 md:mt-0 mx-4 pl-3 pb-1 border-gray-400 outline-none ' type="url" placeholder='URL' /> 

                     Here is my query   <textarea className='border-b-2 mx-4 pl-3  border-gray-400 outline-none' placeholder='Your Message' id="messageInput" ></textarea> Please reply me on my email:

                     <input className='border-b-2 mx-4 pl-3 mt-10 pb-1 border-gray-400 outline-none ' type="Email" required placeholder='Your Email' /> Thank you </p>
                    
                    <input className='text-sm text-white bg-zinc-950 mt-16 px-6 py-[10px] rounded-sm font-medium' type="submit" value="Send Message" />
                </div>
                </form>
            </div>
       </div>

    </div>
  )
}

export default HomeGetInTouch