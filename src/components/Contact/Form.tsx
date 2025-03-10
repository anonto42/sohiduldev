"use client"
import React, { useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import Loader from '../Loader/Loader';
import axios from 'axios';
import { toast } from 'react-toastify';

export interface takeData {
    name: string;
    email: string;
    message: string;
}

const Form = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [text,setText] = useState("");
    const [loading,setLoading] = useState(false);

    const sendMessageHandaler = async () => {
        setLoading(true);
        try {
            const data: takeData = {name,email,message:text}
            console.log(data)
            const responce = await axios.post("/api/message", data);
            if (responce.data.success === true) {
              toast.success(responce.data.message)
            }else{
              toast.warning(responce.data.message)
            }
            setName("");
            setEmail("");
            setText("");
            setLoading(false);
        } catch (error:any) {
            setLoading(false);
            console.log(error.response.data.message);
            toast.error(error.response.data.message)
            setName("");
            setEmail("");
            setText("");
        }finally{
          setLoading(false);
        }
    }
    
  return (
    <section className='w-full h-auto mb-9 text-textColor relative md:text-center'>
        {loading && <Loader />}
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
          <input 
            value={name}
            onChange={ e => setName(e.target.value) }
            placeholder='Your Name' 
            type="text" 
            className='w-full md:w-[700px] outline-none h-[60px] border bg-[#141427] rounded-full px-4 mt-3 placeholder:font-serif'
            />
        </div>
        <div className='w-full mb-4'>
          <h1 className='font-thin'>Your email</h1>
          <input 
            value={email}
            onChange={ e => setEmail(e.target.value) }
            placeholder='Your Email' 
            type="email" 
            className='w-full md:w-[700px] outline-none h-[60px] border bg-[#141427] rounded-full px-4 mt-3 placeholder:font-serif'
          />
        </div>
        <div className='w-full mb-4'>
          <h1 className='font-thin'>Have Something on Your Mind? I'm Here to Listen!</h1>
          <textarea 
            value={text}
            onChange={ e => setText(e.target.value) }
            rows={7} 
            cols={40} 
            placeholder='Write here...' 
            className='w-full outline-none md:w-[700px] py-2 border bg-[#141427] rounded-xl px-4 mt-3 placeholder:font-serif'
          />
        </div>
        <button
            onClick={()=>sendMessageHandaler()} 
            className='bg-highlighte text-[#141427] font-bold px-5 py-4 rounded-xl text-md mb-4 active:scale-105 duration-150 ease-in-out'>Send Message</button>
       </div>
    </section>
  )
}

export default Form