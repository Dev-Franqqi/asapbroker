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
import useOpencontext from "@/app/mycomps/hooks/useOpencontext"
import { useRouter } from "next/navigation";
import Resourcenav from "@/app/mycomps/Resourcenav";
export default function Marijuana(){
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

        <div className={darkMode?(isOpen?"dark  overflow-hidden relative h-screen bg-black  text-white":"dark bg-black relative text-white"):(isOpen?"overflow-hidden h-screen relative":"")}>
            <Resourcenav />
        <main className="p-5">

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