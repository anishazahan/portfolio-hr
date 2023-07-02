import { useLocation } from "react-router-dom"
import HomeBanner from "./HomeBanner"
import AboutBanner from "../../About/AboutBanner"


const Banner = () => {
    const location = useLocation()
    // console.log({location});
  return (
    <>

  
      {
         location.pathname==="/"? <HomeBanner></HomeBanner> :
         location.pathname==="/about"? <AboutBanner></AboutBanner> : <h2>Default Banner</h2>
      }
   

    </>
  )
}

export default Banner