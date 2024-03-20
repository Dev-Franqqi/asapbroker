"use client"
import Image from "next/image"
import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "../../public/elitlogo.png"
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Dispatch, useState,SetStateAction,useRef } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
const poppins = Poppins({ weight:"700" ,subsets: ["latin"] });
import Cookies from "js-cookie";
import { IoClose } from "react-icons/io5";
import useOpencontext from "./hooks/useOpencontext";
type Props ={
    router:AppRouterInstance,
    darkMode:boolean,
    setdarkMode: Dispatch<SetStateAction<boolean>>
}
export default function Navbar({router,setdarkMode,darkMode}:Props){

    const {isOpen,setIsOpen} = useOpencontext()

    
    console.log(isOpen)
    const toggleMenu = () => {
      setIsOpen((prevIsOpen) => !prevIsOpen);
    };
    
    
    
    const mobileNavVariants = {
        initial:{
            opacity:0,
            left:"-100%"
        },
        animate:{
            opacity:1,
            left:0
        }

    }
    const mobileNavCloseVariants = {
        initial: {
          opacity: 1,
          left: 0,
        },
        animate: {
          opacity: 0,
          left: '-100%',
        },
      };
      
    
    const setToDarkMode = ()=>{
        setdarkMode(true);
        Cookies.set('dark','true')
    }
    const setLightMode = ()=>{
        setdarkMode(false);
        Cookies.set('dark','false')
    }
    const gotoLogin = ()=>{
        router.push('/login');
    }
    const gotoSignup = ()=>{
        router.push('/signup')

    }
  
    
    

    return(
        <>
        <nav className="px-1 py-2 flex justify-between">
            <div className="flex gap-x-3 w-2/3 mt-3 ">
            <div className="z-[70]">
            
      <motion.div
        className="menu-icon"
        onClick={toggleMenu}
        initial={{ opacity: 1, rotate: 0 }}
        animate={{ opacity: isOpen ? 0 : 1, rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {isOpen ? <IoClose size={30} className="md:hidden mt-1  text-3xl text-black dark:text-white" /> : <HiOutlineMenuAlt4 className="md:hidden mt-1  text-3xl text-black dark:text-white" size={30} />}
      </motion.div>
      {isOpen && (
        <motion.div
          className="close-icon absolute top-5"
          onClick={toggleMenu}
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <IoClose className="md:hidden mt-1  text-3xl text-black dark:text-white" size={30} />
        </motion.div>
      )}
    </div>
              
            <div className="flex ">

            
            <Image src={Logo} alt="" className="rounded-md scale-50"  />
            <header className={`${poppins.className} mt-2`}>
                ELITE TRADING HUB
            </header>
            </div>
                
            </div>
            <div className="md:w-2/5 mt-4 flex space-x-2 ">


            <ul className="pt-2 w-3/5 md:flex space-x-9 font-medium text-sm hidden  ">
                
                <li className="hover:underline">
                    <Link href="/">About</Link>
                </li>
                <li className="hover:underline ">
                <Link href="/">Pricing</Link>

                </li>
                    <li className="hover:underline ">
                    <Link href="/">Contact</Link>


                    </li>

            </ul>



            <div className="flex space-x-2">
                <Button onClick={gotoSignup} className="text-black border dark:bg-[#8670FC] hover:bg-[#8670FC] hover:text-white border-[#8670FC] text-center hidden md:block">Sign up</Button>
                <Button onClick={gotoLogin} className="bg-black hover:text-white dark:border dark:border-[#8670FC] hover:bg-[#8670FC]  text-white">Log in</Button>
                
            {!darkMode &&  <svg
    onClick={setToDarkMode}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 mt-2 md:mt-[0.8rem] md:text-black md:border-0 hover:text-[#8670FC]"
>
    <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
    />
</svg>}
{darkMode && <svg xmlns="http://www.w3.org/2000/svg" onClick={setLightMode} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>
}

                
               


            </div>
            </div>


                
            
            </nav>
            {isOpen ? (
  <motion.aside
    initial='initial'
    animate='animate'
    variants={mobileNavVariants}
    className="w-[80%] h-[90vh] overflow-hidden absolute border bg-white dark:bg-[#322965] dark:border-0 z-[60]"
  >
    <ul className="text-xl pt-10 pl-10 flex flex-col space-y-10" >
        <li>About</li>
        <li>Education</li>
        <li>Resource</li>
        <li>Company</li>
    </ul>
    <div className="relative">

    </div>

    <div className="absolute bottom-4" >
        <Button>Signup</Button>
        <Button>View Pricing</Button>
    </div>
    
  </motion.aside>
) : (
  <motion.aside
    initial='initial'
    animate='animate'
    variants={mobileNavCloseVariants}
    className="w-[80%] h-[90vh] overflow-hidden absolute border bg-white dark:bg-[#322965] dark:border-0 z-[60]"
  >
     <ul className="text-xl pt-10 pl-10 flex flex-col space-y-10" >
        <li>About</li>
        <li>Education</li>
        <li>Resource</li>
        <li>Company</li>
    </ul>
    <div className="relative h-full">


    <div className="absolute bottom-10" >
        <Button>Signup</Button>
        <Button>View Pricing</Button>
    </div>
    </div>

    
  </motion.aside>
)}

            </>
    )
}