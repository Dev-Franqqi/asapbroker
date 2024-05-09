'use client'
import { FaAngleLeft } from 
"react-icons/fa6";
import Link from "next/link";
import { useEffect } from "react"
import { useState } from "react"
import Navbar from "@/app/mycomps/Navbar"
import Cookies from "js-cookie"
import Marijuana1 from "../../../public/marijuana1.png"
import Marijuana2 from "../../../public/marijuana2.jpg"
import Cann from "../../../public/cann.jpg"
import Elitelogo from "../../../public/elitlogo.png"
import Image from "next/image"

export default function Marijuana(){
   
    

    return(

        <div>
        <main className="p-5">
        <section className=" my-4">
    <h2 className="text-2xl font-semibold">Introduction to Marijuana Investing</h2>
    <p>Marijuana, also known as cannabis, is a rapidly growing industry with significant investment opportunities. With the legalization of marijuana for medical and recreational use in many jurisdictions, the marijuana market has experienced exponential growth in recent years.</p>
    <p>Investing in marijuana stocks and companies can be highly profitable but comes with risks. It&apos;s essential to understand the regulatory environment, market trends, and individual company performance before investing in the marijuana industry.</p>
    <p>As with any investment, diversification and thorough research are key to mitigating risks and maximizing returns in the marijuana market.</p>
</section>
<section className=" my-4">
    <h2 className="text-2xl font-semibold">Benefits of Marijuana Legalization</h2>
    <p>The legalization of marijuana has led to various benefits, including:</p>
    <ul className="list-disc px-5 ">
        <li>Revenue Generation: Legal marijuana markets generate significant tax revenue for governments, contributing to economic growth.</li>
        <li>Job Creation: The marijuana industry creates jobs in cultivation, processing, distribution, and retail, boosting employment rates.</li>
        <li>Medical Advancements: Legalization has facilitated research into the medical benefits of marijuana, leading to new treatments and therapies.</li>
        <li>Crime Reduction: Legalization has been associated with a decrease in marijuana-related crime and a shift towards a regulated market.</li>
        <li>Consumer Safety: Legalization ensures that marijuana products meet safety standards, protecting consumers from harmful substances.</li>
    </ul>
</section>
<section className=" my-4">
    <h2 className="text-2xl font-semibold">Investment Strategies for Marijuana Stocks</h2>
    <p>When investing in marijuana stocks, consider the following strategies:</p>
    <ul className="list-disc px-5">
        <li>Diversification: Spread your investment across multiple marijuana stocks to reduce risk.</li>
        <li>Research: Conduct thorough research on individual companies, including their financials, management team, and growth prospects.</li>
        <li>Long-Term Outlook: Consider the long-term potential of the marijuana industry and invest in companies with sustainable growth plans.</li>
        <li>Risk Management: Set stop-loss orders to limit losses and use hedging strategies to protect your investment.</li>
        <li>Monitor Industry Trends: Stay informed about regulatory changes, market trends, and competitive dynamics in the marijuana industry.</li>
    </ul>
</section>
<section className=" my-4">
    <h2 className="text-2xl font-semibold">Key Factors Influencing Marijuana Stock Prices</h2>
    <p>When investing in marijuana stocks, several key factors can influence stock prices:</p>
    <ul className="list-disc px-5">
        <li>Legislation and Regulation: Changes in marijuana laws and regulations can impact the legality and profitability of marijuana businesses.</li>
        <li>Market Sentiment: Investor sentiment towards the marijuana industry can affect stock prices, leading to fluctuations in the market.</li>
        <li>Financial Performance: The financial performance of individual marijuana companies, including revenue growth, profitability, and debt levels, can impact stock prices.</li>
        <li>Competitive Landscape: The competitive environment within the marijuana industry, including new entrants and established players, can affect stock prices.</li>
        <li>Industry Trends: Overall trends in the marijuana industry, such as consumer preferences, product innovations, and market demand, can influence stock prices.</li>
        <li>Global Events: Political, economic, and social events on a global scale can impact stock prices, including trade agreements, economic downturns, and geopolitical tensions.</li>
    </ul>
    <p>By staying informed about these key factors and their impact on the marijuana industry, investors can make more informed decisions and navigate the market more effectively.</p>
</section>



        <h1 className="text-3xl font-bold mb-5">
            Invest in Marijuana - 700% return profit
        </h1>
            <Image src={Marijuana1} alt="" />
            <Image src={Cann} alt="" />


            <h2 className="text-xl font-semibold  py-5">

            As States Legalize Marijuana, Investors See an Opportunity
            </h2>

            <p>
            Marijuana the world&apos;s most commonly cultivated, trafficked, and used illicit drug, and as the push for legalization at home and abroad grows, marijuana is garnering significant attention from investors, manufacturers, and researchers. Despite the plant being illegal under federal law as a Schedule I drug, the U.S. legal marijuana industry was estimated at $10.4 billion in 2018 with 250,000 jobs devoted to the handling of plants, according to New Frontier Data. A total of 33 states have legalized marijuana for medical use, 10 of which allow adults to legally use the drug for recreational use. And that number may continue to rise, as more people are accepting the idea of legalizing marijuana across the United States. This article looks at some of the uses of marijuana as well as the overall market for the drug.
            </p>
            <Image src={Marijuana2} alt=""/>

            <section>
                <p className="font-medium text-xl">$8k to $500k</p>
                <p className=" font-light">Minnimum Investment</p>
                <p className="font-medium text-xl mt-3">700%</p>
                <p className=" font-light">Return over</p>
                <p className="font-medium text-xl mt-3">60 sec - 5 min</p>
                <p className=" font-light">Expiration time</p>
                <p className="font-medium text-xl mt-3">Trade Marijuana</p>
                <p className=" font-light">Marijuana</p>

                <Link href="/signup"className="text-blue-500 font-semibold  mt-3">INVEST ON MARIJUANA</Link>
            </section>

        </main>

       
      
        </div>
    )
}