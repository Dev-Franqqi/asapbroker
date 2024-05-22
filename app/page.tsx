'use client'
import Image from "next/image";
import Switchingcomp from "./mycomps/Switchingcomp"
import { FaEuroSign } from "react-icons/fa";
import { FaBitcoinSign } from "react-icons/fa6";
import { FaChartArea } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { MdWaterDrop } from "react-icons/md";
import { FaCube } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { FaChevronDown } from "react-icons/fa6";
import Globe from '../public/global.png'
import { useRouter } from "next/navigation";
import Profit1 from '../public/in-profit-icon-1.svg'
import Profit2 from '../public/in-profit-icon-2.svg'
import Profit3 from '../public/in-profit-icon-3.svg'
import Profit4 from '../public/in-profit-icon-4.svg'
import Profit5 from '../public/in-profit-icon-5.svg'
import useOpen from "./mycomps/hooks/useOpen";
import Tradingviewticker from "./mycomps/Tradingviewticker";
import GoogleTranslate from "./mycomps/GoogleTranslate";
export default function Home(){
  const {open} = useOpen()
  const router = useRouter()
  return(

    
  
    <div className={open?'blur-lg overflow-hidden':''}>

    <Switchingcomp />
    <GoogleTranslate />
    <section className="py-12 px-4 md:bg-gray-200 md:flex md:items-center md:mt-4 ">
      <div className="md:ml-6 ">

      <h2 className="text-2xl text-blue-950 font-semibold md:text-4xl mb-5">Trading products</h2>
      <p className="text-[0.885rem] text-gray-700 font-medium md:text-lg md:w-2/5">Choose from 6 asset classes and get access to 500+ trading instruments</p>
      </div>
      

     <div className="flex flex-wrap gap-y-10 md:w-3/5 md:justify-between mt-10 py-10">
       <div className="w-2/4 md:w-auto ">
         <FaEuroSign className="text-4xl md:rounded-full md:bg-white md:p-3 mx-auto" />
         <p className="mt-3 text-center text-sm">Indexes</p>
     
     </div>
     
       <div className="w-2/4 md:w-auto text-center">
         <FaBitcoinSign className=" text-4xl md:rounded-full md:bg-white md:p-3 mx-auto" />
         <p className="mt-3 text-sm">Crypto</p>
     </div>
       <div className="w-2/4 md:w-auto text-center ">
         <FaChartArea className=" text-4xl md:rounded-full md:bg-white md:p-3 mx-auto" />
         <p className="mt-3 text-sm">Indexes</p>
     </div>
       <div className="w-2/4 md:w-auto text-center ">
         <IoDocumentTextSharp className=" text-4xl md:rounded-full md:bg-white md:p-3 mx-auto" />
         <p className="mt-3 text-sm">Stocks</p>
     </div>
       <div className="w-2/4 md:w-auto text-center ">
         <MdWaterDrop className=" text-4xl md:rounded-full md:bg-white md:p-3 mx-auto" />
         <p className="mt-3 text-sm">Energy</p>
     </div>
       <div className="w-2/4 md:w-auto text-center ">
         <FaCube className=" text-4xl md:rounded-full md:bg-white md:p-3 mx-auto" />
         <p className="mt-3 text-sm">Commodities</p>
     </div>
     </div>
    </section>

    <section className="text-center bg-white py-12 px-3 md:px-24">

      <h2 className="text-4xl text-blue-950 font-semibold  md:font-bold ">Putting our investors first is Key</h2>
      <p className=" mt-3 font-normal text-xl text-gray-500">We are committed to providing all our investors with exceptional service while offering our team the best training.</p>
      <p className="m  mx-0 text-gray-800 font-light mt-5">
      Elite Trading Hub is an International online broker that has been actively operating in the Crypto & Stocks Trading trading markets. With our advanced, web-based trading platform, you can trade on the largest lists of assets in the industry. From Currency pairs, and Commodities to stocks and indices, we have it all. Keep your trading costs down with competitive spreads, commissions and low margins. View spreads on our most popular cash instruments.
      </p>

      <section className="py-16">
        <h3 className="text-3xl mb-5 text-blue-950 font-semibold md:font-bold">Experience more  than Trading.</h3>
        <p className="md:text-lg font-medium text-gray-500">We follow a very strict and disciplined process for investment, as we are aware, that we are dealing with our client&apos;s funds. Investment means a lot to us, and we respect the trust of our clients.

</p>
<FaChevronDown className="mx-auto mt-8 animate-bounce"  />
      </section>

      <section className="text-left md:flex md:px-0 md:flex-wrap md:gap-x-5 md:justify-center">
        <div className="border-2 mb-5 px-6 py-16 rounded-lg mx-2 md:w-[40%]">

          <div className="flex gap-3">
            <span className="w-2  bg-black"></span>
          <div>
          <p className="text-2xl font-semibold text-blue-950">Economic</p>
          <p className="text-xl text-gray-600">Analysis</p>

          </div>
          </div>
          <p className="mt-10 text-gray-700">
          Stay ahead of the markets with world-leading market analysis. Keep your trading costs down with competitive spreads, commissions and low margins.
          </p>




        </div>
        <div className="border-2 mb-5 px-6 py-16 rounded-lg md:w-[40%] mx-2">

          <div className="flex gap-3">
            <span className="w-2  bg-black"></span>
          <div>
          <p className="text-2xl font-semibold text-blue-950">Technical</p>
          <p className="text-xl text-gray-600">Analysis</p>

          </div>
          </div>
          <p className="mt-10 text-gray-700">
          Real-time and detailed data monitoring on trades, stocks and binary with clear graphical demonstration. Additional reference for users with pool data.
          </p>




        </div>
        <div className="border-2 mb-5 px-6 py-16 rounded-lg md:w-2/4 mx-2">

          
          <hr />
          <p className="mt-10 text-gray-700">
          The complex world of Trading just got a lot easier. Our Goal is to help you invest in the main financial markets of the world.
          </p>




        </div>
      </section>
    </section>

    <section className="bg-[#01123C] overflow-x-hidden w-[100vw] md:h-[40rem] md:overflow-hidden md:pb-16 px-4 pt-16 text-white">
      <h3 className="text-2xl text-gray-300 font-semibold mb-6 md:ml-10">ACCESS TO OUR FINANCIAL MARKETS</h3>
      <p className="text-gray-300 md:w-2/5 md:ml-10">
      Bitcoin is the first decentralized digital money. This cryptocurrency was created in 2009. It was originally mentioned on October 31, 2008 when a person who calls himself Satoshi Nakamoto and who is considered to be a founder of Bitcoin published an article under the title Bitcoin: A Peer-to-Peer Electronic Cash System. Bitcoin gave a start to the whole new era of cryptocurrencies. Subsequently, the first block and the first 50 bitcoins were generated. In 2016 and 2017, trading bitcoins has been growing quite popular with retail traders and major investors. The leading trading floors such as CME Group and CBOE Global Markets have already introduced trading futures on bitcoins.
      </p>

      <div className="mt-10 flex flex-col md:flex-row md:gap-x-[6rem] md:z-50 md:justify-center gap-y-10">

       <div>
        


        <div className="flex gap-x-2">
          <span className="w-3 bg-gray-700 h-10"></span>
          <p className="text-3xl font-semibold">9534+</p>
        </div>
        
<p className="mt-2">
Ongoing Trades
  </p>       </div>
       <div>
        


        <div className="flex gap-x-2">
          <span className="w-3 bg-gray-700 h-10"></span>
          <p className="text-3xl font-semibold">34K+</p>
        </div>
        
<p className="mt-2">
Registerd Members
  </p>       </div>
       <div>
        


        <div className="flex gap-x-2">
          <span className="w-3 bg-gray-700 h-10"></span>
          <p className="text-3xl font-semibold">16455+</p>
        </div>
        
<p className="mt-2">
Online Members
  </p>       </div>
       <div>
        


        <div className="flex gap-x-2">
          <span className="w-3 bg-gray-700 h-10"></span>
          <p className="text-3xl font-semibold">5M+</p>
        </div>
        
<p className="mt-2">
Total Payouts
  </p>       </div>





      </div>
      <Image className="relative -top-72 md:top-[0rem] left-60 md:left-[50rem]" src={Globe} alt=''/>

    </section>

      <section id='f' className="px-4 py-10 bg-white">
        <h3 className="text-3xl font-semibold mb-4 md:text-center text-[#3F3453]">Why Elite Trading Hub is a trusted Crypto & Stocks Trading broker </h3>
        <p className="text-lg md:text-center">
        While existing solutions offer to solve just one problem at a time, our team is up to build a secure, useful, & easy-to-use platform.
        </p>

      <div className='md:flex md:flex-wrap md:gap-x-6 md:items-center' >

        <div className="mt-4 md:w-[30%]">
          <Image width={50} height={50}  className="" src={Profit1}  alt=''/>
          <div className="flex gap-x-3 mt-4 mb-4">
            <span className="w-2  bg-gray-700"></span>
            <p className="font-semibold text-xl">200x leverage trading</p>
          </div>
            <p>
            We have a ultra fast execution, tight spreads, and advanced platform features, we make to sure increase profitability.
            </p>
        </div>
        <div className="mt-10 md:w-[30%]">
          <Image width={50} height={50}  className="" src={Profit2}  alt=''/>
          <div className="flex gap-x-3 mt-4 mb-4">
            <span className="w-2  bg-gray-700"></span>
            <p className="font-semibold text-xl">Low Fees</p>
          </div>
            <p>
            Adoption of PPS+ and PPLNS payment methods. Transaction fees will be paid for both methods. A setup fee so low as to guarantee safety and daily profits.
            </p>
        </div>
        <div className="mt-10 md:w-[30%]">
          <Image width={50} height={50}  className="" src={Profit3}  alt=''/>
          <div className="flex gap-x-3 mt-4 mb-4">
            <span className="w-2  bg-gray-700"></span>
            <p className="font-semibold text-xl w-48">Fully Transparent</p>
          </div>
            <p>
            Real-time and detailed data monitoring on trades, stocks and binary with clear graphical demonstration. Additional reference for users with pool data.
            </p>
        </div>
        <div className="mt-10 md:w-[30%]">
          <Image width={50} height={50}  className="" src={Profit4}  alt=''/>
          <div className="flex gap-x-3 mt-4 mb-4">
            <span className="w-2  bg-gray-700"></span>
            <p className="font-semibold text-xl w-48">Committed to forex education</p>
          </div>
            <p>
            Adoption of PPS+ and PPLNS payment methods. Transaction fees will be paid for both methods. A setup fee so low as to guarantee safety and daily profits.
            </p>
        </div>
        <div className="mt-10 md:w-[30%]">
          <Image width={50} height={50}  className="" src={Profit5}  alt=''/>
          <div className="flex gap-x-3 mt-4 mb-4">
            <span className="w-2  bg-gray-700"></span>
            <p className="font-semibold text-xl w-48">Competitive commisions</p>
          </div>
            <p>
            Reasonable fees for takers and makers, special conditions for high-volume traders, and strong offers for market makers.
            </p>
        </div>
      </div>



         
      </section>


      <section className="px-4 py-10">
        <h3 className="text-center text-2xl font-semibold mb-10">Account Types</h3>
      
        <div className="md:flex md:flex-wrap md:px-20 md:gap-x-8 text-[#777676] md:items-center">

        <div className="md:w-[30%]">

        <div className="flex gap-x-3 mt-4 mb-4">
            <span className="w-2  bg-gray-700"></span>
            <p className="font-semibold text-xl w-48 text-[#5E556F]">STARTER</p>
          </div>
          <ul className="list-none flex flex-col gap-y-5">
  <li>
  ✓ Trading Instruments: 36 currency pairs, Metals, Cryptocurrencies
  </li>
  <li>✓ Minimum deposit: 1,000 USD / 1,000 EUR</li>
  <li>✓ Spread: Floating from 1.3 pips</li>
  <li>✓ Maximum leverage: 1:2000</li>
  <li>✓ Return on Investment: 10%</li>
  <li>✓ Deposit bonuses: All offers</li>
  <li>✓ Loyalty bonuses: All offers</li>
</ul>
<Button onClick={()=>router.push('/signup')} className='bg-main mt-7 text-white'>Choose plan</Button>

        </div>
        <div className="mt-14 md:w-[30%]">

        <div className="flex gap-x-3 mt-4 mb-4">
            <span className="w-2  bg-gray-700"></span>
            <p className="font-semibold text-xl w-48 text-[#5E556F]">BASIC</p>
          </div>
          <ul className="list-none flex flex-col gap-y-5">
  <li>
  ✓ Trading Instruments: 36 currency pairs, Metals, CFD on US stocks, CFD on Indices, CFD on Oil, Cryptocurrencies
  </li>
  <li>✓ Minimum deposit: 5,000 USD / 5,000 EUR</li>
  <li>✓ Spread: Floating from 1.3 pips</li>
  <li>✓ Maximum leverage: 1:2000</li>
  <li>✓ Return on Investment: 15%</li>
  <li>✓ Deposit bonuses: All offers</li>
  <li>✓ Loyalty bonuses: All offers</li>
</ul>
<Button onClick={()=>router.push('/signup')} className='bg-main mt-7 text-white'>Choose plan</Button>

        </div>
        <div className="mt-14 md:w-[30%]">

        <div className="flex gap-x-3 mt-4 mb-4">
            <span className="w-2  bg-gray-700"></span>
            <p className="font-semibold text-xl w-48 text-[#5E556F]">CORE</p>
          </div>
          <ul className="list-none flex flex-col gap-y-5">
  <li>
  ✓ Trading Instruments: 36 currency pairs, Metals, CFD on US stocks, CFD on Indices, CFD on Oil, Cryptocurrencies
  </li>
  <li>✓ Minimum deposit: 10,000 USD / 10,000 EUR</li>
  <li>✓ Spread: Floating from 0 pips</li>
  <li>✓ Maximum leverage: 1:500</li>
  <li>✓ Return on Investment: 20%</li>
  <li>✓ Deposit bonuses: All offers</li>
  <li>✓ Loyalty bonuses: All offers</li>
</ul>
<Button onClick={()=>router.push('/signup')} className='bg-main mt-7 text-white'>Choose plan</Button>

        </div>
        <div className="mt-14 md:w-[30%]">

        <div className="flex gap-x-3 mt-4 mb-4 ">
            <span className="w-2  bg-gray-700"></span>
            <p className="font-semibold text-xl w-48 text-[#5E556F]">ADVANCED</p>
          </div>
          <ul className="list-none flex flex-col gap-y-5">
  <li>
  ✓ Trading Instruments: More than 12,000: Indices, Real stocks, CFD on stocks, Forex and ETF, CFDs on Oil, CFDs on Metals, CFDs on Brazil Stocks, Cryptocurrencies
  </li>
  <li>✓ Minimum deposit: 50,000 USD / 50,000 EUR</li>
  <li>✓ Spread: Floating from 0.01 USD</li>
  <li>✓ Maximum leverage: 1:300</li>
  <li>✓ Return on Investment: 25%</li>
  <li>✓ Deposit bonuses: All offers</li>
  <li>✓ Loyalty bonuses: All offers</li>
</ul>
<Button onClick={()=>router.push('/signup')} className='bg-main mt-7 text-white'>Choose plan</Button>

        </div>
        <div className="mt-14 md:w-[30%]">

        <div className="flex gap-x-3 mt-4 mb-4 ">
            <span className="w-2  bg-gray-700"></span>
            <p className="font-semibold text-xl w-48 text-[#5E556F]">PREMIUM</p>
          </div>
          <ul className="list-none flex flex-col gap-y-5">
  <li>
  ✓ Trading Instruments: 28 currency pairs, Metals, CFD on US stocks, CFD on Indices, CFD on Oil, Cryptocurrencies.
  </li>
  <li>✓ Minimum deposit: 250,000 USD / 250,000 EUR</li>
  <li>✓ Spread: Floating from 0 pips</li>
  <li>✓ Maximum leverage: 1:300</li>
  <li>✓ Return on Investment: 30%</li>
  <li>✓ Deposit bonuses: All offers</li>
  <li>✓ Loyalty bonuses: All offers</li>
</ul>
<Button onClick={()=>router.push('/signup')} className='bg-main mt-7 text-white'>Choose plan</Button>

        </div>
        </div>



      </section>


        <section className="text-center px-4 bg-white py-20">
          <h4 className='text-xl mb-4 font-medium'>Start trading with EliteTradingHub</h4>
          <h5 className="text-3xl font-semibold mb-10">Fast account opening in 3 simple steps</h5>



          <div className="md:flex md:items-center md:justify-center">




            <div className="md:w-2/6">

              <div className="w-28 h-28 rounded-full text-white mx-auto mt-4 py-10 text-3xl font-semibold bg-main">
                1
              </div>
              <p className="text-xl font-semibold text-blue-950 mt-3">Register</p>
              <p className='text-gray-700 md:w-3/6 md:mx-auto'>Create an account today on our trading platform</p>
            </div>
            <div className=" md:w-2/6">

              <div className="w-28 text-white  h-28 rounded-full mx-auto mt-10 py-10 text-3xl font-semibold bg-main">
                2
              </div>
              <p className="text-xl font-semibold text-blue-950 mt-3">Fund</p>
              <p className='text-gray-700 md:w-3/6 md:mx-auto'>Fund your account using a wide range of funding methods</p>
              
            </div>
            <div className="md:w-2/6">

              <div className="w-28 text-white  h-28 rounded-full mx-auto mt-10 py-10 text-3xl font-semibold bg-main">
                3
              </div>
              <p className="text-xl font-semibold text-blue-950 mt-3">Trade</p>
              <p className='text-gray-700 md:w-3/6 md:mx-auto'>Access 180+ instruments across all asset classes inside the platform</p>

            </div>
          </div>

          <div className="flex flex-col mt-20 mb-3 gap-y-10 md:flex-row md:justify-center md:gap-x-5">





          <div className="mb-5 text-center md:w-[20%]">
            <p className="flex gap-x-2  font-semibold text-2xl text-blue-950 justify-center mb-3"> <FaLessThan className="mt-1" /> <span className="">7.12 ms</span></p>
            <p className="text-sm font-medium text-main">AVERAGE ORDER EXECUTION SPEED</p>
          </div>

          <div className="text-center md:w-[20%]">
            <p className=" mx-auto font-semibold text-2xl text-blue-950 justify-center mb-3">12+</p>
            <p className="text-sm font-medium text-main">INTEGRATED LIQUIDITY PROVIDERS</p>
          </div>


          <div className="md:w-[20%]">
            <p className="flex gap-x-2 font-semibold text-2xl text-blue-950 justify-center text-center mx-auto mb-3"> <FaGreaterThan /> <span> 12,000</span></p>
            <p className="text-sm font-medium text-main">EXECUTED ORDERES PER SECOND</p>
          </div>

          <div className="md:w-[20%]">
            <p className="mx-auto font-semibold text-2xl text-blue-950 justify-center mb-3">$545 K</p>
            <p className="text-sm font-medium text-main">AVERAGE TRADING VOLUME PER DAY</p>
          </div>
          </div>
          

          <Button onClick={()=>router.push('/signup')} className="bg-main mb-4 text-white font-semibold">Set your trading account</Button>
          <p className="text-gray-400">Registration takes only 40 seconds!</p>
        </section>


        <section className="px-4 py-10 md:flex md:justify-center">
          <h3 className="text-3xl font-semibold md:mt-4 md:w-1/5 mb-4">Connect to global capital markets</h3>

          <p className="text-lg text-gray-500 md:w-2/5">
          Trade Binary Options with the best platform, on a wide selection of assets, with high payouts, lightning-fast order execution and get personal customer support around the clock, fast withdrawals and the expertise of industry leaders.
          </p>
        </section>
        <Tradingviewticker />


      
    
        </div>
    
    
  )
}