import React from 'react'
import SubPageHero from '@/components/SubPageHero'
import Image from "next/image";

import HeroImage from '@/public/assets/Contact Us Hero.png'

const ContactUs = () => {
  return (
<>
    <SubPageHero 
      bgImage =  {HeroImage}
      subDestription="We'd love to hear from you" 
      mainTitle="Feel free to contact us and we will get back to you" 
      subTitle='soon as we can'
    />
    
    <div className='px-[20px] lg:px-20'>
      <div>
        <p className='font-light lg:text-[18px] font-[#4D4D4D] pt-3'>Home / Contact Us</p>
      </div>

      <div className='items-center text-center'>
        <h1 className='text-2xl lg:text-[40px] font=[#4D4D4D] pt-[30px]'>Contact Us</h1>
        <p className='font-light lg:text-[18px] font-[#4D4D4D] pt-3'>Discover Your Favorite Place with Us</p>
      </div>
    </div>
    
  </>
  )
}

export default ContactUs
