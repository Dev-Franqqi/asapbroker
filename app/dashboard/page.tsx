"use client"
import { useState,useEffect } from "react"
import Cookies from "js-cookie"
import {useRouter} from "next/navigation"
import Logo from "../../public/elitlogo.png"
import Image from "next/image"
import { Avatar,AvatarFallback } from "@/components/ui/avatar"
import Card1 from "../../public/card 1.png"
import { IoMdClose } from "react-icons/io";import Flag from "../../public/US.png"
import {TiPencil} from "react-icons/ti"
import { FaArrowDown } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiMoneyWithdraw } from "react-icons/bi";
import TradingViewWidget from "../mycomps/Tradeview"
import { FaArrowsLeftRight, FaArrowsUpDownLeftRight } from "react-icons/fa6";
import { getDocs } from "firebase/firestore"
import { query,where } from "firebase/firestore";
import { collection } from "firebase/firestore"
import { db } from "@/components/ui/firebase"
import { Button } from "@/components/ui/button"
import { SlGraph } from "react-icons/sl";
import { IoWalletOutline } from "react-icons/io5";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { IoClose } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
import Marketview from "../mycomps/Marketview"
import Loadingcomp from "../mycomps/Loading"
import Miniwidget from "../mycomps/Miniwidget"
import Changeinvestment from "../mycomps/Changeinvestment"
export interface Person{
    email:string;
    amount:number;
    firstname:string;
    lastname:string;
    totaldeposits:number;
    currentprofits:number;
    investment?:string;
    uid:string;
    password:string;
    country:string;
    phone:string;
  }

export type B ={
    uid: string,
   email: string,
  emailVerified: boolean,
  isAnonymous: boolean,
  providerData: Array<object>,
  // 0:,
  providerId: string,
  
  displayName: string | null,
  
  phoneNumber: string | null,
  // ...
  apiKey: string,
  appName: string,
  createdAt: string,
  lastLoginAt: string,
  stsTokenManager:{
  accessToken: string,
  expirationTime: string,
  refreshToken: string,
  }
}
  


