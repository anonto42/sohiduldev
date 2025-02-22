import Link from 'next/link';
import React from 'react';
import { FaLaptopCode } from "react-icons/fa";

const Services = () => {
  return (
    <div className='min-h-[80vh] md:min-h-[300px] w-full text-white'>
        <div className='w-full flex justify-center mt-20 mb-[50px] text-center text-topr'>
            <div>
                <h1 className='text-[30px] md:text-[40px] font-bold'>I will develop</h1>
                <h4 className='text-[25px] md:text-[30px] font-semibold italic text-[#88B8F4] -mt-3'>a website tailored to your specific needs.</h4>
            </div>
        </div>
        {/* <div className='md:flex justify-between lg:px-6 xl:px-20'>
            <div className='bg-[#1C222A] mb-[50px] grid grid-rows-3 w-full lg:w-[320px] md:w-[280px] rounded-2xl shadow-xl py-9 px-9 min-h-[340px] md:h-auto relative'>
                <div className='text-[80px] md:text-[60px] text-[#88B8F4] row-span-1'>
                    <FaLaptopCode/>
                </div>
                <div className='row-span-2'>
                    <h1 className='uppercase my-2 text-[20px] md:text-[18px] font-bold'>MERN-Stack development</h1>
                    <p className='text-sm md:text-[12px]'>I will develop a website tailored to your specific needs.</p>
                </div>
                <Link href="/">
                    <div className='flex row-span-3 items-center border-2 w-[160px] justify-center h-[50px] rounded-xl mt-12 md:mt-5 md:w-[140px] md:h-[40px] border-[#88B8F4] hover:scale-105 mx-auto'>
                        <h5 className='text-[18px] md:text-[15px] font-bold'>Contact me</h5>
                    </div>
                </Link>
            </div>
        </div> */}
    </div>
  )
}

export default Services