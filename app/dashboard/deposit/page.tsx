"use client"
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Cryptoiconsimg from "../../../public/cryptoicons 2.png"
import Card from "../../../public/card 1.png"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Image from "next/image";
import Btc from "../../../public/btc.png"
import Eth from "../../../public/eth.png"
import Usdt from "../../../public/usdt.png"
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer";
export default function Deposit(){
    const [darkMode,setDarkMode] = useState<boolean>(false)
    const [show,setShow] = useState<boolean>(false)

    const router = useRouter()
    const setToDarkMode = ()=>{
        setDarkMode(true);
        Cookies.set('dark','true')
    }
    const setLightMode = ()=>{
        setDarkMode(false);
        Cookies.set('dark','false')
    }

     
    //  const { ref, inView } = useInView({
    //   triggerOnce: true, // Only trigger once
    //   threshold: 0.5, // Trigger when 50% of the element is in view
    // });
          const [email,setEmail] = useState<string>('');
          const [message, setMessage] = useState<string>('');
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

        <>

        <div className={darkMode?'dark bg-black h-screen':'screen'}>
        <nav className="p-3 flex justify-between">
        <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>router.push('/dashboard')} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:text-[#8670FC]">
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

        <main className="pt-10 px-4 ">
          <h1 className="text-center dark:text-white font-semibold mb-3">
            Select Deposit Method
          </h1>

          <section className="dark:text-black">
            <Drawer>
              <DrawerTrigger className="w-full h-fit  active:border-red-500 focus:border-none focus:border-red-300">
                <div onClick={()=>setShow(false)} className="flex items-center justify-between px-2 border-black border bg-gray-100 dark:border-0 dark:bg-gray-300 rounded-md  text-sm">
                  <p className="text-sm">Via Crypto tokens</p>
                  <Image
                    loading="lazy"
                    src={Cryptoiconsimg}
                    className="w-16"
                    alt=""
                  />
                </div>
              </DrawerTrigger>
              <DrawerContent className="text-white">
                <DrawerHeader>
                  <DrawerTitle>Copy wallet address</DrawerTitle>
                  <DrawerDescription>
                    Make payments into the defined token wallets
                  </DrawerDescription>

                  <div className="mt-4">
                    <div className="flex justify-between">
                      <Image src={Btc} alt="" />
                      <p className="">1xijdee90ejdkddfkjfsf</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                        />
                      </svg>
                    </div>
                    <div className="flex justify-between mt-2">
                      <Image src={Eth} alt="" />
                      <p className="">1xijdee90ejdkddfkjfsf</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                        />
                      </svg>
                    </div>
                    <div className="flex justify-between mt-3">
                      <Image src={Usdt} alt="" />
                      <p className="">1xijdee90ejdkddfkjfsf</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                        />
                      </svg>
                    </div>
                  </div>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose>
                    <Button variant="outline">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>

            <div onClick={()=>{setShow(!show)}} className="flex items-center justify-between px-2 py-3 border border-black bg-gray-100 rounded-md  mt-2 text-sm dark:bg-gray-300">
              <p className="text-sm">Via Card </p>
              <Image src={Card} className="w-24" alt="" />
            </div>
          </section>
        </main>

        <Alert
          variant="destructive"
          className={show?"absolute  bottom-20 w-[98%] ml-1 dark:bg-gray-100 dark:text-red-700":"hidden"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>

          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Method is unavailable at the moment. Try again later
          </AlertDescription>
        </Alert>
        </div>
        
        
        
        </>
    )
}