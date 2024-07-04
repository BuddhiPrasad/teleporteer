import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { HeaderLinks } from "../constants";

import Logo from '../public/assets/Logo.svg'
import User from '../public/assets/User.svg'
import Menu from '../public/assets/Menu.svg'

const Navbar = () => {
  return (

            <nav className='sticky z-[100] top-0 max-w-full mx-auto bg-black/75 backdrop-blur-lg transition-all'>
                <div className='max-w-screen-xl py-4 flex  mx-auto'>
                    <div className='flex w-full items-center justify-between'>
                    <div className='flex items-center'>
                        <Image src={Logo} alt='Logo' className='w-[210px]'/>
                        <div className='lg:flex hidden lg:block items-center pl-16 gap-x-14 text-white'>
                            {HeaderLinks.map((item) =>(
                                <p>{item.title}</p>
                            ))}
                        </div>
                    </div>

                    <div  className='flex items-center gap-4'>
                        <div>
                            {/*<span className='hidden lg:block  text-white'>Open an Account</span>*/}
                            <button className=' bg-[#00B6FF] w-1/2 py-3 px-10 text-white rounded-[100px] lg:w-fit'>Sign Up</button>
                        </div>
                        <div className='flex items-center gap-4'>
                            <button className=' bg-[#00B6FF] w-1/2 py-3 px-10 text-white rounded-[100px] lg:w-fit'>Sign In</button>
                            {/*<Image src={User} alt='User' className='w-10 h-10'/> */}
                            {/*<span className='hidden lg:block  text-white'>Sign In</span>*/}
                            
                        </div>

                        <div>
                            <Image src={Menu} alt='Menu' className='lg:hidden w-10 h-10'/>
                        </div>
                    </div>
                </div>
                </div>
                
            </nav>
  )
}

export default Navbar
