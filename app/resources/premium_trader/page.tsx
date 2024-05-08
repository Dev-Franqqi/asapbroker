'use client'
import { useState ,useEffect} from "react"
import Cookies from "js-cookie"
import useOpencontext from "@/app/mycomps/hooks/useOpencontext"
export default function Premiumtrader(){
    const [darkMode,setDarkMode] = useState<boolean>(false)
    const {isOpen} = useOpencontext()
    useEffect(()=>{
        const dark = Cookies.get('dark');
        if(dark){
          if(dark==='true'){
            setDarkMode(true)
      

          }
        }
        else{
          setDarkMode(false)
     
          
        }
      },[])
    return(
        <main  className={darkMode?'text-white bg-black dark p-5':'p-5'}>
        
        
        <h1 className="text-3xl font-bold mb-3">The Premium Trading Platform</h1>
        <p className="mb-2">Trade from your browser direct to the premium trading platform</p>

        <h2 className="text-xl font-semibold mb-2 mt-4">Free, Powerful Trading Platform</h2>
            <p className="mb-2">Our free platforms give you direct access to the Elite Trading Hub exchange and multiple global markets with free real-time indicative data. The only fees you ever pay on our platform are the transaction costs of each trade.
</p>

<p className="mb-2">
Log in and trade from any PC (Windows, Mac, or Linux) wherever you are. No download needed, just your email and password.
You can even place an order using the Premium Trader, then manage and exit the trade using your Premium Trader platform.
</p>

<section>
    <h2 className="text-xl font-semibold mb-2 mt-4">Depth of Market & Advanced Orders</h2>
        <p className="mb-2">
        Our Depth of Market view will look familiar, but we designed it to be intuitive and easy to use. With a simple click and drag, you can place and modify your orders.
        </p>
        <p className="mb-2">
        Our unique Market Order with Protection (MOP) lets you enter or exit a trade immediately, but without risking a fill far from your intended price.
If you prefer to let the market come to you, you can place a limit order and wait. We designed our platforms to let you trade the way you want to trade, using the strategies you trust.
        </p>

</section>


<section>

    <h2 className="text-xl font-semibold mb-2 mt-4">Free Real-Time Data & Charts</h2>
    <p className="mb-2">
    On the Premium Trader platform, you&apos;re streaming real-time indicative market data directly from the exchange. See the bid and offer price with the volume of contracts available.

    </p>

    <p className="mb-2">
    As a member of the Elite Trading Hub platform, you don&apos;t go through a broker. You send your orders direct to the exchange.
For technical analysts who use charts, our ladder charts feature a price ladder with buy and sell buttons. Go from analysis to order placement, all in the same window.
    </p>
</section>

<section>

    <h3 className="text-4xl mt-5 mb-2 font-semibold">
        The Premium Trader Platform
    </h3>
    <p className="mb-2">
    An innovative new way to trade deserves an innovative trading platform. As a major forex broker in the US with its own proprietary software, we lets members place orders directly to the exchange, without the need for a broker or clearing desk. With 5,000 binary option contracts traded daily based on multiple asset classes, we designed software specifically to meet the needs of our members. As with all our platforms you get real-time indicative price data for free. And our unique price ladder charts let you place orders directly from the chart. You can go from selecting your markets to chart analysis to order placement, all from one screen.


    </p>
</section>
</main>


    )
}