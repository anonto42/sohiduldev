import React from 'react';
import ProjectCard from '../Card/ProjectCard';
import MongoConnect from '@/db/mongoDBConnent';
import ProjectModel, { ProjectSchemaType } from '@/model/project';


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
                <ProjectCard key={i} title={e.title} frontImage={e.frontImage} liveLink={e.liveLink} sorceCode={e.sorceCode} />
              )):(
              <>
                <ProjectCard liveLink={""} title='Name...' frontImage='https://img.freepik.com/free-photo/white-bricks-wall-texture_1203-1665.jpg?t=st=1741155599~exp=1741159199~hmac=14926fc2b1f39ff67ef2d333f92454d7c4887564030f07ac072196d03e2fe214&w=996' sorceCode='' />
                <ProjectCard liveLink={""} title='Name...' frontImage='https://img.freepik.com/free-photo/white-bricks-wall-texture_1203-1665.jpg?t=st=1741155599~exp=1741159199~hmac=14926fc2b1f39ff67ef2d333f92454d7c4887564030f07ac072196d03e2fe214&w=996' sorceCode='' />
                <ProjectCard liveLink={""} title='Name...' frontImage='https://img.freepik.com/free-photo/white-bricks-wall-texture_1203-1665.jpg?t=st=1741155599~exp=1741159199~hmac=14926fc2b1f39ff67ef2d333f92454d7c4887564030f07ac072196d03e2fe214&w=996' sorceCode='' />
              </>)
            }
        </div>
    </section>
  )
}

export default Section