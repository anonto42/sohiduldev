import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsEmojiSunglassesFill } from 'react-icons/bs';

const Introduction = () => {

  // const currentDate:Date = new Date();
  
  // const june2022:Date = new Date(2023, 1, 1);
  
  // const differenceInMs:number = currentDate - june2022;
  
  // const differenceInYears = differenceInMs / (1000 * 60 * 60 * 24 * 365.25);
  
  // const differenceInYearsRounded = differenceInYears.toFixed(1);

  return (
    <div className='h-auto w-full mt-7 md:mt-16'>
      <div className='w-[290px] h-[290px] sm:h-[350px] sm:w-[350px] md:hidden mx-auto border-[3px] border-[#80b4f4] rounded-full flex justify-center items-center py-4 overflow-hidden bg-[#99afd886] relative'>
        <Image 
          src={"/images/Profile.png"} 
          width={290}
          height={290}
          alt="#" 
          /> 
      </div>
      <div className='text-white mt-3 md:flex justify-between'>
        <div className='mb-3 md:w-[350px] lg:min-w-[400px] md:max-w-[600px] md:mt-[110px]'>
          <h3 className='text-[25px] gsap_animation font-semibold'>Hello, My Name Is</h3>
          <h1 className='text-[30px] gsap_animation font-bold'>Sohidul Islam Ananto</h1>
          <h2 className='text-[27px] gsap_animation gsap_animation font-bold text-[#80b4f4]'>I AM Web Developer</h2>
          <p className='gsap_animation'>I'm a MERN stack developer passionate about creating error-free, user-friendly websites that offer an excellent user experience. Coding is my craft, and I strive for perfection in every line. </p>
          <Link href="/contact">
            <button id='' className='animation_up_down1 hover:bg-[#23232300] hover:border-[1px] bg-[#80b4f4] duration-300 ease-in-out hover:px- hover:text-white font-semibold text-[#1A1A33] px-1 py-2 w-[95px] rounded-xl text-[16px] shadow-md shadow-[#ffffff7b] my-[35px]'>Contact</button>
          </Link>
        </div>
        <div>
          <div className='image hidden md:block'>
            <div className='w-[500px] h-[500px] rounded-full border-[3px] border-[#80b4f4] flex justify-center overflow-hidden relative bg-[#99afd886]'>
              <Image
                src="/images/Profile.png" 
                loading='lazy'
                className='mr-8' 
                width={400}
                height={300}
                alt="" />
              <BsEmojiSunglassesFill className=' hidden absolute top-[290px] left-[140px] border-2 shadow-md border-[#80b4f4] text-[#80b4f4] text-[40px] bg-white rounded-full' />
            </div>
          </div>


          {/* <div id='' className='animation_up_down animation_up_down01 flex justify-center items-center w-[95%] h-[80px] border-[#80b4f4] border-[3px] rounded-[30px] md:absolute md:top-[450px] md:w-[100px] md:block md:-ml-[40px] md:px-8 md:bg-[#18182E] md:-mt-12 relative'>
            <h1 className='flex justify-center font-bold md:text-[17px] md:mt-[10px] mr-2 md:mr-0'>{differenceInYearsRounded}+</h1>
            <p className='font-semibold italic md:text-[10px] md:absolute left-[21px]'>Years of Experience</p>
          </div> */}


          {/* <div id='' className='animation_up_down animation_up_down2 flex justify-center items-center w-[95%] mt-3 h-[80px] border-[#80b4f4] border-[3px] rounded-[30px] md:absolute md:top-[450px] md:w-[100px] md:block md:ml-[105px] md:px-8 md:bg-[#18182E] md:mt-16 relative'>
            <h1 className='flex justify-center font-bold md:text-[17px] md:mt-[10px] mr-2 md:mr-0'>{"9"}+</h1>
            <p className='font-semibold italic md:text-[10px] md:absolute left-[21px] bottom-3'>Completed Projects</p>
          </div> */}


        </div>
      </div>
    </div>
  )
}

export default Introduction