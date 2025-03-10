"use client"
import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section className='w-full py-2 md:py-8 md:mt-4'>
        <div className='w-full flex justify-center text-center'>
          <motion.div
            initial={{
              opacity:0,
              y:20
            }}
            animate={{
              opacity:1,
              y:0
            }}
            transition={{
              duration:1,
              ease:"linear"
            }}
          >
            <div className=' bg-gradient-to-br from-white to-highlighte bg-clip-text text-transparent'>
                <h1 className='text-2xl md:text-3xl font-bold'>I will develop custom software,</h1>
                <h4 className='text-xl md:text-2xl font-semibold'>precisely perfectly built to fit your needs.</h4>
            </div>
          </motion.div>
        </div>
    </section>
  )
}

export default Services