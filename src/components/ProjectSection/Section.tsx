import React from 'react';
import ProjectCard from '../Card/ProjectCard';
import MongoConnect from '@/db/mongoDBConnent';
import ProjectModel, { ProjectSchemaType } from '@/model/project';
import Link from 'next/link';


const Section = async () => {
  ;(async()=>{
    await MongoConnect()
  })()
  const projects: ProjectSchemaType[] = await ProjectModel.find({})

  return (
    <section className='min-h-[70vh] w-full'>
        <div className='flex justify-center items-center my-8 md:mb-[80px] underline text-highlighte md:my-5 text-[30px] font-semibold'>
          <h1>Projects</h1>
        </div>
        <div className='w-full h-auto flex justify-center flex-wrap'>
            {
              projects.length != 0 ?(
               projects.map((e,i) =>
                <ProjectCard key={i} index={i} title={e.title} frontImage={e.frontImage} liveLink={e.liveLink} sorceCode={e.sorceCode} />
              )):(
                <>
                  No project found.
                </>
              )
            }
            {
              projects.length > 5 ? (<div className='w-full flex justify-center h-auto mb-10'>
                <Link href={"/projects"}>
                  <button className='text-white cursor-pointer px-5 py-2 bg-highlighte rounded-md font-medium shadow-sm hover:scale-105 duration-100 ease-in-out shadow-white'>View All.</button>
                </Link>
               </div>):(<></>)
            }
        </div>
    </section>
  )
}

export default Section