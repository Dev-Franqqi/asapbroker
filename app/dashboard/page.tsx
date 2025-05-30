"use client"
import { useState,useEffect } from "react"
import Cookies from "js-cookie"
import Image from "next/image"
import BTC from '../../public/btc.png'
import Paypal from '../../public/Paypal.png'
import Bank from '../../public/Bank.png'
import Ltcwidget from "../mycomps/Ltcwidget"
import {useRouter} from "next/navigation"
import Bitcoinwidget from '../mycomps/Bitcoinwidget'
import { IoMdClose } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaTachometerAlt, FaUser, FaShoppingCart, FaMoneyCheckAlt, FaWallet } from 'react-icons/fa'
import { IUser } from "../mycomps/contexts/Usercontext"
import Logo from '../../public/elitlogo.png'
import useUser from "../mycomps/hooks/useUser"
import Ethwidget from "../mycomps/Ethwidget"
import { RxHamburgerMenu } from "react-icons/rx";
import Bitcoincandle from "../mycomps/Bitcoincandle"
import { getDocs } from "firebase/firestore"
import { query,where } from "firebase/firestore";
import { collection } from "firebase/firestore"
import TradingViewTickerTape from "../mycomps/TradingViewTickerTape"
import { db } from "@/components/ui/firebase"
import { Button } from "@/components/ui/button"
import NewsWidget from "../mycomps/Newswidget"
import { IoWalletOutline } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
// import Marketview from '../mycomps/Marketview'
import Loadingcomp from '../mycomps/Loading'
// import Miniwidget from '../mycomps/Miniwidget'
import Bnbwidget from "../mycomps/Bnbwidget"
import { Timestamp } from "firebase/firestore"
import { Input } from "@/components/ui/input"
import Link from "next/link"
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
    createdAt:Timestamp;
    plan:string;
    transactions:TR[]
  }
 export type TR ={
  name:string,
  type:string,
  tamount:number,
  date:string,
  docref:string

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
    const [closeBox,setCloseBox] = useState(false)
    const [accAge,setAccAge] = useState('')
   const [da,setDa] = useState('')
   const [btc,setBtc] = useState<number>(0)
   const [eth,setEth] = useState<number>(0)
  
   const [transactions,setTransactions] = useState<TR[]>()
   const {user,setUser} = useUser()
  const orderHistory = [
    {
      type: 'SYP',
      status: 'Active',
      period: '3M',
      capital: 15500,
      date: '2024-10-05',
    },
  ];
 
    useEffect(()=>{
      console.log('Dashboard useEffect running')
       if(!user.uid){
        console.log('No user found, checking cookies...')

         
         const userCookie = Cookies.get('User');
        if(userCookie){
            const cookieValue:B  = JSON.parse(userCookie)
           

            const q = query(
                collection(db,"UserInfo"),
                where("uid","==",`${cookieValue.uid}`)
            )
            if(!loading ){
                return
            }
            else{
                
                getDocs(q).then(snapshot=>{

                    setUser(snapshot.docs[0]?.data() as IUser)
                    getDocs(q).then(snapshot=>{
                        setUser(snapshot.docs[0]?.data() as IUser)
                        console.log('User found in cookies:')
                        console.log(user)
                      })
                })
            }
            }
            
            
        
        else{
            router.push('/login')
            return
        }
        }

        if (user) {
          console.log('User found:', user);
          const q = query(
              collection(db, "transactions"),
              where("docref", "==", user.uid) // Use user.uid directly, no need for template literals
          );
      
          if (loading) {
            console.log("Fetching transactions for user:", user.uid);
              getDocs(q)
                  .then(snapshot => {
                      const transactions = snapshot.docs.map(doc => doc.data() as TR);
                      setTransactions(transactions); // Set all matching transactions
                      console.log("Matching transactions:", transactions);
                    })
                    .catch(error => {
                      console.error("Error fetching transactions:", error);
                  })
                  .finally(() => {
                      setLoading(false); // Ensure loading is set to false regardless of success or error
                  });
          }
      }
      //convert dollar to eth 
      async function convertUSDToETH(usdAmount:number) {
  const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
  const data = await response.json();
  const ethPrice = data.ethereum.usd;

  const ethAmount = usdAmount / ethPrice;
  setEth(ethAmount);
  return ethAmount;
}
async function convertUSDToBTC(usdAmount:number) {
  const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
  const data = await response.json();
  const btcPrice = data.bitcoin.usd;

  const btcAmount = usdAmount / btcPrice;
  setBtc(btcAmount);
  return btcAmount;
}
if(user.btc){
  convertUSDToBTC(user.btc)
}

if(user.eth){
  convertUSDToETH(user.eth)

}
    

     let date = `${user?.createdAt?.toDate()}`

     setDa(date.substring(4, 16))
     const createdDate = user?.createdAt?.toDate(); // Convert Timestamp to Date
     const now = new Date();
     if (createdDate){

     const diffInMs = now.getTime() - createdDate.getTime(); // Difference in milliseconds
     const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
     const diffInHours = Math.floor(diffInMinutes / 60);
     const diffInDays = Math.floor(diffInHours / 24);
     const diffInMonths = Math.floor(diffInDays / 30); // Approximation
     const diffInYears = Math.floor(diffInMonths / 12);
   
     let accountAge: string;
   
     if (diffInMinutes < 60) {
       accountAge = `${diffInMinutes}M`; // Minutes
     } else if (diffInHours < 24) {
       accountAge = `${diffInHours}H`; // Hours
     } else if (diffInDays < 30) {
       accountAge = `${diffInDays}D`; // Days
     } else if (diffInYears < 1) {
       accountAge = `${diffInMonths}M`; // Months
     } else if (diffInYears < 2) {
       accountAge = `1Y ${diffInMonths % 12}M`; // 1 year and remaining months
     } else {
       accountAge = `${diffInYears}Y`; // Years
     }

  setAccAge(accountAge)
}



    },[user,loading,router])


    return (

   


        <div className="bg-black">

        {loading?<Loadingcomp />:

<div className=' bg-[#121114] text-gray-100'>
<div className=' md:flex md:justify-between md:bg-[#202020] md:pt-2'>
<nav className="bg-[#474845] md:bg-[#202020]">


<div className="flex items-center px-5 py-3">
    <Image  src={Logo} alt=''/>
    <header className="font-semibold">ELITE TRADING HUB</header>

    
</div>



</nav>
<div className="flex flex-row-reverse gap-x-10 p-4 bg-[#202020]">
    <Avatar>
  <AvatarFallback className="text-white font-bold">{user?user.firstname[0].toUpperCase()+user.lastname[0].toUpperCase():''}</AvatarFallback>
</Avatar>
    <Input className="w-3/5  bg-[#121114] rounded-lg h-8 border-0" placeholder="Start typing to search..." />

</div>
</div>

<div className="md:flex md:p-2 md:gap-x-2">
<div className="hidden md:block md:w-1/5 bg-[#171716] py-6 px-4">
<div className="flex gap-x-2">
<Avatar>
  <AvatarFallback className="text-black bg-white font-bold">{user?user.firstname[0]?.toUpperCase()+user.lastname[0].toUpperCase():''}</AvatarFallback>
</Avatar>
<div>
  <p>{user?.firstname} {user?.lastname}</p>
  <p className="text-xs">PERSONAL</p>
</div>
</div>
<hr className="my-5" />
<ul className='text-sm '>
      <li className="py-3 flex items-center">
        <FaTachometerAlt className="mr-2" /> <Link href='/dashboard'>Dashboard</Link>
      </li>
      <li className="py-3 flex items-center">
        <FaUser className="mr-2" /> <Link href='/dashboard/settings'>Profile</Link>
      </li>
      <li className="py-3 flex items-center">
        <FaShoppingCart className="mr-2" /> <Link href='/dashboard'>Order</Link>
      </li>
      <li className="py-3 flex items-center">
        <FaMoneyCheckAlt className="mr-2" /> <Link href='/dashboard/deposits'>Deposit</Link>
      </li>
      <li className="py-3 flex items-center">
        <FaWallet className="mr-2" /> <Link href='/dashboard/withdraw'>Withdraw</Link>
      </li>
    </ul>
</div>

<div className="bg-[#171716]">



<main className="py-10 px-4 bg-black">
    <p className='text-xl font-medium text-center mb-4 '>Welcome, <span className="font-medium text-[#8670D6]">{user?.firstname} {user?.lastname}</span> </p>
<TradingViewTickerTape />
    <div className=" text-center">
    {/* <div className="mt-16" >
        <p className="text-lg text-[#8670D6]" >Your Portfolio Balance</p>
        <p className="text-5xl font-semiboldo">${user?.currentprofits}</p>
    </div> */}
    <section className="bg-gray-900 py-12">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 text-center">Portfolio Balance</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#8670D6]/20">
        <h3 className="text-xl font-semibold text-white">Bitcoin (BTC)</h3>
        <p className="text-2xl md:text-3xl font-bold text-[#8670D6] mt-3">{btc}</p>
        <p className="text-sm text-gray-300 mt-2">${user.btc?user.btc:0}</p>
      </div>
      <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#8670D6]/20">
        <h3 className="text-xl font-semibold text-white">Ethereum (ETH)</h3>
        <p className="text-2xl md:text-3xl font-bold text-[#8670D6] mt-3">{eth} ETH</p>
        <p className="text-sm text-gray-300 mt-2">${user.eth?user.eth:0}</p>
      </div>
      <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#8670D6]/20">
        <h3 className="text-xl font-semibold text-white">US Dollar (USD)</h3>
      <p className="text-2xl md:text-3xl font-bold text-[#8670D6] mt-3">${user.currentprofits}</p>
        <p className="text-sm text-gray-300 mt-2">Cash Balance</p>
      </div>
    </div>
  </div>
</section>
   
    <div className="grid grid-cols-3 gap-4 w-full bg-gray-800 border border-gray-700 text-gray-300 rounded-md p-4 mx-auto mt-4">
  <div className="flex flex-col items-center p-2">
    <span className="text-lg font-semibold">{user?.plan?user.plan:'STA'}</span>
    <span className="text-sm text-gray-400">Plan</span>
  </div>
  <div className="flex flex-col items-center p-2">
    <span className="text-lg font-semibold">${user?.totaldeposits}</span>
    <span className="text-sm text-gray-400">Capital</span>
  </div>
  <div className="flex flex-col items-center p-2">
    <span className="text-lg font-semibold text-teal-400">${user?.currentprofits}</span>
    <span className="text-sm text-gray-400">Profit</span>
  </div>
  <div className="flex flex-col items-center p-2">
    <span className="text-lg font-semibold">{accAge}</span>
    <span className="text-sm text-gray-400">Period</span>
  </div>
  <div className="flex flex-col items-center p-2">
    <span className="text-lg font-semibold">{da}</span>
    <span className="text-sm text-gray-400">Date</span>
  </div>
  <div className="flex flex-col items-center p-2">
    <span className="text-lg font-semibold bg-green-500 text-white px-2 py-1 rounded">Active</span>
    <span className="text-sm text-gray-400">Status</span>
  </div>
</div>



    </div>
    <div className="p-6 flex  md:w-3/5 md:mx-auto gap-x-4 ">
        <Button onClick={()=>router.push('/dashboard/deposits')} className="px-5 w-3/5 bg-green-600">Deposit</Button>
        <Button onClick={()=>router.push('/dashboard/withdraw')} className="px-5 bg-red-400 w-3/5">Withdraw</Button>
    </div>

</main>
<section className="p-5">

<p className="text-base font-semibold text-gray-400">Balance History</p>
<hr />
<div style={{ height: '500px', width: '100%' }}>
      <Bitcoincandle />
    </div>
<div className="flex flex-wrap overflow-x-hidden">
    <div className="w-2/5 ">

<Bitcoinwidget />
    </div>
    <div className="w-2/5">

    <Ethwidget />

    </div>
    <div className="w-2/5">
<Ltcwidget />


    </div>
    <div className="w-2/5">
<Bnbwidget />


    </div>
   

</div>
</section>


<section className="py-5">
<p className="text-base font-semibold pl-6 text-gray-400">Send Money Through</p>
<hr className="mt-2  border-gray-600 w-[90%] mx-auto "/>

<div className="flex justify-between md:justify-normal md:gap-x-3 px-6 mt-3">


    <div className="w-[30%] md:w-[10%] h-fit p-6 bg-gray-700 rounded-md">
        <Image src={BTC} alt='' width='50' height='50' className="mx-auto"/>
        <p className='text-center'>BTC</p>
    </div>
    <div className="w-[30%] md:w-[10%] h-fit p-6 bg-gray-700 rounded-md">
    <Image src={Paypal} alt='' width='100'
    className="mx-auto"
     height='100'/>
        <p className='text-center'>PAYPAL</p>
    </div>
    <div className="w-[30%] md:w-[10%] h-fit p-6 bg-gray-700 rounded-md">
    <Image src={Bank} alt=''width='50' height='50' className="mx-auto"/ >
        <p className='text-center'>Bank</p>
    </div>
</div>
</section>
<section className="md:flex md:items-center">

<section className="relative py-6 overflow-x-hidden ">
    <NewsWidget />
</section>
<section className="p-6 mt-10 md:w-2/5">
    
    <div className="p-4 bg-gray-800 text-white">
      <h2 className="text-lg font-bold mb-4">Transactions</h2>
      <div className="border-t border-yellow-500 mb-4"></div>
      {transactions ? transactions.map((transaction, index) => (
        <div key={index} className="flex justify-between items-center py-4 border-b border-gray-700">
          <div>
            <h3 className="text-sm font-semibold">{transaction.name}</h3>
            <p className="text-xs text-gray-400">{transaction.type}</p>
            <p className="text-xs text-gray-400 mt-1">{transaction.date}</p>
          </div>
          <div
            className={`text-sm font-bold px-3 py-1 rounded ${
              transaction.tamount < 0 ? 'bg-red-600 text-white' : 'bg-green-600 text-white'
            }`}
          >
            {transaction.tamount.toString()}
          </div>
        </div>
      )):<p>No Transactions Yet</p>}
    </div>
</section>
    
</section>
</div>

<div className="md:w-1/5 bg-[#171716] md:block hidden">
<div className="p-4 bg-gray-800 text-white rounded-md w-full max-w-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-bold">Order History</h2>
        <button className="text-gray-400 hover:text-gray-200">
          <i className="fas fa-sync-alt"></i>
        </button>
      </div>
      <div className="border-t-2 border-yellow-500 mb-4"></div>
      <div className="flex gap-x-2 text-gray-400 text-sm font-semibold mb-2">
        <span>TYPE</span>
        <span>PERIOD</span>
        <span>CAPITAL</span>
        <span>DATE</span>
      </div>
      
        <div
          
          className="flex gap-x-2 py-3 items-center border-t border-gray-700 text-xs"
        >
          <div className="flex items-center justify-between">
            <span className="font-bold text-white">{user?.plan}</span>
            
          </div>
          <span>{accAge}</span>
          <span className="text-green-400 font-bold">
            ${user?.totaldeposits}
          </span>
          <span>{da}</span>
        </div>
     
    </div>

</div>




{/* <div className="md:flex ">

<Miniwidget />
<Marketview />
</div> */}
{/* <Marketview /> */}
</div>
</div>




        }
        
        
         
        </div>
    )
}