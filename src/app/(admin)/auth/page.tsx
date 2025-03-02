import React from 'react';
import { FaGithub } from "react-icons/fa";

const page = () => {
  return (
    <div
        className='w-full min-h-svh flex justify-center items-center'
    >
        <div 
            className='w-full h-svh md:w-[400px] md:h-[550px] bg-[#ffffff13] md:rounded-lg shadow-lg shadow-black flex justify-center items-center'
        >
            <div
                className=''
            >
                <h2
                    className='text-textColor text-3xl pb-8'
                >
                    Connect with github
                </h2>

                    <button
                        className='bg-[#010409] flex items-center justify-between gap-2 py-2 px-4 rounded-lg mx-auto active:bg-[#000000bb] duration-100 ease-in-out'
                    >GitHub <FaGithub /></button>
            
            </div>
        </div>
    </div>
  )
}

export default page