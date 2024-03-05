"use client"
import { useState,useEffect } from "react"
import Cookies from "js-cookie"
import {useRouter} from "next/navigation"
import Logo from "../../public/elitlogo.png"
import Image from "next/image"
import { Avatar,AvatarFallback } from "@/components/ui/avatar"
import Card1 from "../../public/card 1.png"
import Flag from "../../public/US.png"
import { FaArrowDown } from "react-icons/fa";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaArrowsLeftRight, FaArrowsUpDownLeftRight } from "react-icons/fa6";
import { getDocs } from "firebase/firestore"
import { query,where } from "firebase/firestore";
import { collection } from "firebase/firestore"
import { db } from "@/components/ui/firebase"
import { Button } from "@/components/ui/button"

interface Person{
    email:string;
    amount:number;
    firstname:string;
    lastname:string;
    uid:string;
    password:string;
  
  }

type B ={
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
    const [loading,setLoading] = useState(true)
    const [darkMode,setdarkMode] = useState(false)
    const [user,setUser] = useState<Person>()
    const setToDarkMode = ()=>{
        setdarkMode(true);
        Cookies.set('dark','true')
    }
    const setLightMode = ()=>{
        setdarkMode(false);
        Cookies.set('dark','false')
    }

    const gotoHome = ()=>{
        router.push('/')
    }
    useEffect(()=>{
        const dark = Cookies.get('dark');
        if(dark){
          if(dark==='true'){
            setdarkMode(true)
          }
        }
        else{
          setdarkMode(false)
          
        }

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
    
    },[user])


    return (

   


        <>

        {loading?<div>loading...</div>:
        <div className={darkMode?"dark bg-[#09081a] h-screen ":"h-screen bg-[#e7e7e7]"}>
        <div className="h-52 rounded-b-3xl bg-[#4f3bbf] relative">
        <nav className="pt-3 px-2 flex justify-between">

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
</svg>


<Image src={Logo} alt="" />

{!darkMode &&  <svg
onClick={setToDarkMode}
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
strokeWidth={1.5}
stroke="currentColor"
className="w-6 h-6 mt-1 text-white"
>
<path
strokeLinecap="round"
strokeLinejoin="round"
d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
/>
</svg>}
{darkMode && <svg xmlns="http://www.w3.org/2000/svg" onClick={setLightMode} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-1 text-white">
<path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>
}
</nav>
<section className="flex gap-x-3 mt-4 text-white px-3">
        <Avatar className="border">
<AvatarFallback>FE</AvatarFallback>
</Avatar>

<div>
<p className="font-semibold">{user?.firstname + ' ' +user?.lastname}</p>
<p className="text-xs font-light">Personal Account</p>
</div>



        </section>



        <div className="px-3 absolute bottom-4 left-5">
            <div className="flex "><Image src={Flag} alt=""/> <p className="text-white font-medium text-sm">US Dollar</p></div>
            <p className="font-semibold text-2xl text-white">{`$ ${user?.amount}.00`}</p>
        </div>

        <Image className="absolute bottom-1 right-3" src={Card1} alt=""/>

            

        </div>

    {/* <nav className="pt-3 px-2 flex justify-between">

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:text-white">
<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
</svg>


<Image src={Logo} alt="" />
   
{!darkMode &&  <svg
onClick={setToDarkMode}
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
strokeWidth={1.5}
stroke="currentColor"
className="w-6 h-6 mt-1 md:text-black  hover:text-[#8670FC]"
>
<path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
/>
</svg>}
{darkMode && <svg xmlns="http://www.w3.org/2000/svg" onClick={setLightMode} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-1 text-[#8670FC]">
<path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>
}
    </nav>





    <main className="dark:text-white px-4 py-16 bg-gray-200">


        <section className="flex gap-x-3">
        <Avatar className="border">
<AvatarFallback>FE</AvatarFallback>
</Avatar>

<div>
<p className="font-semibold">Franklin Ebi</p>
<p className="text-xs font-light">Personal Account</p>
</div>



        </section>

        <section className="bg-[#8670FC] w-full mt-4 relative rounded-md h-36">
        <div className="w-2/5 h-10 bg-[#a697fd] rounded-full rounded-t-none ml-10"></div>


        <div className="px-2 absolute bottom-3 text-white w-full">

            <div className="flex justify-between text-xl font-bold">
                <p>$4903.00</p>
                <p>0.0040847</p>
            </div>
            <div className="flex justify-between font-semibold text-xs">
                <p>USD Balance</p>
                <p>BTC Balance</p>
            </div>
        </div>


        </section>

        <section className="flex justify-between mt-3 text-center">
            <div className="w-[45%] bg-[#8670FC] text-white rounded-md py-1 ">
                <p>Deposit</p>
            </div>
            <div className="w-[45%] bg-[#8670FC] text-white rounded-md py-1 ">
                <p>Deposit</p>
            </div>
        </section>


    </main> */}
        <div className="w-16 h-1 rounded-lg mx-auto bg-gray-500 mt-2 "></div>

    <main className="px-3 py-4">
        {/* <section className="flex justify-between w-4/5 mx-auto">
            <div className="rounded-xl relative w-[25%] h-16 shadow-md bg-[#4f3bbf] p-2">
                <FaArrowDown className="mx-auto text-2xl text-white"/>i
                    <p className="text-center absolute bottom-4 left-3 font-medium text-sm text-white">deposit</p>
            </div>
            <div className="rounded-xl relative w-[20%] h-16 shadow-md bg-[#4f3bbf] p-2">
                    <BiMoneyWithdraw className="mx-auto text-2xl text-white" />
                    <p className="text-center absolute bottom-4 left-3 mx-auto font-medium text-sm text-white">withdraw</p>


            </div>
            <div className="rounded-xl relative w-[24%] h-20 bg-[#4f3bbf] p-2">
                <FaArrowsUpDownLeftRight className="mx-auto text-2xl text-white"/>
            <p className="text-center absolute bottom-4 left-3 font-medium text-sm text-white">transfer</p>


            </div>
           
        </section> */}
        <section>
            <Button onClick={()=>router.push('/dashboard/deposit')} className="font-semibold bg-black dark:border text-white">Deposit</Button>
            <Button className="font-semibold bg-[#4f3bbf] text-white ml-3">Withdraw</Button>

        </section>
        <h2 className="font-bold dark:text-white mt-10">Transactions</h2>
        <p className="text-center text-red-400 mt-3">No transaction yet</p>
    </main>
    </div>

        }
        
        
         
        </>
    )
}