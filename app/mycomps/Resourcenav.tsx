import { useRouter } from "next/navigation";
import Elitelogo from "../../public/elitlogo.png"
import Image from "next/image";
import { FaAngleLeft } from "react-icons/fa";
export default function Resourcenav(): JSX.Element {
    const router = useRouter();

    return (
        <nav className="flex gap-x-4 p-2">
            <FaAngleLeft onClick={() => router.push('/')} className="text-2xl" />
            <header className="font-bold text-lg flex">
                <Image src={Elitelogo} className="scale-50" alt="Elite logo" />
                ELITE TRADING HUB
            </header>
        </nav>
    );
}