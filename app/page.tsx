"use client"
import {motion} from "framer-motion"
import { useInView } from "react-intersection-observer";
import Navbar from "./mycomps/Navbar"
import Image from "next/image"
import Marketimage from "../public/marketimage.png"
import Secureimage from "../public/securetrade.png"
import { useState } from "react"
import { ReactNode } from "react";


interface AnimatedComponentProps {
  children: ReactNode;
}



const AnimatedComponent = ({ children }:AnimatedComponentProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};


export default function App(){
  const [darkMode,setDarkMode] = useState<boolean>(false)
   console.log(darkMode)
   const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // Trigger when 50% of the element is in view
  });

  return(
    

      <div className={darkMode?"dark bg-black text-white":""}>
          <Navbar darkMode={darkMode} setdarkMode={setDarkMode}/>

          <main className="dark:bg-black">

<section className="h-screen text-center md:text-left  flex flex-col md:flex-row md:items-center mt-10 justify-center md:px-10">

  <motion.div className="z-50 md:order-1 md:mr-auto md:ml-0 relative md:top-0 px-3 top-40"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5,delay:1 }}>
    <h1 className="text-[2.5rem] font-bold text-[#8670FC]  md:w-[22.8rem] leading-[48px] px-2 md:px-0 mb-4">
      Trade Crypto and Invest with Confidence
    </h1>
    <p className="md:w-[42vw]  md:text-xl text-gray-700 mb-20 dark:text-gray-300">
      Discover the world of cryptocurrency trading and investment with our user-friendly platform. Start today and take advantage of the opportunities in the crypto market.
    </p>
  </motion.div>


    <motion.div initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} transition={{duration:0.6 ,delay:2}} className="md:order-3 mb-40  md:ml-auto mx-2 mt-40 md:-mt-10 z-50">
  <Image  src={Marketimage} alt="" className="" />


    </motion.div>

  <motion.div initial={
    {
      x:-50
    }
  }
  animate={{x:0}}
  transition={{duration:0.7}}
  
  className="w-64 h-64 rounded-full bg-gradient-to-r from-neutral-800 to-gray-100 dark:to-gray-500 absolute bottom-3 md:bottom-1 -left-40 z-40"></motion.div>
</section>




<section className="h-screen overflow-x-hidden relative md:px-10 mt-10 py-4 dark:bg-black md:flex md:justify-between">

   

  <div>

    <AnimatedComponent>
      <p className="text-center font-semibold md:text-left">Secure</p>
    </AnimatedComponent>

    <AnimatedComponent>
    <h2 className="text-[2.5rem] text-center font-bold text-[#8670FC]  md:w-[22.8rem] leading-[48px] px-2 md:px-0 mb-4 md:text-left">
    Trade Crypto Safely and Securely
      </h2>
    </AnimatedComponent>
    <AnimatedComponent>
      <p className="text-center md:text-left md:w-[42vw]  md:text-xl text-gray-700 mb-20 dark:text-gray-300">Our trading platform prioritizes security to ensure  your investments are protected with advanced encryption and multi-factor authentication, you can trade with peace of mind.</p>
    </AnimatedComponent>

    <div className="flex flex-col gap-y-3 md:flex-row text-center md:text-left ">


    <div >
      <AnimatedComponent>
        <h3 className="text-xl text-[#8670FC] font-semibold">Advance Security</h3>
      </AnimatedComponent>
      <AnimatedComponent>
       <p className="md:w-[231px] text-base">
       Benefit from our robust security measures, including secure wallets and real-time transaction monitoring
       </p>
      </AnimatedComponent>
    </div>


    <div className="px-3 md:px-0 mb-10 md:mb-0">
      <AnimatedComponent>
        <h3 className="text-xl text-[#8670FC] font-semibold">User-Friendly Interface</h3>
      </AnimatedComponent>
      <AnimatedComponent>
       <p className="md:w-[231px] text-base">
       Our intuitive platform makes it easy for beginners and experienced traders to navigate and execute trades
       </p>
      </AnimatedComponent>
    </div>
    </div>




  </div>
  <Image src={Secureimage} className="mt-3 md:mt-0  z-50" alt=""/>
  <motion.div
  initial={
    {
      x:50
    }
  }
  animate={{x:0}}
  transition={{duration:0.7}} className="w-64 h-64 rounded-full bg-gradient-to-r from-gray-200 to-pink-200 absolute  -right-40 -z-50"></motion.div>


</section>

<section className="md:mt-20 md:pl-10">
<AnimatedComponent>
    <h2 className="text-[2.5rem] text-center font-bold text-[#8670FC]  md:w-[22.8rem] leading-[48px] px-2 md:px-0 mb-4 md:text-left">
    Join the Crypto Trading Revolution Today!
      </h2>
    </AnimatedComponent>
</section>


</main>

      
      
      </div>
    


  )
}