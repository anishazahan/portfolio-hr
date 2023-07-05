
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './shared/Navbar'
import Banner from './pages/Home/components/Banner'
import Footer from './shared/footer/Footer'

function App() {


  return (
    <>
      {/* <Navbar/> */}

    <Outlet/>
    
    <Footer></Footer>
    </>
  )
}

export default App
