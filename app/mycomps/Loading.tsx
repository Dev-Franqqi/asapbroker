import Logo from "../../public/elitlogo.png"
import Image from "next/image"
import { useState,useEffect } from "react"
export default function Loadingcomp(){
    

    return(<main className={'h-screen'}>

        <Image src={Logo} alt="logo" className="animate-bounce mx-auto mt-[50%] "/>
       
    </main>

    )
}