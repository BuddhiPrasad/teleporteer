import Image from 'next/image'
import React from 'react'

import MainImage from '../public/assets/Who we are.png'
import Button from './Button'

const Whoweare = () => {
  return (
    <div className='grid grid-rows-2 lg:grid-cols-2'>
      
      <div className='fles items-center'>
        {/* paragraph */}
        <h1 className='text-center font-medium text-2xl pt-[40px] lg:pt-[70px] lg:text-[40px] lg:text-left'>Who we are</h1>
        
        <div className='lg:text-[18px] lg:py-[24px] '>
          <p className='text-center py-[24px] lg:text-justify'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
          <p className='text-center lg:text-justify'>distribution of letters, as opposed to using 'Content here, content here', making it look like readable.</p>
          <p className='text-center py-[24px] lg:text-justify'>English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>

        <div className='flex items-center'>
          <Button type='button' title='Read More' variant='bg-[#00B6FF] text-white py-3 px-8'/>
        </div>

      </div>

      {/* Image */}
      <div className='relative'>
        <Image src={MainImage} alt='MainImage'/>
      </div>

    </div>
  )
}

export default Whoweare
