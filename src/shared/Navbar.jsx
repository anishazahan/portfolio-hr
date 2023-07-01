import  { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
// import CommonBtn from '../pages/components/Common-btn/CommonBtn'
import logo from '../assets/img/Screenshot_2023-07-01_144021-removebg-preview (1).png'
import {AiOutlineMenuUnfold} from 'react-icons/ai'





const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
    
<div className="bg-gray-50">
	<nav className="relative px-4 lg:px-0 py-2 max-w-7xl mx-auto flex justify-between  items-center">
		<Link to='/' className="" >
			<img className='w-52' src={logo} alt="" />
         
		</Link>
		
		<ul className="hidden  lg:flex  lg:items-center lg:space-x-8">

		<li><NavLink to='/'  className={({ isActive }) => (isActive ? 'border-b-2 border-secondary font-semibold text-[17px] text-black hover:text-secondary ' : 'font-semibold text-[17px] text-black hover:text-secondary') } >Expertise Area</NavLink></li>
			
			<li><NavLink to='/about'  className={({ isActive }) => (isActive ? 'border-b-2 border-secondary font-semibold text-[17px] text-black hover:text-secondary ' : 'font-semibold text-[17px] text-black hover:text-secondary') } >Case Studies</NavLink></li>
			
			<li><NavLink to='/services'  className={({ isActive }) => (isActive ? 'border-b-2 border-secondary font-semibold text-[17px] text-black hover:text-secondary ' : 'font-semibold text-[17px] text-black hover:text-secondary') } >Tools</NavLink></li>
			
			<li><NavLink to='/books'  className={({ isActive }) => (isActive ? 'border-b-2 border-secondary font-semibold text-[17px] text-black hover:text-secondary ' : 'font-semibold text-[17px] text-black hover:text-secondary') } >Success Stories</NavLink></li>

			<li><NavLink to='/about'  className={({ isActive }) => (isActive ? 'border-b-2 border-secondary font-semibold text-[17px] text-black hover:text-secondary ' : 'font-semibold text-[17px] text-black hover:text-secondary') } >About Me</NavLink></li>
		
			<li><NavLink to='/contact'  className={({ isActive }) => (isActive ? 'border-b-2 border-secondary ' : 'font-bold text-[17px] text-black hover:text-secondary') } >Contact</NavLink></li>

			<li><NavLink to='/contact'  className={({ isActive }) => (isActive ? 'border-b-2 border-secondary ' : 'font-bold text-[17px] text-black hover:text-secondary') } >Blog</NavLink></li>

            <div className="">
	{/* <CommonBtn></CommonBtn> */}
    <button className='py-3 px-6'>Go To YT </button>
		</div>
		</ul>

		<div className="lg:hidden ">
			<div className="">
			<button  onClick={() => setIsMenuOpen(true)} htmlFor="my-drawer" className="drawer-button flex items-end text-secondary text-3xl text-black-600 p-3">
				
				<AiOutlineMenuUnfold></AiOutlineMenuUnfold>
			</button>
			</div>
		</div>

	</nav>


	{/* // for mobile */}

  
  {
	isMenuOpen && <div className=" navbar-menu relative z-50 lg:hidden">
		<div className=" fixed inset-0 bg-gray-800 "></div>
		<nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-primary border-r overflow-y-auto">
			<div className="flex items-center mb-8">
				<a className="mr-auto text-3xl font-bold leading-none" href="#">
					<h1 className='text-black'>logo</h1>
				</a>
				<button  onClick={() => setIsMenuOpen(false)} className="navbar-close">
					<svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</button>
			</div>
			<div>
				<ul className='space-y-3 text-center'>
                <li><NavLink to='/about'  className={({ isActive }) => (isActive ? 'border-b-2 border-secondary font-semibold text-[17px] text-black hover:text-secondary ' : 'font-semibold text-[17px] text-black hover:text-secondary') } >About Us</NavLink></li>
			
			<li><NavLink to='/services'  className={({ isActive }) => (isActive ? 'border-b-2 border-secondary font-semibold text-[17px] text-black hover:text-secondary ' : 'font-semibold text-[17px] text-black hover:text-secondary') } >Services</NavLink></li>
			
			<li><NavLink to='/books'  className={({ isActive }) => (isActive ? 'border-b-2 border-secondary font-semibold text-[17px] text-black hover:text-secondary ' : 'font-semibold text-[17px] text-black hover:text-secondary') } >Books</NavLink></li>
		
			<li><NavLink to='/contact'  className={({ isActive }) => (isActive ? 'border-b-2 border-secondary ' : 'font-bold text-[17px] text-black hover:text-secondary') } >Contact</NavLink></li>
				</ul>
			</div>
			<div className="mt-auto">
				
			</div>
		</nav>
	</div>
  }



</div>




    </>
  )
}

export default Navbar