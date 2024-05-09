'use client'
import { FaAngleLeft } from 
"react-icons/fa6";
import Link from "next/link";
import { useEffect } from "react"
import { useState } from "react"
import Navbar from "@/app/mycomps/Navbar"
import Cookies from "js-cookie"

import Stockindices from "../../../public/stockindices.jpg"
import Wallstreet from "../../../public/wallstreet.jpg"
import Usaflag from "../../../public/usaflag.jpg"
import Ustech from "../../../public/ustech.jpg"
import Usflag from "../../../public/usflag.jpg"
import Chflag from "../../../public/chflag.jpg"
import Ukflag from "../../../public/ukflag.jpg"
import Germany from "../../../public/germany.jpg"
import Japan from "../../../public/japanflag.jpg"
import Elitelogo from "../../../public/elitlogo.png"
import Image from "next/image"

export default function Stocks(){
   
    

    return(

        <div>
      

       <main className="p-5">
       <section className=" my-4">
    <h2 className="text-2xl mb-3 font-semibold">Introduction to Stock Indices</h2>
    <p>A stock index is a measurement of the value of a section of the stock market. It is computed from the prices of selected stocks, typically a weighted average. Stock indices are used by investors to describe the market and compare the return on specific investments.</p>
    <p>Investing in stock indices provides several benefits, including diversification, ease of trading, and the ability to track the overall performance of the market.</p>
    <p>Popular stock indices include the S&P 500, Dow Jones Industrial Average, and NASDAQ Composite, among others.</p>
</section>
<section className=" my-4">
    <h2 className="text-2xl font-semibold">Benefits of Investing in Stock Indices</h2>
    <p>Investing in stock indices offers several advantages, including:</p>
    <ul className="list-disc px-5">
        <li>Diversification: Stock indices provide exposure to a diversified portfolio of stocks, reducing the risk associated with individual stocks.</li>
        <li>Low Cost: Investing in stock indices is typically more cost-effective than buying individual stocks, as it requires less research and trading.</li>
        <li>Market Performance: Stock indices track the performance of the overall market, allowing investors to benefit from the market&apos;s growth.</li>
        <li>Liquidity: Stock indices are highly liquid, meaning investors can easily buy and sell index funds without significantly impacting the market.</li>
        <li>Professional Management: Index funds are managed by professional fund managers, reducing the need for individual investors to actively manage their investments.</li>
    </ul>
    <p>Overall, investing in stock indices can be a smart way to build wealth over time while minimizing risk.</p>
</section>
<section className=" my-4">
    <h2 className="text-2xl font-semibold">Investment Strategies for Stock Indices</h2>
    <p>When investing in stock indices, consider the following strategies:</p>
    <ul className="list-disc px-5">
        <li>Long-Term Investing: Stock indices are best suited for long-term investors who are looking to build wealth over time. Invest regularly and stay invested to benefit from market growth.</li>
        <li>Dollar-Cost Averaging: Invest a fixed amount regularly in stock indices, regardless of market conditions. This strategy helps reduce the impact of market volatility.</li>
        <li>Rebalancing: Regularly review your portfolio and rebalance it to maintain your desired asset allocation. This involves selling overperforming assets and buying underperforming assets.</li>
        <li>Stay Informed: Keep yourself updated with market trends, economic indicators, and geopolitical events that can impact stock indices. This will help you make informed investment decisions.</li>
    </ul>
    <p>By following these strategies, investors can effectively manage their investments in stock indices and achieve their financial goals.</p>
</section>

        <Image src={Stockindices} alt="" className="mb-3"/>
        <h1 className="text-3xl font-bold mb-4">A New Way to Trade US and Global Stock Indices</h1>

       <p>
       Feel limited by “buy and hold” investing? Frustrated by seeing your portfolio go up one month and down the next? Looking for a way to actively trade the markets, not just invest long-term?

       </p>
      <p>
      With the security of limited risk and a regulated exchange, trading the short-term movements of the stock market can be a source of pleasure as well as profit. Binary options and spreads open the stock index futures markets to individual traders with low costs and limited risk, opening a world of opportunities.
      </p>


      <h2>
      Stock Index Futures on Elite Trading Hub: A World of Opportunity
      </h2>
      <p>
      On Elite Trading Hub you can trade binary option and spread contracts based on the underlying futures prices of the following stock indices from the U.S. and the rest of the world.
      </p>

      <ul>
        <li className="font-bold mb-4">UNITED STATES:
            <Image src={Wallstreet} alt="" />
            <p className="font-semibold">Wall Street 30</p>
            <p className="font-normal"><span className="font-medium  mr-2">Dow:</span>Based on CBOT E-mini Dow® Index Futures, tracking the performance of 30 major U.S. companies</p>
        </li>
        <li className="font-bold mb-4">
            <Image src={Usaflag} alt="" />
            <p className="font-semibold">   US 500</p>
            <p className="font-normal"><span className="font-medium  mr-2">S&P 500:</span>Based on CME E-mini S&P 500® Index Futures: 500 large-cap common stocks on the NYSE & Nasdaq.</p>
        </li>
        <li className="font-bold mb-4">
            <Image src={Ustech} alt="" />
            <p className="font-semibold">   US Tech 100</p>
            <p className="font-normal"><span className="font-medium  mr-2">Nasdaq:</span>Based on CME E-mini Nasdaq 100® Index Futures, tracking 100 leading non-financial U.S. companies.

</p>
        </li>
        <li className="font-bold mb-4">
            <Image src={Usflag} alt="" />
            <p className="font-semibold">   US SmallCap 2000</p>
            <p className="font-normal"><span className="font-medium  mr-2">Russell 2000: </span>Based on CME E-mini Russell 2000® Index Futures, tracking 2000 small-cap U.S. equities.

</p>
        </li>


        <li className="font-bold mb-4">REST OF THE WORLD:
            <Image src={Chflag} alt="" />
            <p className="font-semibold">China 50</p>
            <p className="font-normal"><span className="font-medium  mr-2">China A50:</span>Based on SGX FTSE Xinhua China A50® Index Futures: 50 firms on the SSE & Shenzhen exchanges.</p>
        </li>
        <li className="font-bold mb-4">
            <Image src={Germany} alt="" />
            <p className="font-semibold">   Germany 30</p>
            <p className="font-normal"><span className="font-medium  mr-2">Dax: </span>Based on Eurex DAX® Index Futures, 30 major German companies on the Frankfurt Stock Exchange.

</p>
        </li>
        <li className="font-bold mb-4">
            <Image src={Japan} alt="" />
            <p className="font-semibold">   Japan 225</p>
            <p className="font-normal"><span className="font-medium  mr-2">Nikkei: </span>Based on SGX Nikkei 225® Index Futures, tracking the activities and sentiment of the Japanese stock market.

</p>
        </li>

      </ul>
      </main>

        </div>
    )
}