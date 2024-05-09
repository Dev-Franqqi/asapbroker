'use client'
import { FaAngleLeft } from "react-icons/fa6";
import { useEffect } from "react"
import { useState } from "react"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Navbar from "@/app/mycomps/Navbar"
import Cookies from "js-cookie"
import Elitelogo from "../../../public/elitlogo.png"
import Image from "next/image"



export default function Strategiesforforex(){
   
    

    return(

        <div>
          
        

      
          <main className="p-3">
    <section className="mb-3">
        <h1 className="text-4xl bg-black text-white rounded-md p-2 font-bold mb-4">CFD Glossary</h1>
        <p>Welcome to Elite Trading Hub&apos;s CFD glossary. In this section, we&apos;ll provide you with definitions for key terms and concepts related to CFD trading to help you better understand the world of CFDs.</p>
    </section>

    <section className="mb-3">
        <h2 className=" font-bold mb-2">Contract for Difference (CFD)</h2>
        <p>A contract for difference (CFD) is a financial derivative that allows traders to speculate on the price movements of various assets without owning the underlying asset.</p>
    </section>

    <section className="mb-3">
        <h2 className=" font-bold mb-2">Leverage</h2>
        <p>Leverage allows traders to control a larger position in the market with a relatively small amount of capital. It amplifies both profits and losses.</p>
    </section>

    <section className="mb-3">
        <h2 className=" font-bold mb-2">Margin</h2>
        <p>Margin is the amount of money required to open a leveraged position. It is a percentage of the total trade size.</p>
    </section>

    <section className="mb-3">
        <h2 className=" font-bold mb-2">Long Position</h2>
        <p>A long position is when a trader buys a CFD with the expectation that its price will rise, allowing them to profit from the difference.</p>
    </section>

    <section className="mb-3">
        <h2 className=" font-bold mb-2">Short Position</h2>
        <p>A short position is when a trader sells a CFD with the expectation that its price will fall, allowing them to profit from the difference.</p>
    </section>

    <section className="mb-3">
        <h2 className=" font-bold mb-2">Stop-Loss Order</h2>
        <p>A stop-loss order is an order placed to close a trade at a predetermined price level to limit losses.</p>
    </section>

    <section className="mb-3">
        <h2 className=" font-bold mb-2">Take-Profit Order</h2>
        <p>A take-profit order is an order placed to close a trade at a predetermined price level to lock in profits.</p>
    </section>

    <section className="mb-3">
        <h2 className=" font-bold mb-2">Conclusion</h2>
        <p>CFD trading involves a variety of terms and concepts that may be unfamiliar to new traders. This glossary aims to provide you with a better understanding of these terms and concepts so that you can trade CFDs with confidence. Elite Trading Hub is committed to providing you with the tools and resources you need to succeed in your trading journey. Start trading CFDs with Elite Trading Hub today and take advantage of the opportunities presented by the global financial markets.</p>
    </section>
</main>

        </div>
    )
}