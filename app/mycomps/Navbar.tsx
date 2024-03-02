"use client"
import Image from "next/image"
import Link from "next/link";
import Logo from "../../public/elitlogo.png"
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Dispatch, useState,SetStateAction } from "react";
const poppins = Poppins({ weight:"700" ,subsets: ["latin"] });

type Props ={
    darkMode:boolean,
    setdarkMode: Dispatch<SetStateAction<boolean>>
}
export default function Navbar({setdarkMode,darkMode}:Props){
    

    return(
        <>
        <nav className="px-4 py-2 flex justify-between">
            <div className="flex mt-3 ">
            <Image src={Logo} alt="" className="rounded-md"  />
            <header className={`${poppins.className} mt-2`}>
                ELITE TRADING HUB
            </header>
                
            </div>
            <div className="md:w-2/5 mt-4 flex space-x-2 ">


            <ul className="pt-2 w-3/5 md:flex space-x-9 font-medium text-sm hidden  ">
                
                <li className="hover:underline ">
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
                <Button className="text-black border dark:bg-[#8670FC] hover:bg-[#8670FC] hover:text-white border-[#8670FC] text-center hidden md:block">Sign up</Button>
                <Button className="bg-black hover:text-white dark:border dark:border-[#8670FC] hover:bg-[#8670FC]  text-white">Log in</Button>
                
            {!darkMode &&  <svg
    onClick={() => setdarkMode(true)}
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

                
               


            </div>
            </div>


                
            
            </nav></>
    )
}