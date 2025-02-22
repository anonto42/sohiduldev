import React from 'react';
import ProjectCard from '../Card/ProjectCard';

const Section = () => {

    const projects: any[] = [];

  return (
    <div className='min-h-[70vh] w-full'>
        <div className='flex justify-center items-center my-8 md:mb-[80px] underline text-highlighte md:my-5 text-[30px] font-semibold'>
          <h1>Projects</h1>
        </div>
        <div className='w-full h-auto flex justify-center flex-wrap'>
            {
              projects.length != 0 ?(
               projects.map((e,i) =>
                <ProjectCard key={i}   title={e.title} imgUrl={e.frontImage} liveLink={e.liveLink} repoLink={e.sorceCode} />
              )):(
              <>
                <ProjectCard liveLink={""} title='This will be the name' imgUrl='/images/Profile.png' repoLink='' />
                <ProjectCard liveLink={""} title='This will be the name' imgUrl='/images/Profile.png' repoLink='' />
                <ProjectCard liveLink={""} title='This will be the name' imgUrl='/images/Profile.png' repoLink='' />
                <ProjectCard liveLink={""} title='This will be the name' imgUrl='/images/Profile.png' repoLink='' />
                <ProjectCard liveLink={""} title='This will be the name' imgUrl='/images/Profile.png' repoLink='' />
              </>)
            }
        </div>
    </div>
  )
}

export default Section