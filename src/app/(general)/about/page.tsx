import React from 'react'
import Compo from '@/components/TecBox/Compo';

export interface AboutCartType{
  url: string;
  name: string;
  presents: number;
}

const AboutPage = () => {
  const files: AboutCartType[] = [
    {
      url:"/tecnologies/ts.webp",
      name:"TypeScript",
      presents:80
    },
    {
      url:"/tecnologies/js.webp",
      name:"JavaScript",
      presents:90
    },
    {
      url:"/tecnologies/re.webp",
      name:"React.js",
      presents:70
    },
    {
      url:"/tecnologies/njs.webp",
      name:"Node.js",
      presents:65
    },
    {
      url:"/tecnologies/g.webp",
      name:"GraphQL",
      presents:10
    },
    {
      url:"/tecnologies/nx.webp",
      name:"Next.js",
      presents:10
    },
    {
      url:"/tecnologies/r.webp",
      name:"Redux",
      presents:10
    },
    {
      url:"/tecnologies/ejs.webp",
      name:"Express.js",
      presents:10
    },
    {
      url:"/tecnologies/s.webp",
      name:"Socket.io",
      presents:10
    },
    {
      url:"/tecnologies/tl.webp",
      name:"Tailwind",
      presents:10
    },
    {
      url:"/tecnologies/fm.webp",
      name:"Framer Motion",
      presents:10
    },
    {
      url:"/tecnologies/mdb.webp",
      name:"MongoDB",
      presents:10
    },
    {
      url:"/tecnologies/fb.webp",
      name:"FireBase",
      presents:10
    },
    {
      url:"/tecnologies/gh.webp",
      name:"GitHub",
      presents:10
    },
    {
      url:"/tecnologies/bs.webp",
      name:"Bash",
      presents:10
    },
    {
      url:"/tecnologies/d.webp",
      name:"Docker",
      presents:10
    },
    {
      url:"/tecnologies/ku.webp",
      name:"Kubernetes",
      presents:10
    },
    {
      url:"/tecnologies/ng.webp",
      name:"Nginx",
      presents:10
    },
  ];
  return (
    <div>
      <section className='w-full'>
        <h1 className='flex justify-center uppercase underline font-semibold text-2xl md:text-3xl lg:text-4xl pt-6'>About me</h1>
        <p className='text-center pt-3 font-thin text-lg'>I’m a web developer and a student, always excited about creating impactful web applications. I work with technologies like JavaScript, TypeScript, React, Node.js, Next.js, and GraphQL, diving into both front-end and back-end development to craft smooth, user-friendly experiences. I’m constantly learning and growing, blending my studies with hands-on projects to build innovative solutions.</p>
      </section>

      <section className='w-full'>
        <h1 className='uppercase underline font-semibold text-xl md:text-2xl lg:text-3xl py-6 text-center'>Technologies I work with include...</h1>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-3 justify-center gap-4 md:gap-6'>

          {
            files.map((item,index)=>{
              return(
                <Compo key={index} item={item} index={index} />
              )
            })
          }

        </div>
      </section>
    </div>
  )
}

export default AboutPage