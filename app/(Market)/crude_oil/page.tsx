'use client'
import { FaAngleLeft } from "react-icons/fa6";
import { useEffect } from "react"
import { useState } from "react"
import Navbar from "@/app/mycomps/Navbar"
import Cookies from "js-cookie"
import Elitelogo from "../../../public/elitlogo.png"
import Image from "next/image"
import '../market.css'
import Crude_jpeg from "../../../public/crude.jpg"
import Crude_1 from "../../../public/1.jpg"
import Crude_2 from "../../../public/2.jpg"
import Crude_3 from "../../../public/3.jpg"
import Crude_4 from "../../../public/4.jpg"
import Crude_6 from "../../../public/6.jpg"
import Crude_8 from "../../../public/8.jpg"
import Crude_9 from "../../../public/9.jpg"
import Link from "next/link";
export default function Crude(){
  
    

    return(

        <div>
        

      
        <main className="px-5 py-5">
                <h1 className="">CRUDE OIL</h1>

                <section>
                    <p>Crude oil is a complex mixture of hydrocarbons, which are organic compounds made up of hydrogen and carbon atoms. It also contains small amounts of other elements, including nitrogen, sulfur, and oxygen. The composition of crude oil can vary widely depending on its source, with different crude oils containing different proportions of hydrocarbons and other elements.</p>
                    <p>Nitrogen is typically found in crude oil in the form of organic compounds called amines. Sulfur is another common impurity in crude oil, often present in the form of hydrogen sulfide (H2S) or sulfur-containing organic compounds. Oxygen can be present in crude oil as well, usually in the form of organic compounds such as alcohols, ketones, and organic acids.</p>
                    <p>
                    The presence of nitrogen, sulfur, and oxygen in crude oil can have important implications for its processing and refining. These impurities can contribute to the formation of pollutants such as sulfur dioxide (SO2) and nitrogen oxides (NOx) when crude oil is burned, leading to environmental concerns. Refineries use various processes to remove these impurities and produce refined products such as gasoline, diesel, and jet fuel.
                    </p>
                </section>
                <section>
                    <h2>CATEGORIZATION</h2>
                    <p>Crude oils are commonly categorized based on the predominant type of hydrocarbon compound they contain. The three main types are:

</p>

                    <ul>
                        <li><h4>Paraffinic Crude Oil:</h4> This type of crude oil is rich in paraffin hydrocarbons, which are straight-chain or branched-chain hydrocarbons. Paraffinic crude oils are typically low in sulfur and are known for their light color and low density. They are often used to produce high-quality gasoline and diesel fuel. </li>
                        <li>
                            <h4>Napthenic Crude Oil: </h4>Naphthenic crude oil contains a high proportion of naphthenic hydrocarbons, which are cyclic hydrocarbons with one or more rings. Naphthenic crude oils are typically darker in color and higher in density compared to paraffinic crude oils. They are often used to produce lubricating oils and bitumen.
                        </li>
                        <li>
                            <h4>Aromatic Crude Oil: </h4>Aromatic crude oil contains a high proportion of aromatic hydrocarbons, which are hydrocarbons containing one or more benzene rings. Aromatic crude oils are typically dark in color and have a high density. They are often used to produce petrochemicals, such as benzene, toluene, and xylene.
                        </li>
                    </ul>
                </section>
                <section>
                    <h2>APPEARANCE</h2>
                    <p>Crude oil&apos;s appearance can vary widely, ranging from colorless to black, depending on its composition and impurities. The color of crude oil is influenced by factors such as its density, sulfur content, and the presence of other compounds.</p>
                    <ul>
                        <li>
                            <h4>Colorless to light Yellow:</h4> Some crude oils are nearly colorless or have a light yellow hue. These oils are typically low in sulfur and have a relatively light density.


                        </li>
                        <li><h4>Brown to Dark Brown:</h4> Many crude oils appear brown or dark brown. This coloration is often due to the presence of organic matter and other impurities in the oil.</li>
                        <li><h4>Black: </h4>Some crude oils are nearly black in color, often indicating a high concentration of impurities such as sulfur, nitrogen, and heavy metals.</li>
                    </ul>
                    <p>
                    The color of crude oil is important in the refining process, as it can provide clues about the oil&apos;s composition and properties. Refineries use various processes to separate and remove impurities from crude oil, producing refined products such as gasoline, diesel, and jet fuel.
                    </p>
                </section>
                <section>
            <h2>CRUDE OIL AS A TRADING INSTRUMENT</h2>
                <Image className="rounded-md" src={Crude_jpeg} alt="Crude Oil" />
                <p className="mt-2">
                    Crude Oil is a trading instrument that offers a guaranteed return for a correct prediction about an asset&expo;s price direction within a selected timeframe. An in-the-money option offers up to 30% of profit every 30 days, while an unsuccessful one will result in the loss of the investment. With Crude Oil one can speculate on the price movements of various stocks, currency pairs, indices, commodities and even Cryptocurrencies.
                </p>
                <h2 className="text-3xl mt-4 font-semibold mb-3 ">Advantages of investing in oil futures</h2>
                <Image src={Crude_1} alt="Oil Futures Advantages" />
                <p className="mt-3">Oil futures can make great investments and are probably one of the most actively traded derivatives on the market. Some of the benefits of investing in oil futures include:</p>
                <ul className="list-disc px-3">
                    <li>Ability to make substantial profits.</li>
                    <li>Liquidity.</li>
                    <li>Leverage.</li>
                    <li>Limited supply.</li>
                    <li>Easy trading concept.</li>
                </ul>
                {/* Add more sections and content as needed */}
                <section className="my-4">
                    <Image className="mb-3" src={Crude_2} alt=''/>
                    <p>Liquidity. Oil futures are one of the most liquid investments because of the high volume that is traded every day. In fact, they are the most actively traded future on the market and hence the most liquid.</p>
                </section>
                <section className="my-4">
                    <Image className="mb-3" src={Crude_3} alt=''/>
                    <p>Leverage. You can purchase oil futures on margin (in other words, you can borrow money to purchase them). The margin requirements are set by the exchanges and for oil they are often as low as 5% of the value of the investment. That means you could buy $100,000 worth of oil futures for only $5,000. This can also be very dangerous, but it is nice to at least have options.</p>
                </section>
                <section className="my-4">
                    <Image className="mb-3" src={Crude_4} alt=''/>
                    <p>Limited supply. Oil is an irreplaceable resource. The fact that there is a finite supply is depressing for most people, but it can work to the advantage of investors who choose to invest in its futures. Other commodities futures such as corn and livestock can be replaced and their prices can be stabilized. However, as the world&apos;s oil supply is exhausted, the price of oil will inevitably increase.</p>
                </section>
                <section className="my-4">
                    <Image className="mb-3" src={Crude_6} alt=''/>
                    <p>Easy trading concept. Although it is a good idea to work with a broker or trader who can show you the ropes of futures investing, it is relatively easy to get started. Anyone who takes a little time to research the process can figure it out and develop a trading strategy.</p>
                </section>
                <section className="my-4">
                    <Image className="mb-3" src={Crude_8} alt=''/>
                    <p>Easy trading concept. Although it is a good idea to work with a broker or trader who can show you the ropes of futures investing, it is relatively easy to get started. Anyone who takes a little time to research the process can figure it out and develop a trading strategy.</p>
                </section>
                <section className="my-4">
    <h2 className="text-3xl font-semibold mb-3">Trading Strategies for Crude Oil</h2>
    <p>Trading crude oil futures requires a solid strategy to navigate the market&apos;s volatility and capitalize on price movements. Here are some common strategies:</p>
    <ul className="list-disc  mt-3 px-3">
        <li className="mb-3"><strong>Day Trading:</strong> Traders buy and sell crude oil futures within the same trading day to profit from short-term price movements.</li>
        <li className="mb-3"><strong>Swing Trading:</strong> Traders hold positions for several days or weeks to capture larger price movements.</li>
        <li className="mb-3"><strong>Trend Following:</strong> Traders identify and follow the prevailing trend in crude oil prices, buying in an uptrend and selling in a downtrend.</li>
        <li className="mb-3"><strong>Breakout Trading:</strong> Traders enter positions when the price breaks above or below a significant level of support or resistance.</li>
        <li className="mb-3"><strong>Range Trading:</strong> Traders identify a price range within which crude oil is trading and buy at the bottom of the range and sell at the top.</li>
    </ul>
    <p>It&apos;s essential to backtest and refine your trading strategy before committing real capital to ensure its effectiveness in different market conditions.</p>
                </section>
</section>

                <section className="my-4">
                    <Image className="mb-3" src={Crude_9} alt=''/>
                    <h3 className="text-xl font-medium">
                        $13,000 (20% Profit Return)
                    </h3>
                    <p>Minimum investment</p>
                    <h3 className="text-xl font-medium mt-3 ">
                        13% Withdrawable
                    </h3> 
                    <p>Every month end 30 days cycle</p>
                    <hr className="text-black my-4" />
                    <h3 className="text-xl font-medium">
                        $15, 000 (30% Profit Return)
                    </h3>
                    <p>Minimum investment</p>
                    <h3 className="text-xl font-medium mt-3 ">
                        15% Withdrawable
                    </h3> 
                    <p>Every month end 30 days cycle</p>
                </section>

                <Link href='/signup' className="underline text-blue-500 font-semibold">Invest in Crude Oil</Link>
            </main>
        </div>
    )
}