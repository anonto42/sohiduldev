import React from 'react'
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Form = () => {
  return (
    <section className='w-full h-auto mb-9 text-textColor md:text-center'>
        {/* contact */}
       <div className='mb-6'>
        <div className='text-center'>
          <h1 className='text-[38px] font-semibold'>CONTACT</h1>
          <h2 className='text-[20px] font-semibold text-highlighte -mt-3'>Let&apos;s Talk About Business</h2>
        </div>
       </div>
       {/* address info */}
       <div>
        <div className='mb-4 md:flex md:justify-center'>
          <div className='flex md:justify-center items-center text-xl font-semibold'>
            <FaLocationDot className='mr-2 text-highlighte' />
            <h1>Address :</h1>
          </div>
          <p className='text-sm font-thin md:mt-2 md:ml-2'>Narayanganj,Siddhirgonj</p>
        </div>
        <div className='mb-4 md:flex md:justify-center'>
          <div className='flex md:justify-center items-center text-xl font-semibold'>
            <MdEmail className='mr-2 text-highlighte' />
            <h1>Email :</h1>
          </div>
          <p className='text-sm font-thin md:mt-2 md:ml-2'>anontom90@gmail.com</p>
        </div>
       </div>
       {/* from */}
       <div >
        <div className='w-full mb-4'>
          <h1 className='font-thin'>Your name</h1>
          <input placeholder='Your Name' type="text" className='w-full md:w-[700px] outline-none h-[60px] border bg-[#141427] rounded-full px-4 mt-3 placeholder:font-serif'/>
        </div>
        <div className='w-full mb-4'>
          <h1 className='font-thin'>Your email</h1>
          <input placeholder='Your Email' type="email" className='w-full md:w-[700px] outline-none h-[60px] border bg-[#141427] rounded-full px-4 mt-3 placeholder:font-serif'/>
        </div>
        <div className='w-full mb-4'>
          <h1 className='font-thin'>What do you want to do</h1>
          <textarea rows={7} cols={40} placeholder='Write here...' className='w-full outline-none md:w-[700px] py-2 border bg-[#141427] rounded-xl px-4 mt-3 placeholder:font-serif'/>
        </div>
        <button className='bg-highlighte text-[#141427] font-bold px-5 py-4 rounded-xl text-md mb-4 active:scale-105 duration-150 ease-in-out'>Send Message</button>
       </div>
    </section>
  )
}

export default Form