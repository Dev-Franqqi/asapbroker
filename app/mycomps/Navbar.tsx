'use client'
import Logo from '../../public/elitlogo.png'
import Image from 'next/image'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import useOpen from './hooks/useOpen';
export default function Navbar(){
    const {open,setOpen} = useOpen()
    return(
        <nav className='border-b flex justify-between px-4 py-6'>
            <div className='flex'>
                <Image src={Logo} alt="logo" className=" scale-50 mt-2"/>
                <header className='mt-2 text-xl text-blue-950 font-extrabold'>ELITETRADINGHUB</header>
            </div>

            {open? <IoCloseOutline onClick={()=>setOpen(false)} className='text-2xl mt-3 ' />:<RxHamburgerMenu onClick={()=>setOpen(true)} className='text-2xl mt-3 '/>}

            
        

        </nav>
    )
}