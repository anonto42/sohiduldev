"use state"
import Loading from '@/app/loading';
import Image from 'next/image';
import React, { useState } from 'react'
import Loader from '../Loader/Loader';
import { toast } from 'react-toastify';

const AddProject = () => {
    const [file,setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string>();
    const [title,setTitle] = useState<string>("");
    const [liveLink,setLiveLink] = useState<string>("");
    const [loading,setLoading] = useState<boolean>(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const selectedFile = e.target.files[0];
            setFile(e.target.files[0]);
            const objectURL = URL.createObjectURL(selectedFile);
            setPreview(objectURL);
        }
    };

    const handleUpload = ()=>{
        try {
            if (!file && title.trim() === "" && liveLink.trim() === "" && liveLink.trim() === "") {
                return toast.warning("all fields are required!");
            }
            const data = {
                frontImage: file,
                name: title.trim(),
                liveLink: liveLink.trim()
            } 

            
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <section className='w-full h-svh'>
        <div className='p-6'>


            <div className='w-[700px] h-[650px] rounded-lg bg-[#00000042] shadow-[0px_0px_4px] relative mx-auto overflow-clip'>
                { loading && <Loader className='' />}
                <div >
                    <div>
                        <label htmlFor='fileSilectior'>
                            <div className='w-full h-[400px] p-[100px] relative mx-auto cursor-pointer shadow-sm shadow-[#ffffff3f]'>
                                {
                                    preview ? (
                                        <Image
                                            src={preview} // Use the preview URL
                                            alt="file preview"
                                            fill
                                            quality={60}
                                            className="rounded-md -cover"
                                        />
                                    ) : (
                                    <p className="text-gray-500 flex flex-col justify-center items-center text-3xl pt-[70px]">
                                        No Image Selected
                                        <span className='text-xl'>Click to select the image</span>
                                    </p>
                                    
                                )}
                            </div>
                        </label>
                        <input 
                            className='hidden'
                            onChange={ handleFileChange }
                            type="file" 
                            id='fileSilectior'
                            />
                    </div>
                    <div className='flex flex-col w-full h-auto gap-4 absolute bottom-3'>
                        <input 
                            className='w-[80%] h-[50px] mx-auto rounded-md bg-[#0605290e] shadow-white shadow-[0px_0px_10px] px-4 text-lg'
                            placeholder='Inter the title..'
                            type="text" 
                            name="" 
                            id=""
                            onChange={ e => setTitle(e.target.value)}
                        />
                        <input 
                            className='w-[80%] h-[50px] mx-auto rounded-md bg-[#0605290e] shadow-white shadow-[0px_0px_10px] px-4 text-lg'
                            placeholder='Give the Live link'
                            type="text" 
                            name="" 
                            id="" 
                            onChange={ e => setTitle(e.target.value)}
                        />
                    <button 
                        onClick={handleUpload}
                        className='bg-blue-500 w-[110px] h-[40px] mx-auto rounded-md active:scale-95 duration-100 ease-in-out'
                        >Upload</button>
                    </div>
                </div>
            </div>


        </div>
    </section>
  )
}

export default AddProject