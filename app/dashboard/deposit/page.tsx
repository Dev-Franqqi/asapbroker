"use client"
import './deposit.css'
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Depositcomp from "@/app/mycomps/Depositcomp";
import Cryptoiconsimg from "../../../public/cryptoicons 2.png"

import Card from "../../../public/card 1.png"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Image from "next/image";
import Btc from "../../../public/btc.png"
import Eth from "../../../public/eth.png"
import Usdt from "../../../public/usdt.png"
import { Button } from "@/components/ui/button";
import { ChangeEvent,FormEvent } from "react";
import { Input } from "@/components/ui/input";
import Elitelogo from "../../../public/elitlogo.png"

 
export default function Deposit(){
    const [darkMode,setDarkMode] = useState<boolean>(false)
    
    const router = useRouter()
    const setToDarkMode = ()=>{
        setDarkMode(true);
        Cookies.set('dark','true')
    }
    const setLightMode = ()=>{
        setDarkMode(false);
        Cookies.set('dark','false')
    }

    const [screenshot, setScreenshot] = useState<File | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            setScreenshot(file);
        }
    };
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (screenshot) {
          // Send the screenshot to a server for processing
          console.log('Screenshot submitted:', screenshot.name);
          // You can also reset the form here
          setScreenshot(null);
      } else {
          alert('Please select a screenshot');
      }
  };
    //  const { ref, inView } = useInView({
    //   triggerOnce: true, // Only trigger once
    //   threshold: 0.5, // Trigger when 50% of the element is in view
    // });
          


          useEffect(()=>{
            const dark = Cookies.get('dark');
            if(dark){
              if(dark==='true'){
                setDarkMode(true)
              }
            }
            else{
              setDarkMode(false)
              
            }
          },[])

    return(

        <>

        <div className={darkMode?'dark bg-black h-fit pb-4 ':'pb-4'}>
        <nav className="px-3 pb-2 flex justify-between">
        <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>router.push('/dashboard')} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:text-[#8670FC]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>

<div className='flex'>
<Image src={Elitelogo} className='scale-75' alt='' />
<p className='font-extrabold mt-1 text-black dark:text-white'>ELITE TRADING HUB</p>

</div>

       
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

        <main className="pt-5 px-8 mb-3 bg-white dark:text-gray-200 dark:bg-black">

          <h2 className='text-center mb-10 mt-9 dark:text-gray-200'>Deposit</h2>
        

        <ol className='list-decimal'>
          <li><span>Copy Crypto Address:</span> First , copy the cryptocurrency address provided for your payment</li>
       
          <li><span>Make Payment:</span> Use your preffered crypto wallet to send the payment to the copied address. Ensure the amount and currency match the requested payment.</li>
          <li><span>Submit Proof of Payment:</span> After making the payment, return to this page and upload a screenshot of the transaction as proof please ensure the screenshot is clear and includes all relevant transaction details</li>
        </ol>



          <section className="dark:text-black ">
          
           
        
              <Depositcomp />
            <div className="pb-2">
            <h2 className="dark:text-gray-400 text-lg font-semibold mb-2">Already made payment?</h2>

            <form className="dark:text-gray-400" onSubmit={handleSubmit}>
            <label>
                Select Screenshot:
                <input type="file" accept="image/*" onChange={handleFileChange} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
            </div>

          </section>
        </main>
        <footer className='text-center mb-4 text-sm'>2024 Elite Trading Hub</footer>

        </div>
        
        
        
        </>
    )
}