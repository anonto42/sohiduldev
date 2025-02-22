import React from 'react'
import { FaFacebookSquare, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full md:h-[100px] h-[150px] text-center bg-slate100 flex justify-center items-center'>
      <div className='md:flex items-center justify-around w-full'>
        <div className='flex justify-center pt-5 text-3xl items-center'>
          <div className='round drop-shadow-[0_0_12px_rgba(255,255,255,1)]'>
            <a target='blnk' href="https://www.linkedin.com/in/sohidul-islam-ananto/">
              <FaLinkedin />
            </a>
          </div>
          <div className='round mx-8 drop-shadow-[0_0_12px_rgba(255,255,255,1)]'>
            <a target='blnk' href="https://github.com/anonto42">
              <FaGithub />
            </a>
          </div>
        <div className='round drop-shadow-[0_0_12px_rgba(255,255,255,1)]'>
          <a target='blnk' href="https://www.facebook.com/sohidul.islam.ananto.33">
            <FaFacebookSquare />
          </a>
        </div>
        </div>
        <div className='pt-4'>
          <h5 className='text-[#80b4f4]'>© All Rights Reserved 2024 - 2027 | Sohidul Islam Ananto</h5>
        </div> 
      </div>
    </div>
  )
}

export default Footer