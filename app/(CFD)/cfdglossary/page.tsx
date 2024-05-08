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
          
        

      
                <main className="px-5 py-5">
                    <h1 className="text-xl font-semibold">
                    Here we have compiled a list of commonly used terms in Forex and CFDs of Forex trading
                    </h1>

                    <p className="mb-3">Leverage:</p>
                    <p className="mb-3">
                    Leverage increases your purchasing power hence enables you to gain a large exposure to a financial market while only tying up a relatively small amount of your capital. CFDs are leveraged, which means you only have to put down a small deposit for much larger exposure. Leverage increases your profit potential and the risk of losing your capital. Our CFDs have a static leverage that depends on the Asset you&apos;re trading.
                    </p>


                    <div className="mb-4">

                        <p className="mb-3">Margin:</p>
                        <p className="mb-3">
                        When trading CFDs on leverage, you must maintain a certain level of funds in your account (the necessary margin), also known as a good faith deposit. Calculating and understanding your necessary margin requirements beforehand allows you to apply good risk management and avoid any unnecessary margin calls resulting in the closing of a position due to not enough margin in your account. The margin of Elite Trading Hub&apos;s CFDs will be the invested amount you select prior to opening the position.
                        </p>
                    </div>

                    <div className="mb-4">
                        <p className="mb-3">Margin call:</p>
                        <p className="mb-3">Margin Call refers to the situation where the broker ask for additional funds to cover losses from your lose making positions. Failure to meet margin calls will lead to automatic closing of your positions. There are no margin calls when trading CFDs with us but your position will automatically be closed when price reached the stop loss level.</p>
                    </div>

                    <div className="mb-4">

                        <p className="mb-3">Is leverage trading risky?</p>
                    Even though you only put up a relatively small amount of capital to open a position (initial margin), your profit or loss is based on the full value of the position (Invested Amount * Leverage). So the amount you gain or lose might seem very high in relation to the sum you&apos;ve invested. However, it should always be kept in mind that leverage not only magnifies your potential profits but also your potential losses. Additional information about the maximum loss or gain from each position can be found below.

                    </div>

                    <div className="mb-4">
                        <p className="mb-3">Trading profit and loss calculation</p>

                        <p className="mb-3">
                        Pip value: is an important component of the P&L calculation and will be given to you by the platform prior to opening your position.

                        </p>
                    </div>

                    <div className="mb-4">
                        <p className="mb-3">Formulas:</p>
                        <p className="mb-3">
                        Pip value for Forex (other than JPY) = (invested amount * Leverage) / open price / 10,000
                        </p>

                        <p className="mb-3">
                        Pip value for Forex where JPY is the quoted currency = (invested amount * Leverage) / open price / 10,000
                        </p>
                        <p className="mb-3">
                        Pip value for Equities and Commodities = (invested amount * Leverage) / open price / 100

                        </p>
                        <p className="mb-3">
                        Note that the pip value given by the platform is the base currency of your account.
                        </p>

                        <p className="mb-3">
                        Profit and Loss Formula = (pips movement * pip value) – swap charges

                        </p>

                        <p className="mb-3">
                        Pending Orders:
                        </p>
                        <p className="mb-3">
                        You can set pending/future orders for entering into a position when the actual price will reach your target/set price.
                        </p>

                        <p className="mb-3">
                        Buy Limit: an order to buy at a specific price that is lower than the current one.
                        </p>

                        <p className="mb-3">
                            
Sell Limit: an order to sell at a specific price that is higher than the current one.
                        </p>

                        <p className="mb-3">
                        Note that there are restrictions of how close your pending order price could be from the current price
                        </p>

                        <p className="mb-3">
                        Take profit: is a pending order at a predetermined price to exit a profit making position.
                        </p>

                        <p className="mb-3">
                        You can set or change your take profit price (or amount) at the start or/and during the period of your position.

                        </p>

                        <p className="mb-3">
                        We recommend to check the take profit price prior to opening a position.
                        </p>

                        <p className="mb-3">
                        Note that there is a limit on the range between the open price and the take profit price.
                        </p>

                        <p className="mb-3">
                        Example:
You open a SELL position on EURUSD at 1.1208 with an invested amount of 100 EUR.
The pip value will be 3.5688 EUR and the take profit will automatically be set at 1.118 so if the price reached the take profit you will win 100 EUR (3.5688 * 28pips ≈ 100 EUR).
If you wish to decrease the take profit level further at 1.11 then the potential gain of your position will increase to (3.5688 * 108) 385.4 EUR.

                        </p>

                        <p className="mb-3">
                        Stop loss: is a pending order at a predetermined price to exit a loss making position.
You can set or change your take stop loss price (or amount) at the start or/and during the period of your position.
We recommend to check the stop loss price prior to opening a position.
If you change the initial stop loss level your invested amount (margin) will change also but the pip value will remain the same.
Note that there is a limit on the range between the open price and the stop loss price.

                        </p>

                        <p className="mb-3">
                        Example:
You open a SELL position on EURUSD at 1.1208 with an invested amount of 100 EUR.
The pip value will be 3.5688 EUR and the stop loss will automatically be set at 1.1236 so if the price reached the stop loss you will only lose your invested amount (3.5688 * 28pips ≈ 100 EUR).
If you wish to increase the stop loss further at 1.1250 then the risk of your position will increase to (3.5688 * 42) 150 EUR meaning that your invested amount (margin) will automatically go to 150 EUR.
Close Manually: you can close your open positions manually by pressing the close button at the right side of your open trades section.

                        </p>

                        <p className="mb-3">
                        rading Costs:

Spread is the difference between the bid (sell) and ask (buy) price. The difference is presented in pips and reflects the cost of opening a position.
The related cost will be spread * pip value.

Swap: Swap is the interest deducted from the Profit/Loss of your position and is only charged when a position is held open overnight.
Swap charge formula: Invested amount * Leverage * swap rate / 365days.

                        </p>
                    </div>
                </main>
        </div>
    )
}