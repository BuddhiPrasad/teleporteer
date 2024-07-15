import React from 'react'
import SubPageHero from '@/components/SubPageHero'
import Image from "next/image";

import HeroImage from '@/public/assets/News Hero.png'

const News = () => {
  return (
  <>
    <SubPageHero 
      bgImage =  {HeroImage}
      subDestription='The definitive guide for uncertain world' 
      mainTitle="Don't listen to what" 
      subTitle='they say, Go and see'
    />
    
    <div className='px-[20px] lg:px-20'>
      <div>
        <p className='font-light lg:text-[18px] font-[#4D4D4D] pt-3'>Home / News</p>
      </div>

      <div className='items-center text-center'>
        <h1 className='text-2xl lg:text-[40px] font=[#4D4D4D] pt-[30px]'>Travel News Stories</h1>
        <p className='font-light lg:text-[18px] font-[#4D4D4D] pt-3'>Discover Your Favorite Place with Us</p>
      </div>
    </div>
    
  </>
   
  )
}

export default News
