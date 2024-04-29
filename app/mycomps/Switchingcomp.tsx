'use client'
import {motion} from 'framer-motion'
import { useState,useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Firstimage from '../../public/in-slideshow-image-3.png'
import Secondimage from '../../public/in-slideshow-image-4.png'
import { HiChevronRight} from "react-icons/hi";
import { HiChevronLeft} from "react-icons/hi";


export default function Switchingcomp(){

    useEffect(()=>{
        

    },[])
    return(<>
   <Component1 />
   {/* <Component2 /> */}
    
    </>)
}


function Component1(){
    return(
        <div className='h-[20rem]'>

    <motion.div className='relative h-[20rem]' initial={{}}>
        {/* <div className='absolute w-[100vw] top-20 text-5xl text-gray-400 flex justify-between'>
        <HiChevronLeft />
        <HiChevronRight/>

        </div> */}
        <Image src={Firstimage} className='mt-5 object-cover h-full' alt="firstimage"  />
        <div className='p-6 left-4  absolute top-3 w-[80%]'>
        <h1 className='text-4xl text-gray-800  font-semibold'>Trade Forex and Commodities with financial thinking</h1>
        <Button className='bg-main font-semibold text-white mt-10'>Open account</Button>
        </div>
    </motion.div>
        
    
    
    </div>
    )
}
function Component2(){
    return(
        <div className='h-[20rem]'>

    <motion.div className='relative h-[20rem]' initial={{}}>
        {/* <div className='absolute w-[100vw] top-20 text-5xl text-gray-400 flex justify-between'>
        <HiChevronLeft />
        <HiChevronRight/>

        </div> */}
        <Image src={Secondimage} className='mt-5 object-cover h-full' alt="firstimage"  />
        <div className='p-6 left-4  absolute top-3 w-[80%]'>
        <h1 className='text-4xl text-blue-950   font-semibold'>Trade Stocks and Crypto seamlessly</h1>
        <Button className='bg-main font-semibold p-6 text-white mt-10'>Open account</Button>
        </div>
        <p className='text-xs absolute bottom-3 text-gray-600 p-5 text-center'>*The small capital requirements in trading forex are due to the use of leverage when trading forex.</p>
    </motion.div>
        
    
    
    </div>
    )
}