"use client"
import './deposit.css'
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Depositcomp from "@/app/mycomps/Depositcomp";
import Cryptoiconsimg from "../../../public/cryptoicons 2.png"
import Link from 'next/link';
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
          


        

    return(

        <>

        <div className='pb-4'>
        <nav className="px-3 pb-2 flex gap-x-8">
         <Link href='/dashboard'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:text-[#8670FC]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
         </Link>

<div className='flex'>
<Image src={Elitelogo} className='scale-75' alt='' />
<p className='font-extrabold mt-1 text-black dark:text-white'>ELITE TRADING HUB</p>

</div>

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