'use client'
import { useState ,useEffect} from "react"
import Cookies from "js-cookie"

import Image from "next/image"
import Mt4 from "../../../public/mt4.jpg"
import Link from "next/link"
export default function Metatrader4(){

    return(<main className={'p-5'}>
    <h1 className="text-3xl font-bold mb-4">MetaTrader4</h1>
    <p className="mb-2">
    MetaTrader 4 is a platform for trading Forex, analyzing financial markets and using Expert Advisors. Mobile trading, Trading Signals and the Market are the integral parts of MetaTrader 4 that enhance your Forex trading experience. Millions of traders with a wide range of needs choose MetaTrader 4 to trade in the market. The platform offers ample of opportunities to traders of all skill levels: advanced technical analysis, flexible trading system, algorithmic trading and Expert Advisors, as well as mobile trading applications. Signals and Market additional services extend MetaTrader 4 frontiers. The Signals service allows you to copy trades of other traders, while the Market provides you with various Expert Advisors and Technical indicators that you can buy.
    </p>
    <section className="mt-4 mb-2">
        <h2 className="text-xl font-semibold">MetaTrader4 (MT4)</h2>
        <p className="mb-2">
        Through MT4 you can create your own personal workplace, whether you are trading forex, CFDs or Futures Contracts. Fully equipped with both back-office reporting functions and front-end terminals, this trading platform gives you access to the most essential tools and resources needed to analyze the market and to start trading. The MT4 is the answer to your needs; it&apos;s fast and effective, user friendly and flexible and it has been tested worldwide and chosen as a favorite amongst traders and institutions.
        </p>

    </section>

    <section className="mt-4 mb-2">
        <h3 className="text-lg font-semibold mb-2 ">Some of the advantages you will enjoy</h3>
        <ul className=" list-disc px-4">
            <li>Flexible and fast trading platform</li>
        <li>
            Trading signals from top providers
        </li>
        <li>Expert advisors for algorithmic trading</li>
        <li>
        Global accessibility from PC, web & mobile
        </li>
        <li>
            Guardian angel and many analytic tools
        </li>
        <li>
            Multiple timeframes for trading purposes
        </li>
        <li>
            Multi-currency/language support
        </li>
        </ul>
    </section>

    <section className="mt-4 mb-2">
        <Image className="mb-4" src={Mt4} alt="" />

        <ul className="list-disc px-4">
    <li>Download the platform and follow the quick, simple steps to proceed with installation.</li>
    <li>When installation is complete, launch the application.</li>
    <li>Select &apos;File&apos; from the menu, then &apos;Login&apos; and enter the MetaTrader login details that were emailed to you to access your trading account.</li>
    <li>Select which server you want from the drop-down menu.</li>
</ul>
<h3 className="text-lg font-semibold mb-2 ">
Notes
</h3>
<p>
Once you have installed this application you may be asked to provide some personal information in order to proceed.
</p>
<Link className="text-blue-500" href="https://www.metatrader4.com/en/download">Download MT4 Platform</Link>
    </section>
    </main>)
}