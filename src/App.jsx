
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './shared/Navbar'
import Banner from './pages/Home/components/Banner'

function App() {


  return (
    <>
      <Navbar></Navbar>

      <Banner></Banner>
  
    <Outlet></Outlet>
    
  {/* <div className="bg-gray-800 mx-auto py-5">
  <h2 className='text-white text-center font-bold'>footer</h2>
  </div> */}
    </>
  )
}

export default App
