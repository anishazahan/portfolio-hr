import React from 'react'
import Resourches from './Components/Resourches'
import HoistingOptions from './Components/HoistingOptions'
import Testimonials from '../Home/components/Testimonials/Testimonials'
import GetStarted from '../Home/components/GetStarted/GetStarted'
import HomeGetInTouch from '../Contact/HomeGetInTouch'

const Tools = () => {
  return (
    <>
      <Resourches></Resourches>
      <HoistingOptions></HoistingOptions>
      <Testimonials></Testimonials>
      <GetStarted title={`NOT SURE WHAT TOOL YOU SHOULD
         GO WITH? LET ME HELP!`}></GetStarted>
         <HomeGetInTouch></HomeGetInTouch>

    </>
  )
}

export default Tools