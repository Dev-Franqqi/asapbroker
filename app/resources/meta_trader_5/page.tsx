'use client'
import { useState ,useEffect} from "react"
import Cookies from "js-cookie"
import useOpencontext from "@/app/mycomps/hooks/useOpencontext"

import Image from "next/image"
import Mt5 from "../../../public/mt5.jpg"
import Link from "next/link"
export default function Metatrader5(){
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
    return(<main className={darkMode?'p-5 bg-black text-white':'p-5'}>
    <h1 className="text-3xl font-bold mb-4">MetaTrader5</h1>
    <p className="mb-4">
    Successful trading on financial markets begins with a comfortable and multi-functional trading platform. MetaTrader 5 is the best choice for the modern trader! MetaTrader 5 is an institutional multi-asset platform offering outstanding trading possibilities and technical analysis tools, as well as enabling the use of automated trading systems (trading robots) and copy trading. MetaTrader 5 is an all-in-one platform for trading Forex, Stocks and Futures. MetaTrader 5 allows you to enjoy the freedom of movement to the full extent — you can stay active while trading from smartphones and tablets. The Web Platform provides even more possibilities and allows you to work from any web browser and any device. By choosing the most convenient way from a variety of options, you can trade 24 hours a day!

    </p>

    <section className="mt-4 pt-3">
        <h2 className="text-2xl font-semibold">MetaTrader5 (MT5)</h2>
        <p className="mb-4">
        Following the huge success of the MT4, MetaQuotes have designed the successor of the mighty platform. Its sleek and upgraded interface provides an even more enhanced trading experience with lots more of additional features that give users an innovative and cutting-edge approach to trading.
        </p>
    </section>

    <section className="mt-4 pt-3">
        <h3 className="font-semibold text-xl">Elevate your trading with MT5&apos;s unique features:</h3>

        <div className="md:flex md:justify-between ">


        <ul className="list-disc p-4">
    <li>Flexible Trading System: Hedging Option Available</li>
    <li>Fundamental Analysis</li>
    <li>Additional Pending Order Types</li>
    <li>Advanced Strategy Tester</li>
    <li>Trading Tab for One-Click Trading</li>
    <li>Trading Signals</li>
    <li>Highlighted Entry/Exit Points</li>
    <li>Multi-currency/language support</li>
</ul>
<Image src={Mt5} alt=''/>
</div>



    </section>
    <section className="mt-4 pt-3">
        <h3 className="font-semibold text-xl">Setup</h3>
        <ul className="list-disc p-4">
    <li>Download the platform and follow the few simple steps to complete the installation.</li>
    <li>When installation is complete, launch the application.</li>
    <li>Select &apos;File&apos; from the menu, then &apos;Login&apos; and enter the MetaTrader login details that were emailed to you to access your trading account.</li>
    <li>Select which server you want from the drop-down menu.</li>
    <li>Start Exploring MT5.</li>
</ul>


<h3 className="font-semibold text-xl">Notes</h3>
<p className="mb-4">Once you have installed this application you may be asked to provide some personal information in order to proceed.</p>
    </section>
    <section className="mt-4 pt-3">
        <h3 className="font-semibold text-xl">Trading Signals</h3>
        <p className="mb-4">
        These are price recommendations received from a third party. MT5 allows you to connect to any signal provider and copy their trades. Browse through a selection of traders and choose the one whose strategy suits you most and simply connect to his signal. All signal providers are carefully chosen and monitored ensuring that only experienced traders can become providers.
        </p>

        <Link href="https://www.metatrader5.com/en/download"className="text-blue-500">Download MT5 Platform</Link>
    </section>
    </main>)
}