"use client"
import {motion} from "framer-motion"
import { useInView } from "react-intersection-observer";
import Navbar from "./mycomps/Navbar"
import Image from "next/image"
import Marketimage from "../public/marketimage.png"
import Secureimage from "../public/securetrade.png"
import { useState } from "react"
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";


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

<section className="md:flex md:justify-between md:px-5 mt-8">

   

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
  transition={{duration:0.7}} className="w-64 h-64 rounded-full bg-gradient-to-r from-gray-200 to-pink-200 absolute  -right-40  -z-50"></motion.div>


 </section>



<section className="h-fit md:mb-10 mt-20 md:pl-10 md:flex md:justify-between">
<AnimatedComponent>
    <h2 className="text-[2.5rem] text-center font-bold text-[#8670FC]  md:w-[22.8rem] leading-[48px] px-2 md:px-0 mb-4 md:text-left">
    Join the Crypto Trading Revolution Today!
      </h2>
    </AnimatedComponent> 
    <div>
    <AnimatedComponent>
      <p className="text-center md:text-left md:w-[42vw] md:mt-5  md:text-xl text-gray-700 mb-20 dark:text-gray-300">A user friendly platform that enables trade and investment and helps you grow your wealth with ease.</p>
    </AnimatedComponent>

    <div className="px-3 flex flex-col gap-y-3">
    <AnimatedComponent>
      <p className="text-4xl text-[#8670FC] font-bold">50%</p>
      <p className="text-sm">Active Traders:10,000+</p>
    </AnimatedComponent>
    <AnimatedComponent>
      <p className="text-4xl text-[#8670FC] font-bold">50%</p>
      <p className="text-sm">Transaction volume:  $1 million +</p>
    </AnimatedComponent>


    </div>
      
    </div>
    
    
   

</section>
<section id="market" className="py-10 md:px-0 mt-20 text-[#8670FC]">
              <h3 className="text-center font-bold text-2xl mb-10 md:text-3xl">
                ACCOUNT TYPES
              </h3>
              <div className="md:flex md:gap-x-3 px-2">


              <div className="text-center  border py-9 text-sm rounded-md mb-7   md:w-2/6 dark:border-white">
                <p className="font-semibold">STARTER</p>
                <p className="font-bold text-2xl mb-3 ">1000 $/EUR</p>
                <ul className=" mb-6 text-base text-black dark:text-[#8670FC] md:text-lg">
                  <li className="mb-3">
                    Trading Instruments: 36 currency pairs, metals,
                    cryptocurrencies
                  </li>
                  <li className="mb-3">Spread: Floating from 1.3 pips</li>
                  <li className="mb-3">Maximum Leverage: 1:2000</li>
                  <li className="mb-3">Return on Investment:10%</li>
                  <li>Deposit Bonuses: All Offers</li>
                </ul>

                <Button className="border-2 dark:bg-black dark:hover:bg-[#8670FC] dark:hover:text-white  hover:bg-[#8670FC] hover:text-white font-semibold md:mt-6 dark:text-[#8670FC]">
                  Choose Plan
                </Button>
              </div>
              <div className="text-center border px-4 py-9 text-sm rounded-md mb-7 md:w-2/6  dark:border-white">
                <p className="font-semibold ">BASIC</p>
                <p className="font-bold text-2xl mb-3 "> 5000 $/EUR</p>
                <ul className="mb-6 text-base text-black dark:text-[#8670FC] md:text-lg">
                  <li className="mb-3">
                    Trading Instruments: 36 currency pairs,CbFDs on US
                    stocks,CFDs on indices,CFDs on oil, cryptocurrencies
                  </li>
                  <li className="mb-3">Spread: Floating from 1.3 pips</li>
                  <li className="mb-3">Maximum Leverage: 1:2000</li>
                  <li className="mb-3">Return on Investment:15%</li>
                  <li className="mb-3">Deposit Bonuses: All Offers</li>
                </ul>

                <Button className="border-2 dark:hover:bg-[#8670FC] dark:hover:text-white dark:bg-black hover:bg-[#8670FC] hover:text-white  font-semibold md:mt-6 text-[#8670FC]">
                  Choose Plan
                </Button>
              </div>
              <div className="text-center border px-4 py-9 text-sm rounded-lg mb-7 md:w-2/6  dark:border-white">
                <p className="font-semibold">PREMIUM</p>
                <p className="font-bold   mb-3 text-2xl">10,000 $/EUR</p>
                <ul className="mb-6 text-base text-black dark:text-[#8670FC] md:text-lg">
                  <li className="mb-3">
                    Trading Instruments: 36 currency pairs,CFDs on US
                    stocks,CFDs on indices,CFDs on oil, cryptocurrencies
                  </li>
                  <li className="mb-3">Spread: Floating from 1.3 pips</li>
                  <li className="mb-3">Maximum Leverage: 1:500</li>
                  <li className="mb-3">Return on Investment:20%</li>
                  <li className="mb-3">Deposit Bonuses: All Offers</li>
                  <li className="mb-3">Loyalty Bonuses: All Offers</li>
                </ul>

                <Button className="border-2 dark:hover:bg-[#8670FC] dark:hover:text-white hover:bg-[#8670FC] hover:text-white text-[#8670FC] dark:bg-black font-semibold">
                  Choose Plan
                </Button>
              </div>
              </div>

            </section>

            <section className="px-5 py-4 md:mb-20 md:flex md:justify-between text-center md:text-left ">
              
    <AnimatedComponent>
    <h2 className="text-[2.5rem] text-center font-bold text-[#8670FC]  md:w-[22.8rem] leading-[48px] px-2 md:px-0 mb-4 md:text-left">
    Start Trading Today
      </h2>
    </AnimatedComponent>
    <AnimatedComponent>
      <p className="text-center md:text-left md:w-[42vw] md:mt-5  md:text-xl text-gray-700 mb-20 md:mb-0 dark:text-gray-300">Join our platform and start enjoying the benefits from our user friendly interface to our ease of service</p>

      <Button className="border-2 dark:hover:bg-[#8670FC] dark:hover:text-white hover:bg-[#8670FC] hover:text-white text-[#8670FC] dark:bg-black font-semibold">
        Sign up
      </Button>
    </AnimatedComponent>

            </section>


            <section className="mt-20">
                         
    <AnimatedComponent>
    <h2 className="text-[2.5rem] text-center font-bold text-[#8670FC]  md:w-[22.8rem] leading-[48px] px-2 md:px-0 mb-4">
    Get in Touch
      </h2>
    </AnimatedComponent>
              

            </section>




</main>

      
      
      </div>
    


  )
}