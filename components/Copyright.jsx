import Link from 'next/link';
import React from 'react'
import { FaRegCopyright } from "react-icons/fa6";


function Copyright() {
  return (
    <div className='md:px-56 px-10 flex justify-between pb-6 items-center'>
        <div className='flex gap-1 items-center'>
        <FaRegCopyright size={19}/>
        <h1 className='text-[8pt] leading-3'>Copyright reserved by <br/> SSF Manjeshwar </h1>
        </div>
        <div className='-space-y-1'>
            <h1 className='text-[8pt]'>Developed & Designed</h1>
            <div className='flex gap-1 text-blue-900 text-[8pt] font-medium'>
            <Link href={'https://www.trizo.in/'}>Thasneem</Link>
            <h1>,</h1>
            <Link href={'https://mohammedzaheer.online/'}>Zaheer</Link>
            </div>
        </div>
      
    </div>
  )
}

export default Copyright
