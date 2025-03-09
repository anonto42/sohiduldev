import React, { useEffect, useState } from 'react'
import SingleProject from './SingleProject'
import axios from 'axios';
import Loader from '../Loader/Loader';

export interface ProjecInterface{
  title: string;
  liveLink: string;
  frontImage: string;
}

const ProjectOpt = () => {
  const [loading,setLoading] = useState(true)
  const [projects,setProjects] = useState([]);

    useEffect(()=>{
        ;(async()=>{
            const { data } = await axios.get("/api/projects")
            setProjects(data.data)
            if(data.success) setLoading(false)
        })();
    },[])

  return (
    <section className='w-full h-svh'>
        { loading && <Loader className={"rounded-none"} />}
      <div className='p-6 w-full h-full overflow-y-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 grid-rows-1 md:grid-rows-3'>
        {
          projects.map((item,index)=><SingleProject project={item} key={index} />)
        }
      </div>
    </section>
  )
}

export default ProjectOpt