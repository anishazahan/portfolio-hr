import AboutMe from "../About/AboutMe"
import HomeBlog from "../Blog/Components/HomeBlog"
import Company from "./components/Company/Company"
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
     <Testimonials></Testimonials>
     <HomeBlog></HomeBlog>


    </>
  )
}

export default Home