import React from 'react'
import Image from 'next/image';


import Heroi from '../public/assets/Hero.png'


const Hero = () => {
  return (

    <div>
      <div className='relative flex h-full w-full justify-center'>
            <Image src={Heroi} alt='Hero' className='min-h-[300px] w-full object-cover lg:h-auto'/>
            <div className='absolute pt-8 flex w-full flex-col px-[20px] lg:container lg:px-20 mx-auto'>
              <p className='pt-5  text-white'>Discover Your Favorite Place with Us </p>
              <h1 className='text-4xl text-[#00B6FF] font-semibold'>Go ahead and </h1>
              <h1 className='text-2xl text-white'>teleport yourself </h1>
              <div className='pt-10'>
                  <button className=' bg-[#00B6FF] w-1/2 py-4 px-8 text-white rounded-xl lg:w-fit'>Discover</button>
              </div>
              
            </div>
      </div>

      
    
    </div>
  )
}

export default Hero
