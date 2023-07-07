/* eslint-disable react/prop-types */
import React from 'react'
import './CommonBanner.css'

const CommonBanner = (props) => {
    // console.log(props);
    const {name,title}= props;
  return (
    <div className='h-[60vh]'>
      <div className="bg-animation max-w-7xl mx-auto flex flex-col w-full space-y-3 justify-center items-center h-full">
      <p className='font-bold text-primary'>{name}</p>
        <h2 className='text-2xl px-4 text-center tracking-wide  font-bold'>{title}</h2>
      </div>

    </div>
  )
}

export default CommonBanner