"use client"
import React from 'react';
import { AiFillMessage } from "react-icons/ai";
import { RiProjectorFill } from "react-icons/ri";

const Bar = ({setWork}:{setWork:any}) => {
  return (
    <nav className='w-[100px] p-6 h-svh bg-[#0507257e] shadow-[0px_0px_10px_rgb(2,3,4,0.4)] text-3xl'>
        <div 
            onClick={()=>setWork("message")}
            className='rounded-full py-2 mb-6 cursor-pointer flex justify-center items-center hover:bg-[#8686866b] hover:shadow-[0px_0px_5px_rgb(255,255,255,0.5)] duration-100 ease-in-out active:scale-90'
        >
          <AiFillMessage />
        </div>
        <div 
            onClick={()=>setWork("projects")}
            className='rounded-full py-2 mb-6 cursor-pointer flex justify-center items-center hover:bg-[#8686866b] hover:shadow-[0px_0px_5px_rgb(255,255,255,0.5)] duration-100 ease-in-out active:scale-90'
        >
          <RiProjectorFill />
        </div>
    </nav>
  )
}

export default Bar