'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Logo from "../../public/elitlogo.png"
import Cookies from "js-cookie"
import { useState,useEffect } from "react"
import Image from "next/image"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "@/components/ui/firebase"
import { useRouter } from "next/navigation"

export default function Login(){
    const router = useRouter()
    const [darkMode,setdarkMode] = useState(false)
    const setToDarkMode = ()=>{
        setdarkMode(true);
        const body =  document.querySelector('body')!;
       body.style.backgroundColor= 'black'
        Cookies.set('dark','true')
    }
    const setLightMode = ()=>{
        setdarkMode(false);
        const body =  document.querySelector('body')!;
       body.style.backgroundColor= 'white'
        Cookies.set('dark','false')
    }

    const gotoHome = ()=>{
        router.push('/')
    }
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error ,setError] = useState(false)
    const [errmessage, setErrmessage] = useState('')
    const [loading,setLoading] = useState(false)
  
    // const [error,setError] = useState(false)
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      setError(false)
      setErrmessage('')
      setLoading(true)
      if(email !== '' && password !==''){
        signInWithEmailAndPassword(auth,email,password)
        .then((cred)=>{
          setLoading(false)
          Cookies.set("User",JSON.stringify(cred.user),{ sameSite: 'Lax', expires:2 })
          router.push('/dashboard')
         
  
        })
        .catch((error)=>{
          setError(true)
          setErrmessage(error.message)
          setLoading(false)
  
        })
  
  
      }
    }
   // check for cookies
    useEffect(()=>{
      if(Cookies.get("User")){
          router.push('/dashboard');
      }
  })
  
    

    return(

        <div className={darkMode?'h-screen pb-2 dark bg-black':'h-screen pb-2'}>
       
        <main className="mt-10 md:w-2/6 md:mx-auto dark:text-white text-center">
            <header>
                <Image src={Logo} className="mx-auto" alt=""/>
            </header>
            <h1 className="font-bold text-xl mt-3 dark:text-[#8670FC]">Log in</h1>
            <p className="text-sm dark:text-gray-100">Fill in the details to log into your account</p>
           <form onSubmit={handleSubmit} className="py-10 flex flex-col px-2 space-y-3 "
           >

            {errmessage && <div className="text-red-600 border-red-600 rounded-md">{errmessage}</div>}

          
            <Input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" required/>
            <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" required/>
            
            <Button type="submit" disabled={loading} className="w-3/5  font-semibold mx-auto text-white bg-[#8670FC]">Submit</Button>
            
           </form>

           <p className="text-sm text-gray-400">Don&apos;t have an account? <Link href={'/signup'} className="text-[#8670FC] font-semibold">Sign up</Link></p>




        </main>
        
        
        
        </div>
    )
}