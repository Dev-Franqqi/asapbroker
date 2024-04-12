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
export default function Strategiesforforex(){
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
               <p className="mb-5">
               There are many things to consider when trading forex. These choices become even more important for many individual traders because they aren&apos;t trading forex for a living, but are rather part-time traders, with other jobs and commitments. This can make things extremely difficult in a fast moving market like the currency markets, but there are some strategies you can follow to help you have a better chance at success when trading forex, even if you&apos;re a part-time trader.
               </p>

               <p className="mb-5">
               Choose a time frame to trade and focus on the most active currency pairs during that time frame. If you&expos;re trading full time it makes sense to trade during the U.S. session, because most USD currency pairs will be most active during this time. Many traders won&expos;t have this luxury however, so they need to make a plan that takes into account what currencies are most active during the times that they are trading. Those in the U.S. who trade in the evenings may want to focus on AUD pairs. If you&expos;re trading later in the night (after 9pm EST or 2am GMT) you can also look at other Asian currency pairs such as the Japanese Yen, Hong Kong dollar and Singapore dollar. If you&expos;re a morning person and want to trade at say 4am or 5am EST your best bet is to look into the Euro and Great Britain&expos;s Pound. The point is, no matter when you choose to trade, your best strategy is to focus on the most active currencies during that time frame.
               </p>

               <p className="mb-5">
               Consider trading longer time frames. Some forex traders focus exclusively on daily and weekly charts and place trades that can last for days and weeks as well. They claim that the market is more predictable when trading these longer time frames. If you&apos;re a part-time trader this may be a good strategy for you to use since you can&apos;t always have your eye on the markets. Even if you&apos;re trading full-time you may want to use this strategy as it gives you the chance to analyze the markets more completely before making a trade. It may not sound as exciting as the fast-paced world of day trading, but it can be just as successful in the long run.
               </p>

               <p className="mb-5">
               Always have a plan when trading. This is a strategy that applies to everyone. It doesn&apos;t matter if you&apos;re a new or experienced trader, if you&apos;re trading short or long time frames, or if you&apos;re trading based on technical or fundamental analysis. You will always need a plan that includes an entry and exit point, what direction you&apos;ll trade, why you believe the market will move in the direction you choose, and a stop loss level that will take you out of the trade if it doesn&apos;t go as planned. This single strategy should be the backbone of your trading throughout your career.
               </p>

               <p className="mb-5">
               By using strategies that increase the chance of success and decrease the chance of failure you can survive in the market long enough to gain the experience necessary to become a successful full-time trader. Even when following these strategies you&apos;ll find that the forex markets are risky however, so always be prepared for losses, and have a strategy to deal with those as well as the hope for succesful trades.

               </p>
            
                </main>
        </div>
    )
}