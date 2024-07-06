import React from 'react'
import SubPageHero from './SubPageHero'
import Image from "next/image";

import HeroImage from '../public/assets/Contact Us Hero.png'

const ContactUs = () => {
  return (

   <SubPageHero 
        bgImage =  {HeroImage}
        subDestription="We'd love to hear from you"
        mainTitle='Feel free to contact us and we will get back to you' 
        subTitle='soon as we can'
    />
  )
}

export default ContactUs
