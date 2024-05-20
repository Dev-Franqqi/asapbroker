'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Firstimage from '../../public/in-slideshow-image-3.png';
import Secondimage from '../../public/in-slideshow-image-4.png';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';

export default function Switchingcomp() {
    const [activeComponent, setActiveComponent] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveComponent((prev) => (prev === 1 ? 2 : 1));
        }, 5000); // Change component every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='overflow-x-hidden'>

        <AnimatePresence mode='wait'>
            {activeComponent === 1 ? (
                <Component1 key={1} />
            ) : (
                <Component2 key={2} />
            )}
        </AnimatePresence>
        <div className='hidden md:flex gap-x-6 justify-center mt-4'>
            <div className='flex items-center gap-x-2'>
                <div className='w-8 h-8 rounded-full bg-gray-600 '><div className='h-4/5 mt-1 mx-auto w-3/5 border border-white'></div></div>
                <p>Enhanced Tools</p>
            </div>
            <div className='flex items-center gap-x-2'>
                <div className='w-8 h-8 rounded-full bg-gray-600 '><div className='h-4/5 mt-1 mx-auto w-3/5 border border-white'></div></div>
                <p>Trading guides</p>
            </div>
            <div className='flex items-center gap-x-2'>
                <div className='w-8 h-8 rounded-full bg-gray-600 '><div className='h-4/5 mt-1 mx-auto w-3/5 border border-white'></div></div>
                <p>Fast Execution</p>
            </div>
            <div className='flex items-center gap-x-2'>
                <div className='w-8 h-8 rounded-full bg-gray-600 '><div className='h-4/5 mt-1 mx-auto w-3/5 border border-white'></div></div>
                <p>0% Commission</p>
            </div>
           
            
        </div>
                </div>
    );
}

function Component1() {
    return (
        <motion.div
            key={1}
            className='h-[20rem] md:h-[25rem] md:flex md:justify-between md:relative  overflow-x-hidden'
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
        >
            <Image src={Firstimage} className='mt-5 object-cover md:absolute md:right-0 md:scale-150 md:object-none h-full'  alt='firstimage' />
            <div className='p-6 left-4 absolute md:block top-3 w-[80%] '>
                <h1 className='text-4xl md:pt-10 md:text-5xl md:w-3/5 text-gray-800  font-semibold'>Trade Forex and Commodities with financial thinking</h1>
               <p className='hidden md:block md:text-xl md:w-4/5'>Access 40,000+ instruments – across asset classes – to trade, hedge and invest from a single account.</p>
                
                <div className='flex gap-x-3'>

                <Button className='bg-main font-semibold text-white mt-10'>Open account</Button>
                <Button className='border-main border hidden md:block font-semibold text-main mt-10'>Login account</Button>
            </div>
            <p className='text-xs mt-4'>* The small capital requirements in trading forex are due to the use of leverage when trading forex.</p>
            </div>

        </motion.div>
    );
}

function Component2() {
    return (
        <motion.div
        key={1}
        className='h-[20rem] md:h-[25rem] md:flex md:justify-between md:relative  overflow-x-hidden'
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ duration: 0.3 }}
    >
        <Image src={Secondimage} className='mt-5 object-cover md:absolute md:right-0 md:scale-150 md:object-none h-full'  alt='firstimage' />
        <div className='p-6 left-4 absolute md:block top-3 w-[80%] '>
            <h1 className='text-4xl md:pt-10 md:text-5xl md:w-3/5 text-gray-800  font-semibold'>Trade Forex and Commodities with financial thinking</h1>
           <p className='hidden md:block md:text-xl md:w-3/5'>Trade Cryptocurrencies, Stock Indices, Commodities and Forex from a single account</p>
            
            <div className='flex gap-x-3'>

            <Button className='bg-main font-semibold text-white mt-10'>Open account</Button>
            <Button className='border-main border hidden md:block font-semibold text-main mt-10'>Login account</Button>
        </div>
        <p className='text-xs mt-4'>* The small capital requirements in trading forex are due to the use of leverage when trading forex.</p>

        </div>

    </motion.div>
       
    );
}
