import React from 'react'
import './about.css'

const Skills = () => {
  return (

    <>

        <h2 className='text-4xl skills-heading font-bold mx-auto text-center max-w-7xl px-5 xl:px-0'>My Skills</h2>
        <p className='text-gray-500 text-center mb-16 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  
    <div className='max-w-5xl flex flex-col md:flex-row space-y-8 lg:space-y-0 justify-center items-center md:space-x-10 mx-auto px-5 lg:px-0 mb-28'>

    <div className="radial-progress w-36 h-36" style={{"--value":90}}>90% HTML</div>
    <div className="radial-progress w-36 h-36" style={{"--value":90}}>85% CSS</div>
    <div className="radial-progress w-36 h-36" style={{"--value":70}}>70% JS</div>
    <div className="radial-progress w-36 h-36" style={{"--value":87}}>87% Figma</div>
  


    </div>

    </>
  )
}

export default Skills