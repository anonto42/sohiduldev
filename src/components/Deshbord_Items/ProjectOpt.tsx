import React from 'react'
import SingleProject from './SingleProject'

export interface ProjecInterface{
  title: string;
  liveLink: string;
  frontImage: string;
}

const ProjectOpt = () => {

  const projects: ProjecInterface[] = [
    {title:"Project",liveLink:"...",frontImage:"lll"},
    {title:"Project",liveLink:"...",frontImage:"lll"},
    {title:"Project",liveLink:"...",frontImage:"lll"},
    {title:"Project",liveLink:"...",frontImage:"lll"},
    {title:"Project",liveLink:"...",frontImage:"lll"},
    {title:"Project",liveLink:"...",frontImage:"lll"},
    {title:"Project",liveLink:"...",frontImage:"lll"},
    {title:"Project",liveLink:"...",frontImage:"lll"},
    {title:"Project",liveLink:"...",frontImage:"lll"},
    {title:"Project",liveLink:"...",frontImage:"lll"},
    {title:"Project",liveLink:"...",frontImage:"lll"},
  ]

  return (
    <section className='w-full h-svh'>
      <div className='p-6 w-full h-full overflow-y-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6'>
        {
          projects.map((item,index)=><SingleProject project={item} key={index} />)
        }
      </div>
    </section>
  )
}

export default ProjectOpt