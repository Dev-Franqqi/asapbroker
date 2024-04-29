import Navbar from "./mycomps/Navbar"
import Image from "next/image";
import Switchingcomp from "./mycomps/Switchingcomp"
import { FaEuroSign } from "react-icons/fa";
import { FaBitcoinSign } from "react-icons/fa6";
import { FaChartArea } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { MdWaterDrop } from "react-icons/md";
import { FaCube } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import Globe from '../public/global.png'
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
      <p className=" mt-3 font-medium text-gray-500">We are committed to providing all our investors with exceptional service while offering our team the best training.</p>
      <p className="mt-4 text-sm text-gray-800 ">
      Widget Scale is an International online broker that has been actively operating in the Crypto & Stocks Trading trading markets. With our advanced, web-based trading platform, you can trade on the largest lists of assets in the industry. From Currency pairs, and Commodities to stocks and indices, we have it all. Keep your trading costs down with competitive spreads, commissions and low margins. View spreads on our most popular cash instruments.
      </p>


      <section className="py-16">
        <h3 className="text-2xl mb-5 text-blue-950 font-semibold ">Experience more  than Trading.</h3>
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

    <section className="bg-blue-950 overflow-x-hidden w-[100vw] px-4 py-16 text-white">
      <h3 className="text-2xl text-gray-300 font-semibold mb-6">ACCESS TO OUR FINANCIAL MARKETS</h3>
      <p className="text-gray-300">
      Bitcoin is the first decentralized digital money. This cryptocurrency was created in 2009. It was originally mentioned on October 31, 2008 when a person who calls himself Satoshi Nakamoto and who is considered to be a founder of Bitcoin published an article under the title Bitcoin: A Peer-to-Peer Electronic Cash System. Bitcoin gave a start to the whole new era of cryptocurrencies. Subsequently, the first block and the first 50 bitcoins were generated. In 2016 and 2017, trading bitcoins has been growing quite popular with retail traders and major investors. The leading trading floors such as CME Group and CBOE Global Markets have already introduced trading futures on bitcoins. .
      </p>
      <Image className="relative left-60" src={Globe} alt=''/>

    </section>


    
    
    
    </>
  )
}