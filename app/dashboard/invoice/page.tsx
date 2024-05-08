"use client"
import { useEffect,useState } from "react"
import Logo from "../../../public/elitlogo.png"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import Image from "next/image"
export default function Invoice(){
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
    useEffect(()=>{
        const dark = Cookies.get('dark');
        if(dark){
          if(dark==='true'){
            setdarkMode(true)
          }
        }
        else{
          setdarkMode(false)
        }},[])

    return(

        <>
        <div className={darkMode?'dark bg-[#0d0f29] h-screen text-white':'text-neutral-800'}>
        <nav className="pt-3 px-2 flex justify-between">


<svg xmlns="http://www.w3.org/2000/svg" onClick={()=>router.push('/dashboard')} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:text-[#8670FC]">
<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>


<Image src={Logo} alt="" />

{!darkMode &&  <svg
onClick={setToDarkMode}
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
strokeWidth={1.5}
stroke="currentColor"
className="w-6 h-6 mt-1 "
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

<main className="p-4 pt-10">
    <h1 className="font-bold text-2xl">Invoices</h1>

    <p className="mt-2 text-sm">View all past transactions</p>

</main>


            <div className="text-red-600 text-center mt-7">
                No transaction information available
            </div>

        </div>
        
        </>
    )
}
