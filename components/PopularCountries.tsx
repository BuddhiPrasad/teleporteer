import Image from 'next/image'
import React from 'react'


import SriLanka from '../public/assets/Sri Lanka.jpg'
import Australia from '../public/assets/Australia.png'
import France from '../public/assets/France.png'
import UnitedKingdom from '../public/assets/United Kingdom.png'
import SubPageHero from '@/components/SubPageHero'
import WrapperContainer from './WrapperContainer'

const PopularCountries = () => {
  return (
<>
<WrapperContainer>


    <div className='items-center text-center'>
        <h1 className='text-2xl lg:text-[40px] font=[#4D4D4D] pt-[30px]'>Popular Countries</h1>
        <p className='font-light lg:text-[18px] font-[#4D4D4D] pt-3'>Discover Your Favorite Place with Us</p>
    </div>
   
    <div className=' grid lg:grid-cols-4 md:grid-cols-3 gap-3 pt-12'>
        {/*card 01*/}
        <div className='relative max-w-xs overflow-hidden rounded-2xl shadow-lg group'>
            <Image src={SriLanka} alt='Card1' className='transition-transform group-hover:scale-100 duration-200'/>
            <div className='absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent'>
                <div className='text-white p-4 bg-black/60 w-full'>
                <h3 className='text-2xl font-bold mb-2'>Sri Lanka</h3>
                <p>24 Tours</p>
                </div>
            </div>
        </div>


        {/*card 02*/}
        <div className='relative max-w-xs overflow-hidden rounded-2xl shadow-lg group'>
            <Image src={Australia} alt='Card1' className='transition-transform group-hover:scale-100 duration-200'/>
            <div className='absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent'>
                <div className='text-white p-4 bg-black/60 w-full'>
                <h3 className='text-2xl font-bold mb-2'>Australia</h3>
                <p>06 Tours</p>
                </div>
            </div>
        </div>

        {/*card 03*/}
        <div className='relative max-w-xs overflow-hidden rounded-2xl shadow-lg group'>
            <Image src={France} alt='Card1' className='transition-transform group-hover:scale-100 duration-200'/>
            <div className='absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent'>
                <div className='text-white p-4 bg-black/60 w-full'>
                <h3 className='text-2xl font-bold mb-2'>France</h3>
                <p>104 Tours</p>
                </div>
            </div>
        </div>

        {/*card 04*/}
        <div className='relative max-w-xs overflow-hidden rounded-2xl shadow-lg group'>
            <Image src={UnitedKingdom} alt='Card1' className='transition-transform group-hover:scale-100 duration-200'/>
            <div className='absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent'>
                <div className='text-white p-4 bg-black/60 w-full'>
                <h3 className='text-2xl font-bold mb-2'>United Kingdom</h3>
                <p>59 Tours</p>
                </div>
            </div>
        </div>

    </div>


    </WrapperContainer>
</>
    
  )
}

export default PopularCountries
