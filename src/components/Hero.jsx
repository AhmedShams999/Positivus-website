import React from 'react'
import { motion } from 'framer-motion';

function Hero() {
  return (
    <div className='flex items-center font-header mt-5'>
      <motion.div 
        className='flex-1 flex flex-col justify-center items-start gap-5'
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className='font-semibold text-4xl max-w-full md:text-6xl md:leading-[4rem] md:max-w-[32rem]'>Navigating the digital landscape for success</h1>
        <motion.img 
          src="./images/hero-image.png" 
          alt="hero-img" 
          className='w-[700px] md:hidden'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }} 
          
          />
        <p className='max-w-[25rem]'>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
        <div className='relative group w-full'>
          <button className='bg-secondry w-full h-16 rounded-lg text-light_gray md:w-52 md:h-14'>Book a consultation</button>
          <span className='hidden md:block absolute left-[210px] top-0 w-0 h-[1px] rotate-[-28deg] bg-secondry transition-all group-hover:w-14'></span>
          <span className='hidden md:block absolute left-[215px] top-[50%] w-0 h-[1px] rotate-[0] bg-secondry transition-all group-hover:w-14'></span>
          <span className='hidden md:block absolute left-[210px] top-[100%] w-0 h-[1px] rotate-[28deg] bg-secondry transition-all group-hover:w-14'></span>
        </div>
      </motion.div>

      <div className='flex-1 justify-end hidden md:block '>
          <motion.img 
            src="./images/hero-image.png" 
            alt="hero-img" 
            className='w-[700px]' 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }} 
            />
      </div>
    </div>
  )
}

export default Hero
