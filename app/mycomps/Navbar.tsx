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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const poppins = Poppins({ weight:"700" ,subsets: ["latin"] });
import Cookies from "js-cookie";
import { IoClose } from "react-icons/io5";
import Collapsiblecomp from "./Collapsiblecomp";
import useOpencontext from "./hooks/useOpencontext";
import { useRouter } from "next/navigation";
type Props ={
    darkMode:boolean,
    setdarkMode: Dispatch<SetStateAction<boolean>>
}
export default function Navbar({setdarkMode,darkMode}:Props){

    const {isOpen,setIsOpen} = useOpencontext()
    const router = useRouter()
    
   const cfd = [

    {
      name:'How it Works',
      link:'/cfd_trading'
    },
    {
      name:'How is it done',
      link:'/how_it_is_done'
    },
    {
      name:'CFD strategies',
      link:'/cfd_strategies'
    },
    {
      name:'Forex Trading',
      link:'/forextrading'
    },
    {
      name:'Strategies for forex',
      link:'/strategiesforforex'
    },
    {
      name:'CFD Glossary',
      link:'/cfdglossary'
    },

   ]
   const markets = [

    {
      name:'Forex',
      link:'/forex'
    },
    
    {
      name:'Crude Oil',
      link:'/crude_oil'
    },
    {
      name:'Bitcoin',
      link:'/bitcoin'
    },
    {
      name:'Commodities',
      link:'/commodities'
    },
    {
      name:'Mining',
      link:'/mining'
    },
    {
      name:'Marijuana',
      link:'/marijuana'
    },
    {
      name:'Stock Indices',
      link:'/stockindices'
    },

   ]
   const education = [

    {
      name:'Beginner',
      link:'/education'
    },
    {
      name:'Intermediate',
      link:'/education/intermediate'
    },
    {
      name:'Advanced',
      link:'/education/advanced'
    },
    {
      name:'Technical Analysis',
      link:'/education/technical'
    },
    {
      name:'Fundamental Analysis',
      link:'/education/fundamental'
    },

   ]
   const resources = [

    {
      name:'Premium Trader',
      link:'/resources/premium_trader'
    },
    {
      name:'Meta Trader 4',
      link:'/resources/meta_trader_4'
    },
    {
      name:'Meta Trader 5',
      link:'/resources/meta_trader_5'
    },
    
   

   ]
   const company = [

    {
      name:'About Us',
      link:'/about'
    },
    // {
    //   name:'Contact Us',
    //   link:'/contact'
    // },
    // {
    //   name:'Low Trading Cost',
    //   link:'/lowtradingcost'
    // },
    
   

   ]
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
       const body =  document.querySelector('body')!;
       body.style.backgroundColor= 'black'
        Cookies.set('dark','true')
    }
    const setLightMode = ()=>{
        setdarkMode(false);
        const body =  document.querySelector('body')!;
       body.style.backgroundColor= 'white'
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
            <header className={`${poppins.className} mt-2 font-bold`}>
                ELITE TRADING HUB
            </header>
            </div>
                
            </div>
            <div className="md:w-3/5 mt-4 flex space-x-2 ">


            <ul className="pt-2 w-3/5 md:w-full  md:flex  md:space-x-6 space-x-9 font-medium text-sm hidden  ">
                <li>
                <DropdownMenu >
  <DropdownMenuTrigger>CFD</DropdownMenuTrigger>
  <DropdownMenuContent className="bg-gray-200">
    
    {cfd.map((item,index)=>(
        <DropdownMenuItem key={index}><Link href={item.link}>{item.name}</Link></DropdownMenuItem>
    ))}
    
  </DropdownMenuContent>
</DropdownMenu>

                </li>
                <li className="hover:underline">
                <DropdownMenu >
  <DropdownMenuTrigger>Markets</DropdownMenuTrigger>
  <DropdownMenuContent className="bg-gray-200">
    
    {markets.map((item,index)=>(
        <DropdownMenuItem key={index}><Link href={item.link}>{item.name}</Link></DropdownMenuItem>
    ))}
    
  </DropdownMenuContent>
</DropdownMenu>
                </li>
                <li className="hover:underline">
                <DropdownMenu >
  <DropdownMenuTrigger>Education</DropdownMenuTrigger>
  <DropdownMenuContent className="bg-gray-200">
    
    {education.map((item,index)=>(
        <DropdownMenuItem key={index}><Link href={item.link}>{item.name}</Link></DropdownMenuItem>
    ))}
    
  </DropdownMenuContent>
</DropdownMenu>
                </li>
                <li className="hover:underline ">
                <DropdownMenu >
  <DropdownMenuTrigger>Resources</DropdownMenuTrigger>
  <DropdownMenuContent className="bg-gray-200">
    
    {resources.map((item,index)=>(
        <DropdownMenuItem key={index}><Link href={item.link}>{item.name}</Link></DropdownMenuItem>
    ))}
    
  </DropdownMenuContent>
</DropdownMenu>

                </li>
                    <li className="hover:underline ">
                    <DropdownMenu >
  <DropdownMenuTrigger>Company</DropdownMenuTrigger>
  <DropdownMenuContent className="bg-gray-200">
    
    {company.map((item,index)=>(
        <DropdownMenuItem key={index}><Link href={item.link}>{item.name}</Link></DropdownMenuItem>
    ))}
    
  </DropdownMenuContent>
</DropdownMenu>


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
    className="w-[100vw] pt-20 h-[90vh] overflow-hidden md:hidden absolute     dark:bg-transparent dark:border-0 z-[60]"
  >
    {/* <ul className="text-xl text-center pt-10 mt-10 font-semibold text-gray-800 dark:text-white  flex flex-col space-y-10" >
        <li className="hover:text-underline hover:text-[#8670FC]"><Link href="/about">About</Link></li>
        <li className="hover:text-underline hover:text-[#8670FC]"><Link href={'/education'}>Education</Link></li>
        <li className="hover:text-underline hover:text-[#8670FC]"><Link href='#pricing'>Pricing</Link></li>
        <li className="hover:text-underline hover:text-[#8670FC]"><Link href="/login">View Dashboard</Link></li>
    </ul> */}
    <div className="">

    <Accordion type="single" className="w-[70%] mx-auto" collapsible >
                  
                
  
                  <AccordionItem value='item-1'>
                      <AccordionTrigger className="text-xl font-semibold focus:no-underline">CFD</AccordionTrigger>
                      
                        {cfd.map((item,index)=>(
                          <AccordionContent key={index} className="text-base">
                          <Link href={item.link} key={index}>
                          <span className="text-black dark:text-white">{item.name}</span>
                          </Link>
                      </AccordionContent>

                        ))}
                    </AccordionItem>
    
                  <AccordionItem value='item-2'>
                      <AccordionTrigger className="text-xl font-semibold focus:no-underline">Markets</AccordionTrigger>
                      
                        {markets.map((item,index)=>(
                          <AccordionContent key={index} className="text-base">
                          <Link href={item.link} key={index}>
                          <span className="text-black dark:text-white">{item.name}</span>
                          </Link>
                          </AccordionContent>
                        ))}
                      
                    </AccordionItem>
                  <AccordionItem value='item-3'>
                      <AccordionTrigger className="text-xl font-semibold focus:no-underline">Education</AccordionTrigger>
                      
                        {education.map((item,index)=>(
                          <AccordionContent key={index} className="text-base">
                          <Link href={item.link} key={index}>
                          <span className="text-black dark:text-white">{item.name}</span>
                          </Link>
                          </AccordionContent>
                        ))}
                     
                    </AccordionItem>
                  <AccordionItem value='item-4'>
                      <AccordionTrigger className="text-xl font-semibold focus:no-underline">Resources</AccordionTrigger>
                        {resources.map((item,index)=>(
                      <AccordionContent key={index} className="text-base">

                          <Link href={item.link} key={index}>
                          <span className="text-black dark:text-white">{item.name}</span>
                          </Link>
                      </AccordionContent>

                        ))}
                    </AccordionItem>
                  <AccordionItem value='item-5'>
                      <AccordionTrigger className="text-xl font-semibold focus:no-underline">Company</AccordionTrigger>
                        {company.map((item,index)=>(
                      <AccordionContent key={index} className="text-base">

                          <Link href={item.link} key={index}>
                          <span className="text-black dark:text-white">{item.name}</span>
                          </Link>
                      </AccordionContent>

                        ))}
                    </AccordionItem>
  </Accordion>
    </div>

    <Button className="bg-[#8670FC] block mt-10 text-white mx-auto w-[90%]">Sign Up</Button>
    {/* <div className="relative">

    </div>
    <div className="absolute w-4/5 bottom-4 px-6  text-white" >
    <div className="flex mx-auto ustify-between gap-x-3 border-black">

        <Button onClick={()=>router.push('/signup')} className="bg-black dark:bg-white dark:text-black text-semibold text-white">Signup</Button>
        <Link href={'#pricing'} onClick={()=>setIsOpen(false)} className="bg-[#8670FC] rounded-md pt-2 text-sm px-2 font-medium text-white text-semibold">View Pricing</Link>
    </div>
    </div> */}
    
  </motion.aside>
) : (
  <motion.aside
    initial='initial'
    animate='animate'
    variants={mobileNavCloseVariants}
    className="w-[80%] hidden h-[90vh] md:hidden overflow-hidden absolute border bg-white dark:bg-[#322965] dark:border-0 z-[60]"
  >
     <ul className="text-xl pt-10 pl-6 flex flex-col space-y-10" >
        <li className="hover:text-underline hover:text-[#8670FC]">About</li>
        <li className="hover:text-underline hover:text-[#8670FC]">Education</li>
        <li className="hover:text-underline hover:text-[#8670FC]">Pricing</li>
        <li className="hover:text-underline hover:text-[#8670FC]">View Dashboard</li>
    </ul>
    
{/* 
    <div className="bg-white border-4 " >
      <div className="flex justify-between">

        <Button className="bg-black w-3/6 dark:bg-white dark:text-black text-semibold text-white">Signup</Button>
        <Button className="bg-[#8670FC] w-3/6 text-white text-semibold ">View Pricing</Button>
    </div>
    </div> */}

  

    
  </motion.aside>
)}

            </>
    )
}