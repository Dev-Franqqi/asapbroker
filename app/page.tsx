"use client"
import {motion} from "framer-motion"
import Navbar from "./mycomps/Navbar"
import Image from "next/image"
import Marketimage from "../public/marketimage.png"
import { useState } from "react"
export default function App(){
  const [darkMode,setDarkMode] = useState<boolean>(false)
   console.log(darkMode)

  return(
    <>

      <div className={darkMode?"dark bg-black text-white":""}>
          <Navbar darkMode={darkMode} setdarkMode={setDarkMode}/>

          <main className="">

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


    <motion.div initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} transition={{duration:0.6 ,delay:2}} className="md:order-3  md:ml-auto mx-2 mt-40 md:-mt-10 z-50">
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
  {/* <div className="w-64 h-64 rounded-full bg-gradient-to-r from-gray-200 to-black absolute bottom-1 -right-32 z-40"></div> */}
</section>




<section className="screen">

  <div>
    <p className="font-semibold text-sm">Secure</p>
  </div>

</section>
</main>

      
      
      </div>
    </>


  )
}