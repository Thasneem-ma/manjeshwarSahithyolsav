'use client'
import Image from "next/image";
import banner from "@/public/assets/banner.jpg";
import artda from "@/public/assets/artda.png";
import mjsbanner from "@/public/assets/mjsbanner-01.jpg";
// import temp from "@/public/assets/temp1.jpg";
// import { useRef, useEffect, useState } from "react";
// import axios from "axios";
import Result from '@/components/Result.js' 

// import dynamic from 'next/dynamic'
 
// const Result = dynamic(() => import('@/components/Result.js'), {
//   ssr: false,
// })
// import dynamic from 'next/dynamic';

// const Canvas = dynamic(() => import('canvas'), { ssr: false });

export default function Home() {
  

  return (
    <main className="flex flex-col items-center  md:space-y-12">
      <div className="pt-12 md:pt-12 p-10 md:px-56">
        <Image src={mjsbanner} priority className="rounded-2xl shadow-xl" alt="SSF" />
      </div>
      <Result/>
      <Image src={artda} priority alt="art" className="pt-14 w-[80%] animate-pulse" />
    </main>
  );
}
