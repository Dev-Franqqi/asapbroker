'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Logo from "../../public/elitlogo.png"
import Cookies from "js-cookie"
import { useState,useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Login(){
    const router = useRouter()
    const [darkMode,setdarkMode] = useState(false)
    const setToDarkMode = ()=>{
        setdarkMode(true);
        Cookies.set('dark','true')
    }
    const setLightMode = ()=>{
        setdarkMode(false);
        Cookies.set('dark','false')
    }

    const gotoHome = ()=>{
        router.push('/')
    }
    useEffect(()=>{
        const dark = Cookies.get('dark');
        if(dark){
          if(dark==='true'){
            setdarkMode(true)
          }
        }
        else{
          setdarkMode(false)
          
        }
      },[])

    return(

        <div className={darkMode?'h-screen pb-2 dark bg-black':'h-screen pb-2'}>
        <nav className="p-3 flex justify-between">
        <svg xmlns="http://www.w3.org/2000/svg" onClick={gotoHome} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:text-[#8670FC]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
       
{!darkMode &&  <svg
    onClick={setToDarkMode}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 mt-1 md:text-black  hover:text-[#8670FC]"
>
    <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
    />
</svg>}
{darkMode && <svg xmlns="http://www.w3.org/2000/svg" onClick={setLightMode} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-1 text-[#8670FC]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>
}

        </nav>
        <main className="mt-10 text-center">
            <header>
                <Image src={Logo} className="mx-auto" alt=""/>
            </header>
            <h1 className="font-bold text-xl mt-3 dark:text-[#8670FC]">Sign Up Now</h1>
            <p className="text-sm dark:text-gray-100">Fill in the details to create an account</p>
           <form className="py-10 flex flex-col px-2 space-y-3 "
           >



          
            <Input type="email" placeholder="email" />
            <Input type="password" placeholder="password"/>
            
            <Button className="w-3/5  font-semibold mx-auto text-white bg-[#8670FC]">Submit</Button>
            
           </form>

           <p className="text-sm text-gray-400">Don&apos;t have an account? <Link href={'/signup'} className="text-[#8670FC] font-semibold">Sign up</Link></p>




        </main>
        
        
        
        </div>
    )
}