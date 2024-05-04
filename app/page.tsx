import Navbar from "./mycomps/Navbar"
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
import Profit1 from '../public/in-profit-icon-1.svg'
import Profit2 from '../public/in-profit-icon-2.svg'
import Profit3 from '../public/in-profit-icon-3.svg'
import Profit4 from '../public/in-profit-icon-4.svg'
import Profit5 from '../public/in-profit-icon-5.svg'
export default function Home(){
  return(

    <>
    <Navbar />
    <Switchingcomp />
    <section className="py-12 px-4 ">
      <h2 className="text-2xl text-blue-950 font-semibold mb-5">Trading products</h2>
      <p className="text-[0.885rem] text-gray-700">Choose from 6 asset classes and get access to 500+ trading instruments</p>

     <div className="flex flex-wrap gap-y-10 mt-10 py-10">
       <div className="w-2/4">
         <FaEuroSign className="text-4xl mx-auto" />
         <p className="mt-3 text-center text-sm">Indexes</p>
     
     </div>
     
       <div className="w-2/4 text-center">
         <FaBitcoinSign className=" text-4xl mx-auto" />
         <p className="mt-3 text-sm">Crypto</p>
     </div>
       <div className="w-2/4 text-center ">
         <FaChartArea className=" text-4xl mx-auto" />
         <p className="mt-3 text-sm">Indexes</p>
     </div>
       <div className="w-2/4 text-center ">
         <IoDocumentTextSharp className=" text-4xl mx-auto" />
         <p className="mt-3 text-sm">Stocks</p>
     </div>
       <div className="w-2/4 text-center ">
         <MdWaterDrop className=" text-4xl mx-auto" />
         <p className="mt-3 text-sm">Energy</p>
     </div>
       <div className="w-2/4 text-center ">
         <FaCube className=" text-4xl mx-auto" />
         <p className="mt-3 text-sm">Commodities</p>
     </div>
     </div>
    </section>

    <section className="text-center bg-white py-12 px-3">

      <h2 className="text-4xl text-blue-950 font-semibold ">Putting our investors first is Key</h2>
      <p className=" mt-3 font-medium text-xl text-gray-500">We are committed to providing all our investors with exceptional service while offering our team the best training.</p>
      <p className="mt-4 font-medium mx-0 text-gray-800 ">
      Elite Trading Hub is an International online broker that has been actively operating in the Crypto & Stocks Trading trading markets. With our advanced, web-based trading platform, you can trade on the largest lists of assets in the industry. From Currency pairs, and Commodities to stocks and indices, we have it all. Keep your trading costs down with competitive spreads, commissions and low margins. View spreads on our most popular cash instruments.
      </p>

``
      <section className="py-16">
        <h3 className="text-3xl mb-5 text-blue-950 font-semibold ">Experience more  than Trading.</h3>
        <p className="text-">We follow a very strict and disciplined process for investment, as we are aware, that we are dealing with our client&apos;s funds. Investment means a lot to us, and we respect the trust of our clients.

</p>
<FaChevronDown className="mx-auto mt-8 animate-bounce"  />
      </section>

      <section className="text-left">
        <div className="border-2 mb-5 px-6 py-16 rounded-lg mx-2">

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
        <div className="border-2 mb-5 px-6 py-16 rounded-lg mx-2">

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
        <div className="border-2 mb-5 px-6 py-16 rounded-lg mx-2">

          
          <hr />
          <p className="mt-10 text-gray-700">
          The complex world of Trading just got a lot easier. Our Goal is to help you invest in the main financial markets of the world.
          </p>




        </div>
      </section>
    </section>

    <section className="bg-blue-950 overflow-x-hidden w-[100vw] px-4 pt-16 text-white">
      <h3 className="text-2xl text-gray-300 font-semibold mb-6">ACCESS TO OUR FINANCIAL MARKETS</h3>
      <p className="text-gray-300">
      Bitcoin is the first decentralized digital money. This cryptocurrency was created in 2009. It was originally mentioned on October 31, 2008 when a person who calls himself Satoshi Nakamoto and who is considered to be a founder of Bitcoin published an article under the title Bitcoin: A Peer-to-Peer Electronic Cash System. Bitcoin gave a start to the whole new era of cryptocurrencies. Subsequently, the first block and the first 50 bitcoins were generated. In 2016 and 2017, trading bitcoins has been growing quite popular with retail traders and major investors. The leading trading floors such as CME Group and CBOE Global Markets have already introduced trading futures on bitcoins. .
      </p>

      <div className="mt-10 flex flex-col gap-y-10">

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
      <Image className="relative -top-72 left-60" src={Globe} alt=''/>

    </section>

      <section className="px-4 py-10 bg-white">
        <h3 className="text-3xl font-semibold mb-4">Why Widget Scale is a trusted Crypto & Stocks Trading broker </h3>
        <p className="text-lg">
        While existing solutions offer to solve just one problem at a time, our team is up to build a secure, useful, & easy-to-use platform.
        </p>


        <div className="mt-4">
          <Image width={50} height={50}  className="" src={Profit1}  alt=''/>
          <div className="flex gap-x-3 mt-4 mb-4">
            <span className="w-2  bg-gray-700"></span>
            <p className="font-semibold text-xl">200x leverage trading</p>
          </div>
            <p>
            We have a ultra fast execution, tight spreads, and advanced platform features, we make to sure increase profitability.
            </p>
        </div>
        <div className="mt-10">
          <Image width={50} height={50}  className="" src={Profit2}  alt=''/>
          <div className="flex gap-x-3 mt-4 mb-4">
            <span className="w-2  bg-gray-700"></span>
            <p className="font-semibold text-xl">Low Fees</p>
          </div>
            <p>
            Adoption of PPS+ and PPLNS payment methods. Transaction fees will be paid for both methods. A setup fee so low as to guarantee safety and daily profits.
            </p>
        </div>
        <div className="mt-10">
          <Image width={50} height={50}  className="" src={Profit3}  alt=''/>
          <div className="flex gap-x-3 mt-4 mb-4">
            <span className="w-2  bg-gray-700"></span>
            <p className="font-semibold text-xl w-48">Fully Transparent</p>
          </div>
            <p>
            Real-time and detailed data monitoring on trades, stocks and binary with clear graphical demonstration. Additional reference for users with pool data.
            </p>
        </div>
        <div className="mt-10">
          <Image width={50} height={50}  className="" src={Profit4}  alt=''/>
          <div className="flex gap-x-3 mt-4 mb-4">
            <span className="w-2  bg-gray-700"></span>
            <p className="font-semibold text-xl w-48">Committed to forex education</p>
          </div>
            <p>
            Adoption of PPS+ and PPLNS payment methods. Transaction fees will be paid for both methods. A setup fee so low as to guarantee safety and daily profits.
            </p>
        </div>
        <div className="mt-10">
          <Image width={50} height={50}  className="" src={Profit5}  alt=''/>
          <div className="flex gap-x-3 mt-4 mb-4">
            <span className="w-2  bg-gray-700"></span>
            <p className="font-semibold text-xl w-48">Competitive commisions</p>
          </div>
            <p>
            Reasonable fees for takers and makers, special conditions for high-volume traders, and strong offers for market makers.
            </p>
        </div>


         
      </section>


      <section className="px-4 py-10">
        <h3 className="text-center text-2xl font-semibold mb-10">Account Types</h3>

        <div>

        <div className="flex gap-x-3 mt-4 mb-4">
            <span className="w-2  bg-gray-700"></span>
            <p className="font-semibold text-xl w-48">STARTER</p>
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
<Button className='bg-main mt-7 text-white'>Choose plan</Button>

        </div>
        <div className="mt-14">

        <div className="flex gap-x-3 mt-4 mb-4">
            <span className="w-2  bg-gray-700"></span>
            <p className="font-semibold text-xl w-48">BASIC</p>
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
<Button className='bg-main mt-7 text-white'>Choose plan</Button>

        </div>
        <div className="mt-14">

        <div className="flex gap-x-3 mt-4 mb-4">
            <span className="w-2  bg-gray-700"></span>
            <p className="font-semibold text-xl w-48">CORE</p>
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
<Button className='bg-main mt-7 text-white'>Choose plan</Button>

        </div>
        <div className="mt-14">

        <div className="flex gap-x-3 mt-4 mb-4">
            <span className="w-2  bg-gray-700"></span>
            <p className="font-semibold text-xl w-48">ADVANCED</p>
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
<Button className='bg-main mt-7 text-white'>Choose plan</Button>

        </div>
        <div className="mt-14">

        <div className="flex gap-x-3 mt-4 mb-4">
            <span className="w-2  bg-gray-700"></span>
            <p className="font-semibold text-xl w-48">PREMIUM</p>
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
<Button className='bg-main mt-7 text-white'>Choose plan</Button>

        </div>


      </section>


        <section className="text-center px-4 bg-white py-20">
          <h4 className='text-xl mb-4 font-medium'>Start trading with EliteTradingHub</h4>
          <h5 className="text-3xl font-semibold mb-10">Fast account opening in 3 simple steps</h5>



          <div>




            <div>

              <div className="w-28 h-28 rounded-full text-white mx-auto mt-4 py-10 text-3xl font-semibold bg-main">
                1
              </div>
              <p className="text-xl font-semibold text-blue-950 mt-3">Register</p>
              <p className='text-gray-700'>Create an account today on our trading platform</p>
            </div>
            <div>

              <div className="w-28 text-white  h-28 rounded-full mx-auto mt-10 py-10 text-3xl font-semibold bg-main">
                2
              </div>
              <p className="text-xl font-semibold text-blue-950 mt-3">Fund</p>
              <p className='text-gray-700'>Fund your account using a wide range of funding methods</p>
              
            </div>
            <div>

              <div className="w-28 text-white  h-28 rounded-full mx-auto mt-10 py-10 text-3xl font-semibold bg-main">
                3
              </div>
              <p className="text-xl font-semibold text-blue-950 mt-3">Trade</p>
              <p className='text-gray-700'>Access 180+ instruments across all asset classes inside the platform</p>

            </div>
          </div>

          <div className="flex flex-col mt-20 mb-3 gap-y-10">





          <div className="mb-5 text-center">
            <p className="flex gap-x-2  font-semibold text-2xl text-blue-950 justify-center mb-3"> <FaLessThan className="mt-1" /> <span className="">7.12 ms</span></p>
            <p className="text-sm font-medium text-main">AVERAGE ORDER EXECUTION SPEED</p>
          </div>

          <div className="text-center">
            <p className=" mx-auto font-semibold text-2xl text-blue-950 justify-center mb-3">12+</p>
            <p className="text-sm font-medium text-main">INTEGRATED LIQUIDITY PROVIDERS</p>
          </div>


          <div>
            <p className="flex gap-x-2 font-semibold text-2xl text-blue-950 justify-center text-center mx-auto mb-3"> <FaGreaterThan /> <span> 12,000</span></p>
            <p className="text-sm font-medium text-main">EXECUTED ORDERES PER SECOND</p>
          </div>

          <div>
            <p className="mx-auto font-semibold text-2xl text-blue-950 justify-center mb-3">$545 K</p>
            <p className="text-sm font-medium text-main">AVERAGE TRADING VOLUME PER DAY</p>
          </div>
          </div>
          

          <Button className="bg-main mb-4 text-white font-semibold">Set your trading account</Button>
          <p className="text-gray-400">Registration takes only 40 seconds!</p>
        </section>


        <section className="px-4 py-10">
          <h3 className="text-3xl font-semibold mb-4">Connect to global capital markets</h3>

          <p className="text-lg text-gray-500">
          Trade Binary Options with the best platform, on a wide selection of assets, with high payouts, lightning-fast order execution and get personal customer support around the clock, fast withdrawals and the expertise of industry leaders.
          </p>
        </section>


        <footer className="bg-[#1c075b] py-10 px-3">
          <h5 className="text-white font-bold text-2xl mb-4">
            ELITE TRADING HUB
          </h5>
          <p className="text-gray-400 mb-10">
          We want you to not just Trade in the world&apos;s financial markets, but also with a simple and user friendly online platform.
          </p>


          <div className="mb-10">
            <h6 className="font-semibold mb-2 text-gray-200 text-xl">Useful Links</h6>
            <ul className=" leading-8 text-gray-300">
              <li>About</li>
              <li>Features</li>
              <li>Process</li>
            </ul>
          </div>
          <div className="mb-10">
            <h6 className="font-semibold mb-2 text-gray-200 text-xl">Markets</h6>
            <ul className="leading-8 text-gray-300">
              <li>Forex</li>
              <li>Indices</li>
              <li>Commodities</li>
            </ul>
          </div>
          <div className="mb-10">
            <h6 className="font-semibold mb-2 text-gray-200 text-xl">Contact</h6>
            <ul className="leading-8 text-gray-300">
              <li>Info@elitetradinghub.co</li>
              <li>+1203934848</li>
              <li>Georgia, CA 92100

              </li>
            </ul>
          </div>



          <p className="text-gray-300">Elite Trading Hub 2024 All rights reserved</p>
        </footer>
    
    
    </>
  )
}