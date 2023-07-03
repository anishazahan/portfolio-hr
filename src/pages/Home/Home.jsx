import AboutMe from "../About/AboutMe"
import Company from "./components/Company/Company"
import SimpleSteps from "./components/SimpleSteps/SimpleSteps"
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


    </>
  )
}

export default Home