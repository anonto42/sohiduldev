"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

interface Project {
    frontImage: string;
    title: string;
    liveLink: string;
    sorceCode: string;
    index: number;
}

const ProjectCard = ({frontImage, liveLink, sorceCode, title="Loading...", index}: Project ) => {
    const [hover,setHover] = useState(false);

  return (
    <div
        className={`border-[#1C222A] border-[3px] mb-[50px] w-full md:w-[380px] rounded-2xl shadow-xl px-5 mr-6 ${index > 6 ? "hidden":"block"} `}>
            <div 
                className={`w-[full] md:h-[150px] scale-[1.12] rounded-lg [200px] outline-none overflow-hidden relative`}
                onMouseEnter={()=>setHover(true)}
                onMouseLeave={()=>setHover(false)} 
            >
                <div 
                    title='Open live link'
                    className={`${hover? "block":"hidden"} w-full h-full`}
                    style={{
                        backgroundImage:`url(${frontImage})`,
                        backgroundSize:"cover"
                    }}    
                >
                    <a href={liveLink}>
                        <div className='w-full h-full bg-white/60 flex justify-center items-center text-2xl text-[#111123]'>
                            <FaExternalLinkAlt />
                        </div>
                    </a>
                </div>
                <Image
                    alt="Dynamic Image"
                    src={frontImage || "/images/defualt-blur-image.webp"} // Ensure a valid URL
                    layout="responsive" // Makes it responsive
                    width={300}
                    height={200}
                    className="rounded-lg"
                    placeholder="blur"
                    blurDataURL="/images/defualt-blur-image.webp" // Works with dynamic images
                    quality={60}
                    loading='lazy'
                />
            </div>
            <div className='w-full h-[30px] mt-4 text-center text-white capitalize italic'>
                <h3 className='font-normal'>{title}</h3>
            </div>
                
        </div>
  )
}

export default ProjectCard