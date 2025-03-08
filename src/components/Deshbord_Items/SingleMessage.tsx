import React from 'react'
import { MdDelete } from 'react-icons/md'
import { toast } from 'react-toastify'

const SingleMessage = ({loading,message}:{loading:any,message:any}) => {



    const deleteMessageHandler = async () => {
        try {
            loading(true)
            setTimeout(() => {
                message
                loading(false)
            }, 3000);
            toast.success("Your work in done")
        } catch (error) {
            loading(false)
        }
    }


  return (
    <div className='w-full font-semibold py-4 px-4 rounded-xl shadow-[0px_0px_5px] bg-[#25252533] flex mb-4'>
        <div className='w-full h-full'>
            <h4>Name: {" "}
                <span className='font-normal'>{message.name}</span>
            </h4>
            <h4>Email: {" "}
                <span className='font-normal'>{message.email}</span>
            </h4>
            <h4>Message: {" "}
                <span className='font-normal'>{message.message}</span>
            </h4>
        </div>
        <div className='flex items-center text-3xl'>
            <MdDelete
                onClick={()=>deleteMessageHandler()} 
                className='hover:text-red-600 active:scale-105 cursor-pointer duration-150 ease-in-out'/>
        </div>
    </div>
  )
}

export default SingleMessage