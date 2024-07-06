import React from 'react'
import SubPageHero from './SubPageHero'
import Image from "next/image";

import HeroImage from '../public/assets/Tour Hero.png'

const Tours = () => {
  return (
  <>
    <SubPageHero 
      bgImage =  {HeroImage}
      subDestription='Travel to the any corner of the world, without going around in circles' 
      mainTitle='Make Your Tour' 
      subTitle='Amazing With Us'
    />
    
    <div className='px-[20px] lg:px-20'>
      <div>
        <p className='font-light lg:text-[18px] font-[#4D4D4D] pt-3'>Home / Tour</p>
      </div>

      <div className='items-center text-center'>
        <h1 className='text-2xl lg:text-[40px] font=[#4D4D4D] pt-[30px]'>Your journey starts here</h1>
        <p className='font-light lg:text-[18px] font-[#4D4D4D] pt-3'>Discover Your Favorite Place with Us</p>
      </div>
    </div>
    
  </>
   
  )
}

export default Tours
