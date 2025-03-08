"use client"
import React, { useState } from 'react';
import SingleMessage from './SingleMessage';
import Loader from '../Loader/Loader';

const Messages = () => {
    const [loading,setLoading] = useState(false);
    const data =[ 
        {name:"Sohidul Islam",email:"anontom90@gmail.com",message:"What do you want to do with me i want to say that how can i help you"},
        {name:"Sohidul Islam",email:"anontom90@gmail.com",message:"What do you want to do with me i want to say that how can i help you"},
        {name:"Sohidul Islam",email:"anontom90@gmail.com",message:"What do you want to do with me i want to say that how can i help you"},
        {name:"Sohidul Islam",email:"anontom90@gmail.com",message:"What do you want to do with me i want to say that how can i help you"},
        {name:"Sohidul Islam",email:"anontom90@gmail.com",message:"What do you want to do with me i want to say that how can i help you"},
        {name:"Sohidul Islam",email:"anontom90@gmail.com",message:"What do you want to do with me i want to say that how can i help you"},
    ]

  return (
    <section className='w-full h-svh relative'>
        { loading && <Loader className={"rounded-none"} />}
        <div className='p-6 gap-4 w-full h-full overflow-y-auto'>
            {
                data.map((item,index)=><SingleMessage key={index} loading={setLoading} message={item} />)
            }
        </div>
    </section>
  )
}

export default Messages