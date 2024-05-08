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
export default function Forextrading(){
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
                <h1 className="text-2xl mb-3 font-semibold">Forex Trading?</h1>
                <p className="mb-3">
                Forex trading is the act of buying one currency while simultaneously selling another currency, with the aim of profiting from the changes in the values of these two currencies over time. Of course forex trading can also lead to losses, which makes it a risky venture and one that should be examined closely before committing any actual trading capital. One benefit of forex trading is the huge volumes traded in forex markets each day, which eliminates any liquidity issues, at least for the currencies of the largest economies.
                </p>

                <p className="mb-3">
                Another benefit to forex trading is that anyone can participate with just a small initial investment. There is a tradeoff however. The small capital requirements in trading forex are due to the use of leverage when trading forex. For example, if the leverage used is 1:400, this means that an investor can control $10,000 worth of currencies with an investment of as little as $25. While this can generate profits more rapidly, it can also lead to losses more rapidly and if the traders account is small they may soon find themselves the victim of a margin call and the loss of all their trading capital.

                </p>

                <p className="mb-3">
                The knowledge and skill required to successfully trade forex makes it anything but simple. Those considering forex trading should be sure that they have sufficient capital and that they are able to withstand the risks presented by forex trading, which include the potential loss of all your trading capital.
                </p>
            
                </main>
        </div>
    )
}