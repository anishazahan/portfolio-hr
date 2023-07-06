import React from 'react'
import ImgSlider from './Components/ImgSlider'
import GetStarted from '../Home/components/GetStarted/GetStarted'
import HomeGetInTouch from '../Contact/HomeGetInTouch'

const SuccessStories = () => {
  return (
    <>
     <ImgSlider></ImgSlider>
     <GetStarted title={`NEED INSPIRATION? JOIN MY PRIVATE EMAIL LIST
FOR LATEST SEO NEWS, TIPS, AND TRICKS`}></GetStarted>
         <HomeGetInTouch></HomeGetInTouch>

    </>
  )
}

export default SuccessStories