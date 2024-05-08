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
import Bitcoin from "../../../public/bitcoin.jpg"
import Link from "next/link";
export default function Crude(){
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
                    <h1 className="text-2xl font-semibold">Bitcoin Spreads: A Better Way</h1>
                
                    <p className="mt-4">
                    Our Bitcoin Spreads let you trade the price of Bitcoin (based on the trusted TeraBit IndexSM) without having to own bitcoins. There&apos;s no need for wallets or conversion, since the contracts are settled in US dollars.
                    </p>
                    <p className="mt-4">Best of all, it&apos;s as easy to trade price drops as it is to trade rallies. Short-selling Bitcoin is as easy as buying when you use Bitcoin Spreads.
As the price of Bitcoin varies up and down, the spread&apos;s value moves as well, but with limits. Above the ceiling or below the floor, the value of the spread stops moving and remains at its upper or lower limit (depending on whether you are a buyer or seller).</p>

<p>
In this way, your risk-reward remains within a defined range. One limit is your profit target. The other is your guaranteed protection against unlimited losses.

</p>



<section>
    <h3 className="text-2xl mt-4 font-semibold">Bitcoin opportunity without the hassle</h3>

    <p className="mt-4">
    Since its &apos;hacker&apos; beginnings, Bitcoin and cryptocurrency have gone mainstream and soared in value. More traders than ever want to add cryptocurrencies to their portfolios.
However, the volatility makes the Bitcoin market good for short-term trades, not just &quot;buy and hold.&quot;
    </p>
    <p className="mt-4">
    Our Bitcoin Spreads allow you to take short-term positions on the price of Bitcoin, with risk-reward protections built in. Selling is as easy as buying, meaning you have profit opportunities no matter which direction the Bitcoin market is trending.
Trade the price of Bitcoin without buying and selling the bitcoins themselves. No &quot;mining,&quot; no risk exposure outside your comfort level—you can just trade with all the benefits of our platform: limited risk, transparent price, and CFTC regulation.
    </p>

</section>
<Image className="mt-3" src={Bitcoin} alt='' />
                </main>
        </div>
    )
}