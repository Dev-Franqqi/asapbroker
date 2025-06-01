'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Logo from "../../public/elitlogo.png"
import Cookies from "js-cookie"
import { useState,useEffect, FormEventHandler, FormEvent } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc } from "firebase/firestore";
import { auth,colref } from "@/components/ui/firebase"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
export default function Signup(){
    const router = useRouter()
    const [darkMode,setdarkMode] = useState(false)
    const setToDarkMode = ()=>{
        setdarkMode(true);
        Cookies.set('dark','true')
    }
    const setLightMode = ()=>{
        setdarkMode(false);
        Cookies.set('dark','false')
    }
   
    const handleSelectChange = (e: FormEvent<HTMLSelectElement>) => {
      // Cast e.target to HTMLSelectElement
      const target = e.target as HTMLSelectElement;
      
      // Now TypeScript knows that target.value exists
      setInvestment(target.value);
      console.log(investment);
    };
    const gotoHome = ()=>{
        router.push('/')
    }
    const [firstname,setFirstName]  =useState('');
    const [lastname,setLastname] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error ,setError] = useState(false);
    const [phone,setPhone] = useState('');
    const [investment,setInvestment] = useState('');
    const [country,setCountry] = useState('')
    const [errmessage,setErrmessage] = useState('');
    const [loading,setLoading] = useState(false)
   


const handleclick = ()=>{

  console.log('working')
}
    
    const handleSubmit =(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setLoading(true)
    
        createUserWithEmailAndPassword(auth,email,password)
        .then((cred)=>{
        
           
          
          
    
            addDoc(colref,{
                firstname:firstname,
                lastname:lastname,
                email:email,
                password:password,
                totaldeposits: 0,
                currentprofits:0,
                country:country,
                phone:phone,
                investment:investment,
               
                uid:cred.user.uid
            }).then(()=>{
          Cookies.set("User",JSON.stringify(cred.user),{ sameSite: 'Lax' ,expires:2})

                setEmail("");
                setPassword("");

                
            })
    
            
            setLoading(false)
          router.push('/dashboard')
    
    
            
    
    
        })
    
        .catch(err=>{
            
            setError(true)
            setErrmessage(err.message)
            setLoading(false)
        })
    
     
      
            
    }
 

    return(

        <div className={darkMode?'h-screen pb-2 dark bg-black':'h-screen pb-2'}>
        <nav className="p-3 flex justify-between">
        <Link href='/' className=''>
        <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:text-[#8670FC]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
</Link>


        </nav>
        <main className="mt-10 md:w-2/6 md:mx-auto text-center dark:text-white">
            <header>
                <Image src={Logo} className="mx-auto" alt=""/>
            </header>
            <h1 className="font-bold text-xl mt-3 dark:text-[#8670FC]">Sign Up Now</h1>
            <p className="text-sm dark:text-gray-100">Fill in the details to create an account</p>
           <form onSubmit={handleSubmit} className="py-10 text-xl flex flex-col px-2 space-y-3 "
           >
              {errmessage && <div className="text-red-600 border rounded-md border-red-600">{errmessage}</div>}


            <div className="flex gap-x-2 ">
            <Input type="text" value={firstname} onChange={(e)=>setFirstName(e.target.value)} placeholder="Firstname" required/>
            <Input type="text" value={lastname} onChange={(e)=>setLastname(e.target.value)} placeholder="Lastname" required/>
            </div>
            <Input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" required />
            <Input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="password" required/>
            <Input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Phone" required/>
            <Input type="text" value={country} onChange={(e)=>{setCountry(e.target.value)}} placeholder="Country"required />
            <Select onValueChange={(e)=>setInvestment(e)}>
      <SelectTrigger>
        <SelectValue placeholder="Select Investment" />
      </SelectTrigger>
      <SelectContent className="bg-neutral-700 text-white">
        <SelectItem  value="crude oil">Crude Oil</SelectItem>
        <SelectItem  value="cryptocurrencies">Crypto Currencies</SelectItem>
        <SelectItem  value="cryptocurrencies">Ethereum</SelectItem>
        <SelectItem  value="stocks">Stocks</SelectItem>
        <SelectItem  value="forex">Forex</SelectItem>
        <SelectItem  value="cryptocurrency mining">Cryptocurrency Mining</SelectItem>
        <SelectItem  value="marijuana">Marijuana</SelectItem>
      </SelectContent>
    </Select>

            <Button disabled={loading} type="submit" className="w-3/5  font-semibold mx-auto text-white bg-[#8670FC]">Submit</Button>
            
           </form>

           <p className="text-sm text-gray-400">Already have an account? <Link href={'/login'} className="text-[#8670FC] font-semibold">Log in</Link></p>




        </main>
        
        
        
        </div>
    )
}