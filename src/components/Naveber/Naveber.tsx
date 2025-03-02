import React from 'react';
import Sidebar from '../SideBar/Sidebar';
import Link from 'next/link';

const Naveber = () => {
  return (
    <div className='w-full bg-[#ffff0000] sticky top-0 backdrop-blur-sm z-20'>
        <div className='h-[80px] w-full relative flex text-textColor justify-center items-center md:hidden px-5'> 
            <Link href="/" className=''>
                <h1 className='flex relative uppercase font-bold italic text-[18px]'>sohidul Islam Ananto
                  <div className='w-[3px] absolute bottom-1 -right-2 rounded-full h-[3px] bg-highlighte'/>
                </h1>
            </Link>
        </div>
        <Sidebar />
        <div className='hidden md:block w-full mx-auto'>
            <div className='w-full h-[80px] flex text-textColor justify-between items-center'>
                <div id='logo' className=''>
                    <Link href="/">
                        <h1 className='flex relative uppercase font-bold italic text-[22px]'>sohidul Islam Ananto
                          <div className='w-[3px] absolute bottom-1 -right-2 rounded-full h-[3px] bg-highlighte'/>
                        </h1>
                    </Link>
                </div>
                <div className='flex'>
                    <Link href="/">
                        <div className='mr-4 w-[105px] h-[40px] flex justify-center items-center rounded-full hover:text-[#2e2e2e] text-[17px] font-semibold duration-150 ease-linear cursor-pointer hover:bg-highlighte hover:shadow-md hover:shadow-[#ffffff7b]'>Home</div>
                    </Link>
                    <Link href="/about">
                        <div className='mx-4 w-[105px] h-[40px] flex justify-center items-center rounded-full hover:text-[#2e2e2e] text-[17px] font-semibold duration-150 ease-linear cursor-pointer hover:bg-highlighte hover:shadow-md hover:shadow-[#ffffff7b]'>About Me</div>
                    </Link>
                    <Link href="/project">
                        <div className='mx-4 w-[105px] h-[40px] flex justify-center items-center rounded-full hover:text-[#2e2e2e] text-[17px] font-semibold duration-150 ease-linear cursor-pointer hover:bg-highlighte hover:shadow-md hover:shadow-[#ffffff7b]'>Projects</div>
                    </Link>
                    <Link href="/contact">
                        <div className='ml-4 w-[125px] h-[40px] flex justify-center items-center rounded-full text-[#2e2e2e] text-[17px] font-semibold duration-150 ease-linear cursor-pointer bg-highlighte shadow-md shadow-[#ffffff7b]'>Contact me</div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Naveber