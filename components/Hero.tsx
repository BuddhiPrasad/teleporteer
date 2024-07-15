import React from 'react'
import Image from 'next/image';


import Heroi from '../public/assets/Hero.png'
import Button from './Button';
import WrapperContainer from './WrapperContainer';


const Hero = () => {
  return (

<>

<div className='w-full flex items-center'>
<Image src={Heroi} alt='Hero' className='w-full object-cover'/>
        
      <div className='absolute w-full'>
        <WrapperContainer>
        <p className=' text-white text-sm'>Discover Your Favorite Place with Us </p>
          <h1 className='text-3xl  text-[#00B6FF] font-medium lg:text-6xl'>Go ahead and </h1>
          <h1 className='text-2xl  text-white font-medium lg:text-5xl'>teleport yourself </h1>
          <Button type='button' title='Discover' variant='button-main'/>
        </WrapperContainer>
      </div>
       
    </div>

    </>
    
  )
}

export default Hero
