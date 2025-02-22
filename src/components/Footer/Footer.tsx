import React from 'react'
import { FaFacebookSquare, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-ful h-[150px] text-center bg-[#1c222a00] md:flex justify-around items-center'>
      <div className='flex justify-center pt-5'>
        <div className='round'>
          <a target='blnk' href="https://www.linkedin.com/in/sohidul-islam-ananto/">
            <FaLinkedin />
          </a>
        </div>
        <div className='round mx-8'>
          <a target='blnk' href="https://github.com/anonto42">
            <FaGithub />
          </a>
        </div>
        <div className='round'>
          <a target='blnk' href="https://www.facebook.com/sohidul.islam.ananto.33">
            <FaFacebookSquare />
          </a>
        </div>
      </div>
      <div className='pt-4'>
        <h5 className='text-[#80b4f4]'>© All Rights Reserved 2024 - 2027 | Sohidul Islam Ananto</h5>
      </div>
    </div>
  )
}

export default Footer