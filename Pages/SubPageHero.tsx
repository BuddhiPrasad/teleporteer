import React from 'react'
import Image from 'next/image';


type HeaderProps = {
    bgImage: {};
    subDestription: string;
    mainTitle: string;
    subTitle: string;
  }

const SubPageHero = ({bgImage,subDestription, mainTitle, subTitle}: HeaderProps) => {
  return (
    <div className='flex items-center'>
        <Image src={bgImage} alt='Hero' className='w-full object-cover'/>
        <div className=' absolute px-[20px] lg:px-20 w-full'>
          <p className='font-light lg:text-[18px] font-[#4D4D4D] pt-3 text-white text-sm'>{subDestription}</p>
          <h1 className='text-3xl  text-[#00B6FF] font-medium lg:text-6xl'>{mainTitle}</h1>
          <h1 className='text-2xl  text-white font-medium lg:text-5xl'>{subTitle}</h1>
        </div>
    </div>
  )
}

export default SubPageHero
