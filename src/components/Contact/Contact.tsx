import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import Form from './Form';

const Contact = () => {
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
       <Form />
      </section>
  )
}

export default Contact