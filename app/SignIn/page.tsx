import Image from 'next/image'
import React from 'react'


import LoginInside from '@/public/assets/LogIn Inside.png'
import Logo from '../public/assets/Logo.svg'

import google from '@/public/assets/Google.svg'
import facebook from '@/public/assets/Facebook.svg'
import tweeter from '@/public/assets/tweeter-login.svg'


import Loginbg from '@/public/assets/LogIn BG.png'

import Button from '@/components/Button'


const page = () => {
  return (

    <div className='w-full h-screen flex justify-center items-center'>
        <Image src={Loginbg} alt='Loginbg'  className='min-h-[500px] w-full object-cover lg:h-auto'/>

        <div className='absolute flex bg-white'>

            {/*first col*/}

            <div className='hidden w-1/2 lg:block'>
                <Image src={LoginInside} alt='LoginInside' className='w-full h-full object-cover'/>
                
            </div>

            {/*secound col*/}
            <div className='flex flex-col px-5 py-6 justify-between'>   
                <div>
                    <h1 className='tex-[#454545] font-semibold'>Welcome Back,</h1>
                    <p className='pt-2 text-black/50 text-[10px]'>Login with your credentials that you provided during the Registration</p>
                </div>

                <div className='pt-2 '>
                    <div>
                        <label htmlFor="your email" className='text-[10px]'>Your Email</label>
                        <input 
                            type="email"
                            placeholder='Enter Your Email Here' 
                            className='text-[10px] w-full py-2 my-2 bg-transparent boarder-b border-[#C4C4C4D1] outline-none focus:outline-none'/>
                    </div>

                    <div>
                        <label htmlFor="your password" className='text-[10px]'>Your Password</label>
                        <input 
                            type="password"
                            placeholder='Enter Your Password Here' 
                            className='text-[10px] w-full py-2 my-2 bg-transparent boarder-b border-[#C4C4C4D1] outline-none focus:outline-none'/>
                    </div>
                    <div className='w-full flex items-center justify-between'>
                        <div className='w-full flex'>
                            <input type="checkbox" className='w-3 h-3' />
                            <p className='px-2 text-[10px]'>Remember me</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-2 items-center pt-3 '>
                    <Button type='button' title='Log in' variant='button-main w-1/2'/>
                    <p className='text-[10px]'>Don’t Have an Account? <span className='text-[#00B6FF] font-semibold text-[10px]'>Sign Up</span></p>
                    <span className='text-[#00B6FF] font-semibold text-[10px]'>Forgot Password?</span>
                    <span className='text-[10px]'>Or Sign in With</span>
                    <div className='flex gap-10'>
                        <Image src={google} alt='google' className='w-4 h-4'/>
                        <Image src={facebook} alt='facebook' className='w-4 h-4'/>
                        <Image src={tweeter} alt='tweeter' className='w-4 h-4'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page
