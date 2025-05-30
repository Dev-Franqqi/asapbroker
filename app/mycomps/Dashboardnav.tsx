"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import Logo from "../../public/elitlogo.png";
import { FaRegBell, FaRegEnvelope } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoMdClose } from "react-icons/io";
type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function DashboardNav({ open, setOpen }: Props) {
  return (
    <nav className="sticky top-0 w-full h-fit bg-[#18192d] text-white p-4 shadow-md z-20">
      <div className="flex justify-between items-center">
        {/* Left Section */}
        <div className="flex gap-x-6 items-center">
          <button
            className={`transition ${open ? "hidden" : "block"}`}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <RxHamburgerMenu className="cursor-pointer text-lg" />
          </button>
          <button
            className={`transition ${open ? "block" : "hidden"}`}
            onClick={() => setOpen(false)}
            aria-label="Open menu"
          >
            <IoMdClose className="cursor-pointer text-lg" />
          </button>

          <header className="flex items-center gap-x-2">
            <Image src={Logo} alt="Elite Trading Hub Logo" width={30} height={30} />
            <p className="text-sm font-bold">Elite Trading Hub</p>
          </header>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-x-4">
          <FaRegBell className="cursor-pointer text-lg" />
          <FaRegEnvelope className="cursor-pointer text-lg" />
          <Avatar>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
}
