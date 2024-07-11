import Image from 'next/image'
import React from 'react'
import font from '@/public/assets/fontssf.png'
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className='md:px-56 px-10 py-10 flex justify-between items-center'>
      <div>
        <Image src={font} sizes='100%' className='w-[30%] ' loading='lazy' quality={100} alt='ssf' />
        <h1 className='font-extrabold text-base md:text-lg uppercase'>Meenja Sector</h1>
      </div>
      <div className='flex gap-1 items-center'>
      <RiInstagramFill size={25} />
      <FaYoutube size={30} />
      <FaFacebookSquare  size={25}/>
      </div>
    </div>
  )
}

export default Footer
