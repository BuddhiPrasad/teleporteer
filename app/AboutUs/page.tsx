import React from 'react'
import SubPageHero from '@/components/SubPageHero'
import Image from "next/image";

import HeroImage from '@/public/assets/About Us Hero.png'
import HeroImageMobile from '@/public/assets/AboutUs Hero -Mobile.png'
import Home from '@/public/assets/Home.svg'
import Feature01 from '@/public/assets/AboutUs Feature 01.svg'
import Feature02 from '@/public/assets/AboutUs Feature 02.svg'
import Feature03 from '@/public/assets/AboutUs Feature 03.svg'
import Feature04 from '@/public/assets/AboutUs Feature 04.svg'

import WrapperContainer from '@/components/WrapperContainer';
import Navbar from '@/components/Navbar';

const AboutUs = () => {
  return (
  <>
    <SubPageHero 
      bgImage =  {HeroImage}
      bgImage2={HeroImageMobile}
      subDestription='Travel to the any corner of the world, without going around in circles' 
      mainTitle='We create unique vacations' 
      subTitle='Around the World'
    />
    
      <WrapperContainer>
      <div className='flex items-center gap-x-2 pt-3'>
        <Image src={Home} alt='home' className='w-4 h-4'/>
        <p className='font-light font-[#4D4D4D]'>Home / 
          <span className='font-semibold'>About Us</span></p>
      </div>

      <div className='items-center text-center pt-[30px]'>
        <h1 className='text-2xl font=[#4D4D4D]'>About Us</h1>
        <p className='font-light font-[#4D4D4D]'>Discover Your Favorite Place with Us</p>
      </div>

      {/*First Feature */}

      <div className='flex flex-col gap-x-[60px] md:flex-row'>
        <div className='w-full justify-center'>
          <Image src={Feature01} alt='Feature01'/>
        </div>

        <div className=' pt-5 lg:pt-[110px] lg:pb-[110px]'>
          <h1 className='text-xl font-semibold text-center'>What is Teleporteer?</h1>
          <div className='text-justify pt-4'>
            <p>It is a long established fact that a reader will be distracted by 
            the readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has a more-or-less normal<br/><br/>
            distribution of letters, as opposed to using 'Content here, content here', 
            making it look like readable <br/><br/>
            English. Many desktop publishing packages and web page editors now use 
            Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
            will uncover many web sites still in their infancy. Various versions have 
            evolved over the years, sometimes by accident...</p>
          </div>

          </div>
         </div>

        {/*Secound Feature */}

        <div className='flex flex-col gap-x-[60px] sm:flex-row-reverse'>
        <div className='w-full justify-center'>
          <Image src={Feature02} alt='Feature01'/>
        </div>

        <div className=' pt-5 lg:pt-[110px] lg:pb-[110px]'>
          <h1 className='text-xl font-semibold text-center'>Who are we?</h1>
          <div className='text-justify pt-4'>
            <p>It is a long established fact that a reader will be distracted by 
            the readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has a more-or-less normal<br/><br/>
            distribution of letters, as opposed to using 'Content here, content here', 
            making it look like readable <br/><br/>
            English. Many desktop publishing packages and web page editors now use 
            Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
            will uncover many web sites still in their infancy. Various versions have 
            evolved over the years, sometimes by accident...</p>
          </div>

          </div>
         </div>


      {/*Third Feature */}

      <div className='flex flex-col gap-x-[60px] md:flex-row'>
        <div className='w-full justify-center'>
          <Image src={Feature03} alt='Feature01'/>
        </div>

        <div className=' pt-5 lg:pt-[110px] lg:pb-[110px]'>
          <h1 className='text-xl font-semibold text-center'>Our Mobile App</h1>
          <div className='text-justify pt-4'>
            <p>It is a long established fact that a reader will be distracted by 
            the readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has a more-or-less normal<br/><br/>
            distribution of letters, as opposed to using 'Content here, content here', 
            making it look like readable <br/><br/>
            English. Many desktop publishing packages and web page editors now use 
            Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
            will uncover many web sites still in their infancy. Various versions have 
            evolved over the years, sometimes by accident...</p>
          </div>

          </div>
         </div>

         
        {/*forth Feature */}


        <div className='flex flex-col gap-x-[60px] sm:flex-row-reverse'>
        <div className='w-full justify-center'>
          <Image src={Feature04} alt='Feature01'/>
        </div>

        <div className=' pt-5 lg:pt-[110px] lg:pb-[110px]'>
          <h1 className='text-xl font-semibold text-center'>Responsible</h1>
          <div className='text-justify pt-4'>
            <p>It is a long established fact that a reader will be distracted by 
            the readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has a more-or-less normal<br/><br/>
            distribution of letters, as opposed to using 'Content here, content here', 
            making it look like readable <br/><br/>
            English. Many desktop publishing packages and web page editors now use 
            Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
            will uncover many web sites still in their infancy. Various versions have 
            evolved over the years, sometimes by accident...</p>
          </div>

          </div>
         </div>

      </WrapperContainer>

  </>
   
  )
}

export default AboutUs
