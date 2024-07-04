import React from 'react'
import Image from 'next/image';


import Heroi from '../public/assets/Hero.png'


const Hero = () => {
  return (

    <div className='flex items-center'>
        <Image src={Heroi} alt='Hero' className='w-full object-cover'/>
      
        <div className=' absolute px-[20px] lg:container lg:px-20'>
          <p className=' text-white text-sm'>Discover Your Favorite Place with Us </p>
          <h1 className='text-3xl  text-[#00B6FF] font-medium lg:text-6xl'>Go ahead and </h1>
          <h1 className='text-2xl  text-white font-medium lg:text-5xl'>teleport yourself </h1>

          <button className=' bg-[#00B6FF] py-3 px-8  text-white rounded-full lg:w-fit lg:px-12 lg:mt-10'>Discover</button>
        </div>
    </div>

    
  )
}

export default Hero
