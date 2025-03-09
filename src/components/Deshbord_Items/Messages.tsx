"use client"
import React, { useEffect, useState } from 'react';
import SingleMessage from './SingleMessage';
import Loader from '../Loader/Loader';
import axios from 'axios';

const Messages = () => {
    const [loading,setLoading] = useState(true);
    const [messages,setMessages] = useState([]);

    useEffect(()=>{
        ;(async()=>{
            const { data } = await axios.get("/api/admin/messages")
            setMessages(data.data)
            if(data.success) setLoading(false)
        })();
    },[])

  return (
    <section className='w-full h-svh relative'>
        { loading && <Loader className={"rounded-none"} />}
        <div className='p-6 gap-4 w-[ 100% - 100px ] lg:w-full h-full overflow-y-auto'>
            {
                messages.map((item,index)=><SingleMessage key={index} loading={setLoading} message={item} />)
            }
        </div>
    </section>
  )
}

export default Messages