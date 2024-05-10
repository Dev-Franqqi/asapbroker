'use client'
import { useEffect,useState } from "react"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"
import Link from "next/link"
import { IoIosArrowDropright } from "react-icons/io";
export default function Education(){
  


  

    return(
        <>

        <div className={'mt-5 px-2 md:h-screen'}>
       
    <div>
      <h1 className="text-2xl font-bold mb-4 mt-2 uppercase px-4">Beginner&apos;s Guide to Trading</h1>
      <p className="px-4">Welcome to our Beginner&apos;s Guide to Trading. Whether you&apos;re completely new to trading or looking to refresh your knowledge, this guide will help you understand the basics of trading in the financial markets.</p>
      <main className="px-4">

      <h2 className="font-semibold mt-4 mb-1 text-lg">What is Trading?</h2>
      <p>Trading involves buying and selling financial instruments such as stocks, currencies, commodities, and indices with the aim of making a profit. Traders speculate on the price movements of these instruments, trying to buy low and sell high.</p>
      
      <h2 className="mt-3 font-semibold text-lg mb-2">Key Concepts</h2>
      <ul>
        <li className="mb-2"><strong>Market</strong>: The place where trading occurs, either physical or virtual.</li>
        <li className="mb-2"><strong>Asset</strong>: The financial instrument being traded, such as stocks, currencies, or commodities.</li>
        <li className="mb-2"><strong>Broker</strong>: A company or individual that facilitates trading by executing buy and sell orders on behalf of traders.</li>
        <li className="mb-2"><strong>Leverage</strong>: The use of borrowed funds to increase the potential return of an investment.</li>
        <li className="mb-2"><strong>Margin</strong>: The amount of money required to open or maintain a trading position.</li>
        <li className="mb-2"><strong>Volatility</strong>: The degree of variation of a trading price series over time.</li>
      </ul>
      
      <h2 className="mt-4 mb-2 text-xl font-semibold">Getting Started</h2>
      <p>Before you start trading, it&apos;s important to educate yourself about the markets and develop a trading plan. Here are some steps to get you started:</p>
      <ol>
        <li className="mb-2"><strong>Educate Yourself: </strong>Learn about the financial markets, different trading strategies, and risk management.</li>
        <li className="mb-2"><strong>Choose a Broker: </strong>Select a reputable broker that offers the instruments you want to trade and suits your trading style.</li>
        <li className="mb-2"><strong>Open an Account: </strong>Follow the broker&apos;s instructions to open a trading account.</li>
        <li className="mb-2"><strong>Deposit Funds: </strong>Fund your trading account with the amount you&apos;re comfortable trading with.</li>
        <li className="mb-2"><strong>Start Trading: </strong>Execute your first trade based on your trading plan.</li>
      </ol>
      
      
      </main>
   
   
    </div>
 

        
        
        <div className="flex justify-end pb-3 mt-6">

        
        <Link className="text-[#8670FC] flex font-semibold text-right" href="/education/intermediate">Intermediate <IoIosArrowDropright className="text-2xl ml-2" /></Link>
        </div>
        </div>

        </>
    )
}