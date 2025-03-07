import React from 'react'

const Form = () => {
  return (
    <section>
        <div>
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