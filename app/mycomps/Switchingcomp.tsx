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
        <AnimatePresence mode='wait'>
            {activeComponent === 1 ? (
                <Component1 key={1} />
            ) : (
                <Component2 key={2} />
            )}
        </AnimatePresence>
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
            </div>

        </motion.div>
    );
}

function Component2() {
    return (
        <motion.div
            key={2}
            className='h-[20rem] overflow-x-hidden'
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.5 }}
        >
            <Image src={Secondimage} priority={true}  className='mt-5 object-cover h-full' alt='firstimage' />
            <div className='p-6 left-4 absolute top-3 w-[80%]'>
                <h1 className='text-4xl text-blue-950   font-semibold'>Trade Stocks and Crypto seamlessly</h1>
                <Button className='bg-main font-semibold p-6 text-white mt-10'>Open account</Button>
            </div>
            <p className='text-xs absolute bottom-3 text-gray-600 p-5 text-center'>
                *The small capital requirements in trading forex are due to the use of leverage when trading forex.
            </p>
        </motion.div>
    );
}
