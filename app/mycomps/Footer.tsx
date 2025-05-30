'use client'
import { usePathname } from "next/navigation"
import Link from "next/link"
export default function Footer(){
  const pathname = usePathname()
    return(
        <footer className={pathname.startsWith('/dashboard')?"hidden":"bg-[#463A5C] md:flex md:gap-x-20 py-10 px-3"}>
          <div className="md:w-2/5">

        <h5 className="text-white font-bold text-2xl mb-4 md:mb-8">
          ELITE TRADING HUB
        </h5>
        <p className="text-gray-400 mb-10 md:w-3/5">
        We want you to not just Trade in the world&apos;s financial markets, but also with a simple and user friendly online platform.
        </p>

        </div>

        <div className="mb-10">
          <h6 className="font-semibold md:mb-8 mb-2 text-gray-200 text-xl">Useful Links</h6>
          <ul className=" leading-8 text-gray-300">
            <li><Link href='/about'>About</Link></li>
            <li><Link href='#f'>Features</Link></li>
            <li>Process</li>
          </ul>
        </div>
        <div className="mb-10">
          <h6 className="font-semibold mb-2 md:mb-8 text-gray-200 text-xl">Markets</h6>
          <ul className="leading-8 text-gray-300">
            <li><Link href='/forex'>Forex</Link></li>
            <li><Link href='/stocks'>Indices</Link></li>
            <li><Link href='/commodities'>Commodities</Link></li>
          </ul>
        </div>
        <div className="mb-10">
          <h6 className="font-semibold mb-2 md:mb-8 text-gray-200 text-xl">Contact</h6>
          <ul className="leading-8 text-gray-300">
            <li>Info@elitetradinghub.co</li>
            <li>+1203934848</li>
            <li>Georgia, CA 92100

            </li>
          </ul>
        </div>



        {/* <p className="text-gray-300 ">Elite Trading Hub 2024 All rights reserved</p> */}
      </footer>
    )
}