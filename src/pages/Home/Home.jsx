import AboutMe from "../About/AboutMe"
import Members from "../About/Members"
import PhotoGallary from "../About/PhotoGallary"
import HomeBlog from "../Blog/Components/HomeBlog"
import HomeGetInTouch from "../Contact/HomeGetInTouch"
import Company from "./components/Company/Company"
import GetStarted from "./components/GetStarted/GetStarted"
import SimpleSteps from "./components/SimpleSteps/SimpleSteps"
import Testimonials from "./components/Testimonials/Testimonials"
import WorkProcess from "./components/WorkProcess/WorkProcess"
import ExperTiseArea from "./components/expertise/ExperTiseArea"


const Home = () => {
  return (
    <>

    <Company></Company> 
     <AboutMe></AboutMe>
     <ExperTiseArea></ExperTiseArea>
     <SimpleSteps></SimpleSteps>
     <WorkProcess></WorkProcess>
     <PhotoGallary></PhotoGallary>
     <Testimonials></Testimonials>
     <HomeBlog></HomeBlog>
     <GetStarted title={"BOOK A FREE CONSULTATION NOW!"}></GetStarted>
     <Members></Members>
     <HomeGetInTouch></HomeGetInTouch>


    </>
  )
}

export default Home