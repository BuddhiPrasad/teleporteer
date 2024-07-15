import React from 'react'
import SubPageHero from '@/components/SubPageHero'
import Image from "next/image";

import HeroImage from '@/public/assets/About Us Hero.png'
import WrapperContainer from '@/components/WrapperContainer';
import Navbar from '@/components/Navbar';

const AboutUs = () => {
  return (
  <>
    <SubPageHero 
      bgImage =  {HeroImage}
      subDestription='Travel to the any corner of the world, without going around in circles' 
      mainTitle='We create unique vacations' 
      subTitle='Around the World'
    />
    
      <WrapperContainer>
      <div className=' flex justify-between'>
        <p className='font-light lg:text-[18px] font-[#4D4D4D] pt-3'>Home / About Us</p>
        <p className='font-light lg:text-[18px] font-[#4D4D4D] pt-3'>Home / About Us</p>
      </div>

      <div className='items-center text-center'>
        <h1 className='text-2xl lg:text-[40px] font=[#4D4D4D] pt-[30px]'>About Us</h1>
        <p className='font-light lg:text-[18px] font-[#4D4D4D] pt-3'>Discover Your Favorite Place with Us</p>
      </div>
   

      </WrapperContainer>

  </>
   
  )
}

export default AboutUs
