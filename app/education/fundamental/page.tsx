'use client'
import { useEffect,useState } from "react"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"
import Link from "next/link"
import { IoIosArrowDropright } from "react-icons/io";
export default function Fundamental(){
    const router = useRouter()
    const gotoHome = ()=>{
        router.push('/')
    }
    const [darkMode,setdarkMode] = useState(false)
    const setToDarkMode = ()=>{
        setdarkMode(true);
        Cookies.set('dark','true')
    }
    const setLightMode = ()=>{
        setdarkMode(false);
        Cookies.set('dark','false')
    }


    useEffect(()=>{
        const dark = Cookies.get('dark');
        if(dark){
          if(dark==='true'){
            setdarkMode(true)
          }
        }
        else{
          setdarkMode(false)
          
        }
      },[])

    return(
        <>

        <div className={darkMode?' px-2 dark bg-black md:h-screen text-gray-300':' px-2 md:h-screen'}>
            <nav className="flex justify-between">


            <div className="py-2 gap-3 flex">
            <svg xmlns="http://www.w3.org/2000/svg" onClick={gotoHome} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:text-[#8670FC]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg><header className="text-xl font-bold">Fundamental Analysis</header></div>
{!darkMode &&  <svg
    onClick={setToDarkMode}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 mt-2 md:text-black mr-2 hover:text-[#8670FC]"
>
    <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
    />
</svg>}
{darkMode && <svg xmlns="http://www.w3.org/2000/svg" onClick={setLightMode} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 mt-2 text-[#8670FC]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>
}

</nav>

<main className="p-2 py-6">

      <h1 className="text-center font-bold text-3xl mb-7">Forex And CFD Fundamental Analysis</h1>  
        
        <p className="mb-3"> 
        Forex and CFD traders must understand the difference between fundamental analysis and technical analysis. Traders are always arguing over which school is best. This piece will look at the basics of Forex/CFD fundamental analysis and how to use this form of market analysis. Most brokers try to sell trading Forex and CFDs by tossing jargon like economic calendars, NFP, trading events, and fundamental analysis to prospective clients. They make it seem like trading is as straight forward as checking the calendar for a significant release. However, trading on events and following an economic calendar is anything but simple and should never be confused with fundamental analysis.
        </p>
        <p className="mb-3"> 
        Fundamental analysis is the study of the events and factors that influence the price of a financial instrument, such as stocks, commodities, indices and currencies. Unlike technical analysis, fundamental analysis involves the analysis of financial and economic data to measure the intrinsic value of an underlying asset. This data can range from major global events to company data. Many events are interconnected, affecting the price of different classes of assets and different assets.
        </p>
        <p className="mb-3"> 
        Assets always have an intrinsic value and a market value. When the intrinsic and market values differ, there is an opening for correction when a significant news item is released. The news may trigger a change to the inherent or fundamental value of an asset, which leads to a certain reaction from traders and other market participants following the asset. Their response forces the value of the asset to swing towards the intrinsic value of the asset. Comparing an asset&apos;s intrinsic value with its market value to buy or sell is the basis of fundamental analysis.
        </p>
        <p className="mb-3"> 
        It is impossible to understand every piece of information released. Fortunately, traders can pick a few assets to trade and focus their attention on those assets, and on the fundamental events and factors that affect them. This is especially possible with the advent of the internet. However, it is also important to follow the more general worldwide and financial headlines so as to put information into a larger context.

        </p>
        <p className="mb-3"> 
        Some of the factors to consider when applying fundamental analysis include:

        </p>
        <ul className="list-disc p-4">
    <li>Natural events that can affect the forces of supply and demand</li>
    <li>Political events that can have a significant impact on the price of different assets</li>
    <li>The financial market sentiment</li>
    <li>The release of economic data such as GDP, interest rates, retail sales, and unemployment</li>
</ul>
<p className="mb-3"> 
Conducting fundamental analysis is the same for each currency pair or underlying asset, but traders should be aware that factors causing a shift in the fundamentals of these assets can vary with each asset class. For example, the price of agricultural commodities will be affected by natural events such as weather patterns and disease. For stocks, traders should look at factors such as mergers and acquisitions, earning reports, company news, etc. Currencies are most affected by changes in interest rates, the pace of growth in world economies, and geopolitical events.

</p>
<p className="mb-3"> 
Fundamental analysis is a useful tool, which is designed to give traders a better view of the market. It also allows them to anticipate and predict future price trends to help improve success in the markets.
</p>
    </main>
        </div>

        </>
    )
}