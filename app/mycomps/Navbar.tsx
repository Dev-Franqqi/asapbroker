import Logo from '../../public/elitlogo.png'
import Image from 'next/image'
import { RxHamburgerMenu } from "react-icons/rx";
export default function Navbar(){
    return(
        <nav className='border-b flex justify-between px-4 py-6'>
            <div className='flex'>
                <Image src={Logo} alt="logo" className=" scale-50 mt-2"/>
                <header className='mt-2 text-xl text-blue-950 font-extrabold'>ELITETRADINGHUB</header>
            </div>

            <RxHamburgerMenu className='text-2xl mt-3 '/>
        

        </nav>
    )
}