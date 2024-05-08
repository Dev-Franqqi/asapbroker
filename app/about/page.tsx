'use client'
import { useEffect,useState } from "react"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"
export default function About(){
   

    return(
        <>

        <div className="px-2">
           

<main className="text-base px-2 pt-10">
    <h1 className="text-center text-2xl mb-5 font-bold">About us</h1>
<p>
Elite Trading Hub is one of the leading platforms in Switzerland offering Crude Oil Trading, Forex and spreads. Regulated by the CFTC and based in New York, with member funds held in segregated accounts in major US banks, Elite Trading Hub offers secure and innovative ways to participate in the markets.
    </p>
    <p className="mt-4">
    Using Elite Trading Hub online, traders can take positions on short-term price movements in a wide range of markets. From one account, you can trade stock indices, forex, commodities, bitcoin, and economic events. With 5000 hourly, daily and weekly contracts traded 5 days a week, 24 hours a day, Elite Trading Hub traders get an ongoing series of short-term trading opportunities.
    </p>

    <p className="mt-4">
    We help our clients trade financial markets on leverage through CFDs. This product allows you to find opportunity in both rising and falling markets, and isn&apos;t confined to one asset class – you can choose to trade on indices, forex, shares, commodities and more:
    </p>
    <p className="mt-4">
    Elite Trading Hub is also regulated by the International Financial Services Commission of Belize, as well as the Cyprus Securities and Exchange Commission, licensed by the Financial Services Board (FSB) of Switzerland. The company is also registered with the Financial Conduct Authority of the UK.

    </p>

    <section className="mt-5">


    <h1 className="text-4xl font-bold mb-3">Quick Facts</h1>
    <ul className=" list-disc px-2">
    <li>US-based, CFTC-regulated exchange</li>
    <li>Member funds held in segregated US bank accounts</li>


        <li>Limited risk with predefined maximum possible loss</li>
        <li>Low minimum opening account balance</li>
    </ul>
    <h2>Get Started. Fill out our online application in just a few minutes</h2>
    </section>

    
</main>


        </div>
        
        </>
    )
}