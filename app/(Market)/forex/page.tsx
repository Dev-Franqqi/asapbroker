'use client'
import { FaAngleLeft } from "react-icons/fa6";
import { useEffect } from "react"
import { useState } from "react"
import Navbar from "@/app/mycomps/Navbar"
import Cookies from "js-cookie"
import Elitelogo from "../../../public/elitlogo.png"
import Image from "next/image"
import useOpencontext from "@/app/mycomps/hooks/useOpencontext"
import { useRouter } from "next/navigation";
import Resourcenav from "@/app/mycomps/Resourcenav";
export default function Forex(){
    const [darkMode,setDarkMode] = useState<boolean>(false)
    const {isOpen} = useOpencontext()
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

        <div className={darkMode?(isOpen?"dark  overflow-hidden relative h-screen bg-black  text-white":"dark bg-black relative text-white"):(isOpen?"overflow-hidden h-screen relative":"")}>
            <Resourcenav />
        

      
                <main className="px-5 py-5">
                <h1 className="text-2xl font-semibold mb-2">Trade the most popular currency pairs with limited risk and low cost</h1>

                <p className="mb-4">
                Forex market (short for “foreign exchange”) is the largest and the most liquid financial market where the global currencies are traded. Forex traders purchase currencies with the intent to make money off of the difference between the buying and the selling prices.
                </p>

                <p className="mb-4">
                Get in on the action of the most traded market in the world.
                </p>
                <p className="mb-4">
                The largest volume market in the world is currency exchange, with an average daily turnover of five trillion dollars. Traded across the global banking system, the spot forex market offers tremendous liquidity and opportunity.
                </p>

                <p className="mb-4">
                Elite Trading Hub offers 10 of the most popular forex pairs as limited-risk binary options and spreads. You can trade them 24 hours a day, 5 days a week.

                </p>

                <p className="mb-4">
                The forex market has an average daily turnover of $5 trillion as traders strive to turn a profit by speculating on the value of one currency compared to another. Ready to be part of the market moves with a global leader in online currency trading?
                </p>

             
                </main>
        </div>
    )
}