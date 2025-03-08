"use client"
import React from 'react';
import { AiFillMessage } from "react-icons/ai";
import { RiProjectorFill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";

const Bar = ({setWork,state}:{setWork:any,state:boolean}) => {

  const logOut = async () => {
    try {
      confirm("Are you sure to logout?")
      
    } catch (error) {
      
    }
  }

  return (
    <nav className='w-[100px] p-6 h-svh bg-[#0507257e] shadow-[0px_0px_10px_rgb(2,3,4,0.4)] text-3xl relative'>
        <div 
            onClick={()=>setWork(true)}
            className='rounded-full py-2 mb-6 cursor-pointer flex justify-center items-center hover:bg-[#8686866b] hover:shadow-[0px_0px_5px_rgb(255,255,255,0.5)] duration-100 ease-in-out active:scale-90'
        >
          <AiFillMessage className={state?"text-[#3377f7]":""} />
        </div>
        <div 
            onClick={()=>setWork(false)}
            className='rounded-full py-2 mb-6 cursor-pointer flex justify-center items-center hover:bg-[#8686866b] hover:shadow-[0px_0px_5px_rgb(255,255,255,0.5)] duration-100 ease-in-out active:scale-90'
        >
          <RiProjectorFill className={!state?"text-[#3377f7]":""} />
        </div>
        <div 
            onClick={()=>logOut()}
            className='rounded-full py-2 mb-6 cursor-pointer flex justify-center items-center text-red-600 duration-100 ease-in-out active:scale-90 absolute bottom-[50%] left-[35%]'
        >
          <IoLogOut />
        </div>
    </nav>
  )
}

export default Bar