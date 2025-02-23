"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars} from 'react-icons/fa6'

const Sidebar = () => {
    const [nav,setNav]= useState<boolean>(false);
    const navFunction=()=>{
        if (nav === false)  setNav(true) 
        else setNav(false); 
    }
  return (
    <div className=''>
        <div className={nav === true ? 'bg-highlighte nav-container shadow-md shadow-[#ffffff7b] w-[250px] sm:w-[330px] md:hidden h-[200px] rounded-md fixed z-50 duration-200 ease-linear top-2' : 'bg-highlighte nav-container shadow-md shadow-[#ffffff7b] w-[250px] sm:w-[330px] md:hidden h-[200px] rounded-md absolute z-50 duration-200 ease-linear -top-[220px]'}>
            <Link href="/">
                    <h3 className='hover:bg-[#232323] duration-300 ease-out hover:px-3 hover:text-textColot font-semibold cursor-pointer px-1 my-2 py-2 w-[95%] mx-auto rounded-xl text-[16px]'>Home</h3>
            </Link>
            <Link href="/about">
                    <h3 className='hover:bg-[#232323] duration-300 ease-out hover:px-3 hover:text-white font-semibold cursor-pointer px-1 my-2 py-2 w-[95%] mx-auto rounded-xl text-[16px]'>About Me</h3>
            </Link>
            <Link href="/project">
                    <h3 className='hover:bg-[#232323] duration-300 ease-out hover:px-3 hover:text-textColor font-semibold cursor-pointer px-1 my-2 py-2 w-[95%] mx-auto rounded-xl text-[16px]'>Project</h3>
            </Link>
            <Link href="/contact">
                    <h3 className='hover:bg-[#232323] duration-300 ease-out hover:px-3 hover:text-textColor font-semibold cursor-pointer px-1 my-2 py-2 w-[95%] mx-auto rounded-xl text-[16px]'>Contact me</h3>
            </Link>
        </div>
        <div onClick={()=>navFunction()} className='md:hidden right-3 top-6 fixed w-[35px] h-[30px] cursor-pointer bg-highlighte shadow-md shadow-[#ffffff7b] z-50 rounded-xl flex justify-center items-center text-textColot text-[22px] font-thin active:scale-[1.35] duration-[1s]'>
                <FaBars/>
            </div>
    </div>
  )
}

export default Sidebar