'use client'
import { FaAngleLeft } from "react-icons/fa6";
import { useEffect } from "react"
import { useState } from "react"
import Navbar from "@/app/mycomps/Navbar"
import Cookies from "js-cookie"
import Elitelogo from "../../../public/elitlogo.png"
import Image from "next/image"

export default function Howisitdone(){
 

    return(

        <div>
        

      
                <main className="px-5 py-5">
                <h1 className="text-3xl font-semibold mb-5">How is it done?</h1>

                <p>
                We at Elite Trading Hub have created a user friendly platform that makes CFD trading accessible and convenient:
                </p>

                <p className="mt-2 text-lg">
                    Remember the stakes:
                </p>
            <ol className="list-decimal px-3 mt-4">
                <li className="mb-2">Enter trading Platform</li>

                <li className="mb-2">
                    Choose CFD from the upper toolbar
                </li>

                <li className="mb-2">
                Choose the CFD you want to trade on the leftmost column on the screen. You can use the filter to control what CFDs you see: All, Indices, Forex, Stock or Commodities.
                </li>
                <li className="mb-2">
                    Choose the direction you wish to invest in. The numbers within the Buy/Sell buttons represent the points needed to be passed for a successful trade. i.e. if the number in Buy is 1.1158, then your trade must be higher than 1.1158 when the trade closes to be considered a successful trade, if the trade closes lower than 1.1158 then your trade is not successful.
                </li>

                <li className="mb-2">
                Choose when you wish to place the trade. To the right of the Buy/Sell column you will find the Trade/Order box. If you wish the trade to commence immediately, choose trade. If you wish for certain events to transpire for a trade to be made, and you don&apos;t wish to physically wait for them to occur, then choose order and insert the criteria needed to be met for your trade to take place.
                </li>
            </ol>
                </main>
        </div>
    )
}