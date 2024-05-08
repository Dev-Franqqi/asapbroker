'use client'
import { useEffect,useState } from "react"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"
import Link from "next/link"
import { IoIosArrowDropleft } from "react-icons/io";
export default function Intermediate(){
    

    return(
        <>

        <div className='p-2'>
           

<main className="p-2">

      <h1 className="text-center font-bold mb-7">Advanced</h1> 

      <h2 className="text-4xl font-semibold mb-5">Opening Range Breakout Trading Strategy</h2> 
      <p className="mb-4">Breakouts are one of the most common trading strategies. They involve identifying a key price level you expect the price to break through, and then buying or selling at that price in order to take advantage. Generally breakouts are used when the market is already near the extreme high or low of the recent past. When the market is trending and moving strongly in one direction, breakout trading ensures that you never miss the move.</p>


        <p className="mb-4">One breakout strategy is the European Opening Range. This strategy typically focuses on EURUSD (Euro/U.S. Dollar), although it could be applied to any of the European majors.</p>


        <p className="mb-4">
        While the Forex Market is open for 24-hours a day (Sunday evening through Friday evening ET), market activity in a given pair is not necessarily consistent throughout.
        </p>

        <h2>Trading the European Opening Range has three steps:</h2>
        <ol className="list-decimal px-2">

            <li className="my-4" >
            First, you identify the high and low during the half hour just prior to the London open (2:30-3am ET).
            </li>

            <li>
            Look for a breakout of this range +/- 10 pips, or 1/10th of the daily Average True Range (ATR), to maintain above/below this level for 10-15 minutes. This is an attempt to detect a direction of the ‘flow’ for the remainder of the day.
            </li>

            <li>
            Finally, you attempt to manage this bullish or bearish bias by focusing on 1-, 2- or 5-minute charts and utilizing a combination of moving averages (13-sma, 144-ema & 169-ema) along with oscillators (RSI, Stochastics & CCI).
            </li>
        </ol>

        <p className="mb-4 mt-4">Other factors to include are major news announcements (usually in efforts of avoidance) as well as the time of day (when major markets open/close, option expirations, fixings, etc). If the Average True Range is achieved earlier in the week, the likelihood of it occurring twice in the same week is dramatically reduced. If this does occur, it’s typically in opposing directions.</p>

        <p className="mb-4 ">
        As a currency trader, when volatility begins to pick up you usually want to be trading, not sitting on the sidelines. As a result, if this strategy has yet to achieve the Average True Range target on Monday, Tuesday or Wednesday of a particular week, then it may be sensible to pay close attention to this tactic on Thursday and Friday. Conversely, if the ATR is reached earlier in the week it may be prudent to be on the lookout for potential market failures in the latter half of the week as they could be the marking of a false break and/or possible outright reversal.
        </p>
    </main>

        
        
        <div className="flex justify-end pb-3 mt-6">

        
        <Link className="text-[#8670FC] flex font-semibold text-right" href="/education/intermediate">Previous Page <IoIosArrowDropleft className="text-2xl ml-2" /></Link>
        </div>
        </div>

        </>
    )
}