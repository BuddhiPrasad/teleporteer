import React from 'react'
import Image from 'next/image';
import WrapperContainer from '@/components/WrapperContainer';


type HeaderProps = {
    bgImage?: {};
    bgImage2?: {};
    subDestription: string;
    mainTitle: string;
    subTitle: string;
  }

const SubPageHero = ({bgImage,subDestription, mainTitle, subTitle,bgImage2}: HeaderProps) => {
  return (
    <>
   

<div className='w-full flex items-end  bg-black'>
<div className='w-full md:hidden'>
      <Image src={bgImage2} alt='HeroImageMobile' className='w-full '/>
  </div>
  <div className='w-full hidden md:block'>
      <Image src={bgImage} alt='HeroImage' className='w-full'/>
  </div>
  
        
      <div className='absolute w-full'>
        <WrapperContainer>
          <p className='font-light font-[#4D4D4D] pt-3 text-white text-sm'>{subDestription}</p>
          <h1 className='text-2xl md:text-[40px]  text-[#00B6FF] font-medium '>{mainTitle}</h1>
          <h1 className='text-xl md:text-[24px] text-white font-medium mb-5'>{subTitle}</h1>
        </WrapperContainer>
      </div>
       
    </div>

    </>
  )
}

export default SubPageHero
