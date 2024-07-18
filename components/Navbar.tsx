import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { HeaderLinks } from "../constants";

import Logo from '../public/assets/Main Logo.svg'
import User from '../public/assets/User.svg'
import Menu from '../public/assets/Menu.svg'
import WrapperContainer from './WrapperContainer';
import Button from './Button';

const Navbar = () => {
  return (

            <nav className='sticky z-[100] top-0 max-w-full mx-auto bg-black/80 backdrop-blur-lg transition-all'>
                <WrapperContainer>

                
                <div className='py-4'>
                    <div className='flex w-full items-center justify-between'>
                        <div className='flex'>
                           <a href="/"><Image src={Logo} alt='Logo' className='w-7 h-7'/></a>
                        </div>


                        <div className='lg:flex hidden items-center pl-16 gap-x-14 text-white'>
                            {HeaderLinks.map((item) =>(
                                <Link href={item.url}>{item.title}</Link>
                            ))}
                        </div>

                        <div className='flex gap-x-3 items-center'>
                            <Image src={User} alt='User' className='w-7 h-7'/> 
                            <Button title=' Sign in' variant='button-sub' icon='' type='submit' />
                            <Image src={Menu} alt='Menu' className='w-7 h-7'/>
                        </div>
                    </div>

                    
                </div>
                
                </WrapperContainer>
                
            </nav>
  )
}

export default Navbar
