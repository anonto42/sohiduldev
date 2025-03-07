import { AboutCartType } from '@/app/(general)/about/page'
import Image from 'next/image'
import React from 'react'

const Compo = ({item,index}:{ item: AboutCartType, index: number}) => {
  return (
    <div 
        className='py-4 bg-[#071e492f] rounded-md shadow-md shadow-[#00000077] hover:shadow-[#000000da] hover:scale-[1.025] duration-100 ease-linear overflow-hidden'
        key={index}
    >
      <div className='w-[60px] h-[60px] relative mx-auto'>
        <Image
          src={item.url}
          alt='Icon'
          loading='lazy'
          quality={60}
          placeholder='blur'
          blurDataURL='/images/defualt-blur-image.webp'
          objectFit='contain'
          fill
        />
      </div>
      <h1 className='text-base md:text-lg lg:text-xl my-2 text-center'>{item.name}</h1>
    </div>
  )
}

export default Compo