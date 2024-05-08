'use client'
import { useEffect,useState } from "react"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"
import Link from "next/link"
import { IoIosArrowDropright } from "react-icons/io";
export default function Technical(){
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
</svg><header className="text-xl font-bold">Technical Analysis</header></div>
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
<main className="p-5">

<h1 className="font-bold mb-4 text-3xl">
The Importance of Technical Analysis in Forex and CFDs

</h1>
<p className="mb-3">
Investors have thousands of opportunities to trade assets online, and to become successful investors traders must identify trends and be able to predict the future value of financial assets. The importance of Forex and CFD technical analysis is crucial to help streamline these decisions and determine the optimal trades that meet the overall goals.
In fact, technical analysis is especially important in trading Forex to be able to forecast movements of the market, given its high volatility.
</p>

<section className="mt-4 py-3">
    <h2 className="text-xl font-semibold mb-3">What Is Technical Analysis?</h2>
    <p className="mb-3">
    Technical analysis studies the behavior of the market, primarily through the use of graphic tools, market indicators and reports in order to predict future trends in the price of an asset. The analysis is based on three basic premises; these assumptions are:

    </p>
    <ol className="list-decimal p-4">
    <li>The price reflects the overall stability of an asset; there are many elements that affect the market and these are reflected in the share price. Mainly supply and demand is causing this rise or fall in prices. As a technical analyst, you should not care about the factors causing changes, but limit your analysis to the consequences.</li>
    <li>Prices move in trends; this is pretty straightforward; prices always move in trends, upward and downward, depending on the circumstances that occur in each moment in the markets. The purpose of technical analysis is to define the trends, and prepare to start your trades in that direction.</li>
    <li>History repeats itself; certain trends in the markets tend to reoccur again and again. It really comes in handy to perform comparisons and examine the past behavior of an asset before deciding what to do with your investment, depending on that asset&apos;s history.</li>
</ol>



<p className="mb-3">
With this style of analysis, a trader will use market trends to predict price movements of an asset in the future. The purpose of this technique is to estimate the present value of the asset, but to determine patterns in the fluctuation of prices, which helps predict future activity. Understanding these models allows traders to identify potential changes in the value of assets, giving them a good indication of the upward or downward trend in the price of the asset. It&apos;s also important to note that technical analysis is performed the same no matter what underlying asset you are looking at.


</p>

</section>

<section className="mt-4 py-3">
    <h2 className="text-xl font-semibold mb-3">Utilizing Technical Indicators</h2>

    <p className="mb-3">Technical indicators are defined by different mathematical variables and are distinguished into four families based on the information that is desired. They allow you to view real-time changes in the price of a given asset and assess market psychology related asset.
</p>
<p className="mb-3">
Trend indicators: These types of indicators allow the trader to see at-a-glance the tendency of a real-time asset.

</p>
<p className="mb-3">The momentum indicators: These indicators are powerful tools to help appreciate the strength of a current trend.
</p>
<p className="mb-3">
The supports and resistances: These indicators are calculated directly from the highest levels and lower active level and generally allow rules to define the target price.
</p>

<p className="mb-3">
Volatility Indicators: These inform the trader whether the course is in a range and if the asset is trading in a narrow price zone or if the asset is in full rush in a given trend.

</p>

<p className="mb-3">
Online traders quickly learn in order to make more accurate predictions and minimize risk, the importance of technical analysis for CFDs and Forex is a crucial component in their cache of tools.
</p>
</section>


</main>
        </div>

        </>
    )
}