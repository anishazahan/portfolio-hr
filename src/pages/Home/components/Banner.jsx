import { useLocation } from "react-router-dom"
import HomeBanner from "./HomeBanner"
import AboutBanner from "../../About/AboutBanner"
import CommonBanner from "../../../shared/CommonBanner/CommonBanner"


const Banner = () => {
    const location = useLocation()
    // console.log({location});
  return (
    <>

  
      {
         location.pathname==="/"? <HomeBanner></HomeBanner> :
         location.pathname==="/about"? <CommonBanner name={"About"} title={"Who I am"}></CommonBanner> : 
         location.pathname==="/case-studies"? <CommonBanner name={"Portfolio"} title={"Case Studies"}></CommonBanner> : 
         location.pathname==="/tools"? <CommonBanner name={"Tools"} title={"Resourches I Love"}></CommonBanner> : 
         location.pathname==="/success-stories"? <CommonBanner name={"Success-Stories"} title={"Withness My Success Journey"}></CommonBanner> : 
         location.pathname==="/contact"? <CommonBanner name={"Contact"} title={"Connect With Me"}></CommonBanner> : 
         location.pathname==="/blog"? <CommonBanner name={"Blog"} title={"Blog articles about SEO,deals,marketing and Growth"}></CommonBanner> : 
         
         <HomeBanner></HomeBanner>
      }
   

    </>
  )
}

export default Banner