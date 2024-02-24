import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Exo } from "next/font/google";
import Image from "next/image";
import Globeimg from "../public/globe.png"
import Secureimg from "../public/cloud-data.png"
import Userimg from "../public/user.png"
import Tradeimg from "../public/tradeassets.png"
import Awardimg from "../public/Group.png"
import Phoneimg from "../public/phone.png"
import Link from "next/link";

const exo = Exo({subsets:["latin"]})

export default function Home() {
  return (
    <>

    <nav className="p-2 flex justify-between text-center ">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
</svg>


      <header className={`${exo.className} text-blue-800 font-bold text-2xl`}>AsapExchange</header>


      <ul className="hidden md:flex">

        <li>Wallet</li>
        <li>Exchange</li>
        <li>Explorer</li>
      </ul>
      

      <Link href="/login" className="text-white bg-blue-800 p-0">Login</Link>



    </nav>


    <main className="pt-10 ">
 
      <section className="text-center">
        <p className="text-xs text-orange-500 font-semibold">Join our crypto exchange</p>
        <h1 className="font-bold text-4xl w-4/5 mx-auto">Popular way to buy, sell and trade crypto.</h1>
        <p className="mt-2 text-sm">We provide services that ease the process of migrating into the blockchain and cryptocurrency</p>


      </section>



      <section className="mt-3 text-center">
        <Image src={Globeimg} alt=""/>
        <div>
          <p className="text-xs text-orange-500 font-semibold mx-auto">Your gateway to the global economy</p>
          <h2 className="font-bold text-4xl  mx-auto">Asap Exchange trading for worldwide access</h2>
          <p className="mt-2 text-sm mx-auto">Institutional Markets is a full-stack crypto services platform that works worldwide with crypto-native businesses and institutional clients on trading and custody solution</p>

          <Button className="bg-blue-400 mt-4">Get it now</Button>
        </div>
      </section>



      <section className="mt-[10rem] text-center p-5">
        <div>
          <h3 className="text-4xl font-bold">We make crypto easy.</h3>

          <p className="text-sm ">Specific cryptocurrencies work and get a bit of  crypto to try out for yourself. Here are a few reasons why you should choose Asap Exchange</p>

          <Button className="bg-blue-700 mt-3">Learn more</Button>
        </div>


        <div className="mt-10">

          <div className="flex mx-auto w-fit gap-x-2">
          <Image src={Secureimg} alt=""/>
          <h4 className="font-semibold text-xl">Secure Storage</h4>

          </div>

          <p className="text-sm w-4/5 mt-2">We store the vast majority of the digital assets in a secure offline storage.</p>
        </div>

        <div className="mt-10">
        <div className="w-fit mx-auto flex gap-x-2">
      <Image src={Awardimg} alt=""/>

          <h4 className="font-semibold text-xl">Industry best practices</h4>
        </div>
          <p className="text-sm  mt-2">Asap Exchange supports a variety of the most popular digital crypto currencies.</p>
        </div>


        <div className="mt-10">
          <div className="w-fit mx-auto flex gap-x-2">
            <Image src={Userimg} alt=""/ >
          <h4 className="font-semibold text-xl">Protected by insurance</h4>

          </div>
          <p className="text-sm  mt-2">Cryptocurrency stored on our servers is covered by our insurance policy.</p>
        </div>


        <div className="mt-10">

          <div className="flex gap-x-2 mx-auto w-fit">
            <Image src={Tradeimg} alt="" />
      <h4 className="font-semibold text-xl">Trade Assets</h4>

          </div>
     
        

        
      
          <p className="text-sm  mt-2">Discover new and innovative crypto assets with over 200 spot trading pairs and 25 margin.</p>
        </div>

      </section>



      <section className="mt-20 p-5 from-blue-800 to-blue-200 bg-gradient-to-br text-white">
        <p className="text-xs text-orange-200 font-semibold mb-2">Your gateway to the global economy</p>
        <h1 className="font-bold text-4xl w-4/5">The Easiest Crypto Wallet</h1>
        <p className="mt-2 text-sm">Bitcoin uses peer-to-peer technology to operate with no central authority or banks; managing transactions and the issuing of bitcoins is carried out collectively by the networ</p>

        <Button className="bg-white text-black mt-3">Get it now</Button>


      </section>
    </main>

    </>
  );
}
