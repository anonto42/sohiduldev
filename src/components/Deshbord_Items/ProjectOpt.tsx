import React, { useEffect, useState } from 'react'
import SingleProject from './SingleProject'
import axios from 'axios';
import Loader from '../Loader/Loader';

const ProjectOpt = ({refresh,reducer}:{refresh:any,reducer:any}) => {
  const [loading,setLoading] = useState<boolean>(true)
  const [projects,setProjects] = useState([]);

    useEffect(()=>{
        ;(async()=>{
            const { data } = await axios.get("/api/projects")
            setProjects(data.data)
            if(data.success) setLoading(false)
        })();
    },[reducer])

  return (
    <section className='w-full h-svh'>
        { loading && <Loader className={"rounded-none"} />}
      <div className='p-6 w-full h-full overflow-y-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 grid-rows-1 md:grid-rows-3'>
        {
          projects.map((item,index)=><SingleProject refresh={refresh} loading={setLoading} project={item} key={index} />)
        }
      </div>
    </section>
  )
}

export default ProjectOpt