export default function Dashboard(){
    const router = useRouter();
    const [open,setOpen] = useState<boolean>(false)
    const [loading,setLoading] = useState(true)
    const [darkMode,setdarkMode] = useState(false)
    const [user,setUser] = useState<Person>()
    const [closeBox,setCloseBox] = useState(false)
    const [cookieuid,setCookieuid] = useState('')
    
    const gotoHome = ()=>{
        router.push('/')
    }
    useEffect(()=>{
       

        const userCookie = Cookies.get('User');
        if(userCookie){
            const cookieValue:B  = JSON.parse(userCookie)
            setCookieuid(cookieValue.uid)

            const q = query(
                collection(db,"UserInfo"),
                where("uid","==",`${cookieValue.uid}`)
            )
            if(!loading ){
                return
            }
            else{
                
                getDocs(q).then(snapshot=>{

                    setUser(snapshot.docs[0].data() as Person)
                    getDocs(q).then(snapshot=>{
                        setUser(snapshot.docs[0].data() as Person)
                            
                        console.log(user)
                    })
                })
            }
            }
            
            
        
        else{
            router.push('/login')
        }

        if(user){
        setLoading(false)
        }
    
    },[user,loading,router])


    return (

   


        <>

        {loading?<Loadingcomp />:

<div className={darkMode?'dark bg-[#0d0f29] h-fit text-white':'text-neutral-800 bg-white'}>
<nav className="pt-3 z-50 sticky -top-2 w-full dark:bg-[#0e112e] bg-white  pb-2 px-3 flex gap-x-8 ">


        {/* <svg xmlns="http://www.w3.org/2000/svg" onClick={gotoHome} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:text-[#8670FC]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg> */}

{open? 
    <IoMdClose onClick={()=>setOpen(false)} />
:
<RxHamburgerMenu onClick={()=>setOpen(true)} className=" dark:text-white" />
}
<div className="flex">
<Image src={Logo} className="relative -top-1 scale-50" alt="" />
    <span className="text-black font-extrabold dark:text-white">ELITE TRADING HUB</span>
</div>


</nav>




<main className={open?'px-4  flex flex-col space-y-4 ':'mt-4 p-4 flex flex-col space-y-4'}>


<div className={closeBox?'hidden':"border rounded-md py-3 text-sm pl-2 flex justify-between"}>


<p className="text-gray-400 ">Experiencing errors? send a mail to support@elitetradinghub.co</p>
<IoClose className={"mt-3  text-right relative -left-3 text-xl"} onClick={()=>setCloseBox(true)} />


</div>

    <div className=" border mt-12  dark:border-gray-600 shadow-md rounded-md p-3">
    <div className="  flex justify-between h-[5rem] dark:border-gray-600 shadow-md rounded-md p-3">
        <div>

        <p className="font-semibold text-sm">WELCOME {`${user?.firstname.toUpperCase()} ${user?.lastname.toUpperCase()}`}</p>
        <p className="font-medium text-xs">Personal Account</p>
        </div>
        <FaGear onClick={()=>router.push('/dashboard/settings')} className="text-2xl"/>

    </div>
   <Changeinvestment cookieuid={cookieuid} investment={user?.investment} darkMode={darkMode} />
    </div>

    <div className="md:flex  md:justify-between">

    

    <div className="border dark:border-gray-600 md:w-2/6 p-2  h-[10rem] shadow-md  rounded-md">
        
        <div className="border dark:border-gray-600 hover:shadow-2xl rounded-lg px-3 p-2 ">

        <div className="flex gap-x-2 mb-2">
        <SlGraph className="text-4xl" />
        <p className="font-bold pt-2 text-xs">Total Deposit</p>
        </div>
        <p className="text-sm font-bold mb-3">${`${user?.totaldeposits}.00`}</p>
        <Button onClick={()=>router.push('/dashboard/deposit')} className="bg-gray-200 text-[#8670FC]  focus:bg-blue-600 font-semibold ">Deposit</Button>
   
        </div>
    </div>
    <div className="border dark:border-gray-600 p-2 md:w-2/6  h-[10rem] shadow-md  rounded-md">
        
        <div className="border dark:border-gray-600 hover:shadow-2xl rounded-lg px-3 p-2 ">

        <div className="flex gap-x-2 mb-2">
        <IoWalletOutline className="text-4xl" />
        <p className="font-bold pt-2 text-xs">Current Profit</p>
        </div>
        <p className="text-sm font-bold mb-3">${`${user?.currentprofits}.00`}</p>
        <Button onClick={()=>router.push('/dashboard/withdraw')} className="bg-gray-200 text-green-700 focus:bg-blue-600 font-semibold ">Withdraw</Button>
   
        </div>
    </div>
        <div className="md:w-2/6">

    <div className="p-4 bg-sky-600  border mt-2 dark:border-gray-600   h-[10rem] shadow-md   rounded-md">
        <p className="font-bold  text-white">Pending Withdrawals</p>
            <p className="text-bold text-white font-semibold">$0.00</p>

            <Button className="bg-white mt-2">View</Button>
    
    </div>
    <p className="text-xs text-gray-400">*pending withdrawals will appear here</p>
    </div>




  





    {/* <div className="border dark:border-gray-600  h-[10rem] shadow-md p-4 rounded-md">
        <div className="flex gap-x-2 mb-2">
        <LiaFileInvoiceSolid className="text-4xl" />
        <p className="font-bold pt-1">Invoices</p>
        </div>
        
        <Button onClick={()=>router.push('/dashboard/invoice')} className="bg-white text-orange-400 border dark:border-0 font-semibold mt-4">View</Button>
    </div> */}

</div>
    

</main>

<div className="md:flex ">

<Miniwidget />
<Marketview />
</div>
{/* <Marketview /> */}
</div>




        }
        
        
         
        </>
    )
}