import ProjectCard from '@/components/Card/ProjectCard';
import ProjectModel, { ProjectSchemaType } from '@/model/project'
import React from 'react'

const ProjectPage = async () => {
  const projects: ProjectSchemaType[] = await ProjectModel.find({});
  return (
    <div>
      <section className='w-full text-center text-2xl lg:text-3xl font-semibold py-6 md:py-10'>
        <h1>Projects I’ve Built</h1>
      </section>
      <section className='w-full h-auto flex justify-center flex-wrap mb-6'>
        {
          projects.map(({frontImage,liveLink,title},index)=>{                
          return <ProjectCard key={index} maxIndex={1} title={title} frontImage={frontImage} liveLink={liveLink} />
          })
        }
      </section>
    </div>
  )
}

export default ProjectPage