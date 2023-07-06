import React from 'react'
import './footer.css'
import logo from '../../assets/img/Screenshot_2023-07-01_144021-removebg-preview (1).png'
// import ScrollToTop from "react-scroll-to-top";
import {BiLogoFacebookSquare,BiSolidRightArrow} from 'react-icons/bi'
import {AiFillTwitterSquare,AiFillLinkedin,AiFillSkype} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    
  
<footer className=" pt-8 pb-10 bg-zinc-900 ">
{/* <ScrollToTop color='red'  className='text-secondary pl-2 py-3 pr-1 shadow border bg-cyan-100 w-10 h-10 text-sm' smooth top='2000' /> */}
<div className="footer-bg">
  <div className="max-w-screen-xl  px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
      <img src={logo} className="mr-5 h-20" alt="logo" />
        <p className="max-w-xs mt-4 text-sm text-gray-300">
        I’m Habibur Rahman, an online business consultant, doing SEO for over a decade, and helping others build profitable businesses online.
        </p>
        <div className="flex items-center space-x-3 mt-5 mb-10">
                    <button className='text-3xl  text-primary'><BiLogoFacebookSquare></BiLogoFacebookSquare></button>
                    <button className='text-3xl  text-primary'><AiFillTwitterSquare></AiFillTwitterSquare></button>
                    <button className='text-3xl  text-primary'><AiFillLinkedin></AiFillLinkedin></button>
                    <button className='text-3xl  text-primary'><AiFillSkype></AiFillSkype></button>
                </div>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-xl text-white font-semibold">
          Pages
          </p>
          <div className="w-24  h-[2px] mt-1 bg-secondary"></div>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
                <button className='text-xl text-primary'><BiSolidRightArrow></BiSolidRightArrow></button>
                <Link className='hover:underline ' to='/'>About Me</Link>
            </div>
            <div className="flex items-center space-x-1">
                <button className='text-xl text-primary'><BiSolidRightArrow></BiSolidRightArrow></button>
                <Link className='hover:underline ' to='/'>Success Stories</Link>
            </div>
            <div className="flex items-center space-x-1">
                <button className='text-xl text-primary'><BiSolidRightArrow></BiSolidRightArrow></button>
                <Link className='hover:underline ' to='/'>Privacy Policy</Link>
            </div>
            <div className="flex items-center space-x-1">
                <button className='text-xl text-primary'><BiSolidRightArrow></BiSolidRightArrow></button>
                <Link className='hover:underline ' to='/'>Test SEO Knowledge</Link>
            </div>
            <div className="flex items-center space-x-1">
                <button className='text-xl text-primary'><BiSolidRightArrow></BiSolidRightArrow></button>
                <Link className='hover:underline ' to='/'>Contact Me</Link>
            </div>
     
          </nav>
        </div>

        
        <div>
          <p className="text-xl text-white font-semibold">
          Resources
          </p>
          <div className="w-24  h-[2px] mt-1 bg-secondary"></div>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
                <button className='text-xl text-primary'><BiSolidRightArrow></BiSolidRightArrow></button>
                <Link className='hover:underline ' to='/'>Case Studies</Link>
            </div>
            <div className="flex items-center space-x-1">
                <button className='text-xl text-primary'><BiSolidRightArrow></BiSolidRightArrow></button>
                <Link className='hover:underline ' to='/'>Keybroad Search</Link>
            </div>
            <div className="flex items-center space-x-1">
                <button className='text-xl text-primary'><BiSolidRightArrow></BiSolidRightArrow></button>
                <Link className='hover:underline ' to='/'>On Page SEO</Link>
            </div>
            <div className="flex items-center space-x-1">
                <button className='text-xl text-primary'><BiSolidRightArrow></BiSolidRightArrow></button>
                <Link className='hover:underline ' to='/'>Technical SEO</Link>
            </div>
            <div className="flex items-center space-x-1">
                <button className='text-xl text-primary'><BiSolidRightArrow></BiSolidRightArrow></button>
                <Link className='hover:underline ' to='/'>Link Building</Link>
            </div>
     
          </nav>
        </div>
        <div>
        <p className="text-xl text-white font-semibold">
        Recommend Tools
          </p>
          <div className="w-24  h-[2px] mt-1 bg-secondary"></div>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
                <button className='text-xl text-primary'><BiSolidRightArrow></BiSolidRightArrow></button>
                <Link className='hover:underline ' to='/'>
Best Hosting (Cheap)</Link>
            </div>
            <div className="flex items-center space-x-1">
                <button className='text-xl text-primary'><BiSolidRightArrow></BiSolidRightArrow></button>
                <Link className='hover:underline ' to='/'>Premium Themes and Plugin</Link>
            </div>
            <div className="flex items-center space-x-1">
                <button className='text-xl text-primary'><BiSolidRightArrow></BiSolidRightArrow></button>
                <Link className='hover:underline ' to='/'>In Marketing Tools</Link>
            </div>
            <div className="flex items-center space-x-1">
                <button className='text-xl text-primary'><BiSolidRightArrow></BiSolidRightArrow></button>
                <Link className='hover:underline ' to='/'>Vedio and Audio Marketing</Link>
            </div>
            <div className="flex items-center space-x-1">
                <button className='text-xl text-primary'><BiSolidRightArrow></BiSolidRightArrow></button>
                <Link className='hover:underline ' to='/'>Browser Extensions</Link>
            </div>
            <div className="flex items-center space-x-1">
                <button className='text-xl text-primary'><BiSolidRightArrow></BiSolidRightArrow></button>
                <Link className='hover:underline ' to='/'>Best AI Tools</Link>
            </div>
     
          </nav>
        </div>
     
        <div>
            
        <p className="text-xl text-white font-semibold">
          Legal
          </p>
          <div className="w-24  h-[2px] mt-1 bg-secondary"></div>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <a className="hover:opacity-75" href> Privacy Policy </a>
            <a className="hover:opacity-75" href> Terms &amp; Conditions </a>
            <a className="hover:opacity-75" href> Returns Policy </a>
            <a className="hover:opacity-75" href> Accessibility </a>
          </nav>
        </div>

        
      </div>
    </div>
   
  </div>

  <div className="">
    <p className='text-sm text-gray-300 text-center font-semibold'>&copy; Copyright 2023 All Rights Reserved by <span className='text-primary text-medium'>Limon</span></p>
  </div>
  </div>
</footer>
    
    
    </>
  )
}

export default Footer