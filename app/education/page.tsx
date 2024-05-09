'use client'
import { useEffect,useState } from "react"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"
import Link from "next/link"
import { IoIosArrowDropright } from "react-icons/io";
export default function Education(){
  


  

    return(
        <>

        <div className={' px-2 md:h-screen'}>
          

<main className="p-2">

      <h1 className="text-center font-bold mb-7">Beginner</h1>  
        
    <h2 className="text-4xl mb-5 font-semibold ">What is Forex?</h2> 
    <p className="mb-4">
    The foreign exchange market , also known as forex or the FX market , is the world&apos;s most traded market, with turnover of $5 trillion per day. To put this into perspective, the U.S. stock market trades around $257 billion a day; quite a large sum, but only a fraction of what forex trades. Forex is traded 24 hours a day, 5 days a week across by banks, institutions and individual traders worldwide. Unlike other financial markets, there is no centralized marketplace for forex, currencies trade over the counter in whatever market is open at that time.</p>       
        
        

        <h2 className="font-semibold text-2xl mb-1">How Forex Trading Works</h2>

        <p className="mb-4">
        Trading forex involves the buying of one currency and simultaneous selling of another.
In forex, traders attempt to profit by buying and selling currencies by actively speculating on the direction currencies are likely to take in the future.
        </p>
        


        <h3 className="mb-1 text-2xl font-semibold">Where can I Trade Forex</h3>
        <p className="mb-4">You can trade forex 24 hours a day, five days a week. The foreign exchange markets are worldwide and therefore follow a 24-hour global timetable.</p>

        <p className="mb-4">The trading week for forex begins on Monday morning in Sydney, Australia and follows the sun westward as the world’s major capital markets open and close from Tokyo to London and finally closing on Friday evening in New York.</p>
</main>

        
        
        <div className="flex justify-end pb-3 mt-6">

        
        <Link className="text-[#8670FC] flex font-semibold text-right" href="/education/intermediate">Intermediate <IoIosArrowDropright className="text-2xl ml-2" /></Link>
        </div>
        </div>

        </>
    )
}