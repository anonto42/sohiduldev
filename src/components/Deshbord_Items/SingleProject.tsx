"use client"
import Image from 'next/image'
import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const SingleProject = ({project,loading,refresh}:{refresh:any,loading:any,project:any}) => {

    const deleteProject = async () => {
        try {
            loading(true)
            
            const { data } = await axios.delete(`/api/admin/project?id=${project._id.trim()}`)
            toast.success(data.message)

            refresh()
    
            loading(false)
        } catch (error:any) {
            loading(false)
            toast.error(error.response.data.message)
            console.log(error.response.data)
        }
    }
    const editeProject = async () => {}

  return (
    <div className='bg-[#31313171] h-[255px] rounded-lg shadow-[0px_0px_5px] p-3'>
        <div className='w-full h-[120px] relative rounded-md bg-gray-500/60'>
            <Image 
                src={project.frontImage} 
                alt={project.title}
                blurDataURL="/images/defualt-blur-image.webp"
                placeholder='blur'
                fill
                objectFit='contain'
                loading='lazy'                
                quality={80}
                className='object-cover'
            />
        </div>
        <h1 className='mt-2 text-lg font-light'>
        {project.title.length > 15 ? project.title.slice(0, 15) + '...' : project.title}
            
        </h1>
        <h3 className='mb-2 mt-1 text-sm'>
            {project.liveLink.length > 25 ? project.liveLink.slice(0, 25) + '...' : project.liveLink}
        </h3>
        <div className='w-full flex gap-4 justify-between'>
            <button 
                onClick={()=>deleteProject()}
                className='py-2 px-5 rounded-md bg-red-700 active:scale-[1.02] ease-in-out duration-100'>Delete</button>
            <button 
                onClick={()=>editeProject()}
                className='py-2 px-5 rounded-md bg-blue-700 active:scale-[1.02] ease-in-out duration-100'>Edit</button>
        </div>
    </div>
  )
}

export default SingleProject