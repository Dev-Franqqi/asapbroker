'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Logo from "../../public/elitlogo.png"
import Cookies from "js-cookie"
import { useState,useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc } from "firebase/firestore";
import { auth,colref } from "@/components/ui/firebase"

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

    const gotoHome = ()=>{
        router.push('/')
    }
    const [firstname,setFirstName]  =useState('');
    const [lastname,setLastname] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error ,setError] = useState(false);
    const [phone,setPhone] = useState('');
    const [country,setCountry] = useState('')
    const [errmessage,setErrmessage] = useState('');
    const [loading,setLoading] = useState(false)
   



    
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
                amount: 0,
               
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
      },[])

    return(

        <div className={darkMode?'h-screen pb-2 dark bg-black':'h-screen pb-2'}>
        <nav className="p-3 flex justify-between">
        <svg xmlns="http://www.w3.org/2000/svg" onClick={gotoHome} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:text-[#8670FC]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
       
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
        <main className="mt-10 md:w-2/6 md:mx-auto text-center dark:text-white">
            <header>
                <Image src={Logo} className="mx-auto" alt=""/>
            </header>
            <h1 className="font-bold text-xl mt-3 dark:text-[#8670FC]">Sign Up Now</h1>
            <p className="text-sm dark:text-gray-100">Fill in the details to create an account</p>
           <form onSubmit={handleSubmit} className="py-10 flex flex-col px-2 space-y-3 "
           >
              {errmessage && <div className="text-red-600 border rounded-md border-red-600">{errmessage}</div>}


            <div className="flex gap-x-2">
            <Input type="text" value={firstname} onChange={(e)=>setFirstName(e.target.value)} placeholder="Firstname" required/>
            <Input type="text" value={lastname} onChange={(e)=>setLastname(e.target.value)} placeholder="Lastname" required/>
            </div>
            <Input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" required />
            <Input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="password" required/>
            <Input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Phone" required/>
            <Input type="text" value={country} onChange={(e)=>{setCountry(e.target.value)}} placeholder="Country"required />

            <Button disabled={loading} type="submit" className="w-3/5  font-semibold mx-auto text-white bg-[#8670FC]">Submit</Button>
            
           </form>

           <p className="text-sm text-gray-400">Already have an account? <Link href={'/login'} className="text-[#8670FC] font-semibold">Log in</Link></p>




        </main>
        
        
        
        </div>
    )
}