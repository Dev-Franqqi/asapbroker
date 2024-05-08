'use client'
import { FaAngleLeft } from "react-icons/fa6";
import { useEffect } from "react"
import { useState } from "react"
import Navbar from "@/app/mycomps/Navbar"
import Cookies from "js-cookie"
import Elitelogo from "../../../public/elitlogo.png"
import Image from "next/image"
// import useOpencontext from "@/app/mycomps/hooks/useOpencontext"
import { useRouter } from "next/navigation";
// import Resourcenav from "@/app/mycomps/Resourcenav";
export default function Howisitdone(){
   
    

    return(

        <div >
            
        

      
                <main className="px-5 py-5">
                <h1 className="text-3xl font-semibold mb-5">Strategies of CFDs</h1>

                <p>
                When you get started trading CFDs there are a few basic strategies you want to follow to make the most of your trading experience. It&apos;s true that trading the markets can be complicated and will seem incredibly difficult at first, but by following three strategies you can soon get up to speed and hopefully improve your trading success.
                </p>

                <p className="mt-4">
                These three simple strategies are below:

                </p>

                <ol className="list-decimal px-4 mt-3">

                    <li className="mb-4">
                    Focus on a small number of markets. With so many different markets available to trade with CFDs you might be tempted to try them all. This often process to be a recipe for disaster. Instead put your focus on no more than three markets initially and you&apos;ll be able to improve more quickly. If you focus on a small number of markets you will have time to research each of the markets in depth each day. You&apos;ll be able to place small trades in at least one and perhaps all each day as well. And with each passing day and each new trade you&apos;ll learn more about what makes that market tick. You&apos;ll see what the normal volumes are, you&apos;ll find out if the market moves more at certain times of the day, and you&apos;ll learn which economic reports are likely to move the markets. This is the best strategy if you want to become an expert in any given market.
                    </li>

                    <li className="mb-4">
                    Decide what timeframe is best for you. Some traders love the excitement that comes from trading very short time frames, but others can&apos;t stand the stress of making split second decisions, and prefer to trade longer time frames. Decide when you begin trading if you&apos;ll be a long term trader who focuses on weekly and monthly time frames, or a short term trader who focuses on daily, or even moves that can occur in minutes. By utilizing this strategy you&apos;ll be a more relaxed trader and a more confident trader as you follow your own personality traits rather than trying to fight your natural tendencies.
                    </li>

                    <li className="mb-4">
                        Have a trading plan. It&apos;s critically important that you don&apos;t just jump into the markets without a plan. Before placing any trade you should have already completed your daily research and know whether you want to go long or short, why you&apos;re planning on going long or short, where you&apos;ll enter and exit your trade, and how much capital you&apos;ll risk on each trade. By having all of this decided in advance you can avoid putting your capital at greater risk than you&apos;re willing to accept. You are also more likely to avoid mistakes that many traders make when they trade without a plan, most notably those related to greed and fear.
                    </li>

                    <p className="mt-4">
                    These three basic strategies are not only enough to get you started in trading CFDs, they will also serve you well for your entire trading career. Always keep them in mind and if you stray from them focus on getting back to the basic strategies.
                    </p>

                </ol>

             
                </main>
        </div>
    )
}