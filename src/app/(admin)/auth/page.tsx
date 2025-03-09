import { gitHubLogin } from '@/app/actions';
import React from 'react';
import { FaGithub } from "react-icons/fa";

const page = () => {
  return (
    <div
        className='w-full min-h-svh flex justify-center items-center'
    >
        <div 
            className='w-full h-full md:h-0 py-20 md:w-[400px] bg-[#ffffff13] md:rounded-lg shadow-lg shadow-black flex justify-center items-center'
        >
            <div
                className=''
            >
                <h2
                    className='text-textColor text-3xl pb-8'
                >
                    Login with GitHub
                </h2>
                <form action={gitHubLogin}>
                    <button
                        type='submit'
                        name='action'
                        value="github"
                        className='bg-[#010409] flex items-center justify-between gap-2 py-2 px-4 rounded-lg mx-auto active:bg-[#00000096] active:scale-[1.03] duration-100 ease-in-out shadow-md hover:shadow-[#0000005b]'
                    >
                        GitHub 
                        <FaGithub />
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default page