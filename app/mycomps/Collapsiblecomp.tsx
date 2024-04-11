import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { MdKeyboardArrowLeft, MdKeyboardArrowDown } from "react-icons/md";

type MenuLink = {
    name: string;
    link: string;
}

interface Props {
    className?: string;
    title: string;
    menuLinks: MenuLink[];
}

export default function Collapsiblecomp({ title, className, menuLinks }: Props) {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <div className={className}>
            <div onClick={toggleMenu} className="flex w-4/5 mx-auto justify-between">
                <span className="text-xl text-[#1a1440] dark:text-[#8670FC] font-semibold">{title}</span>
                {open ? <MdKeyboardArrowDown className="block text-3xl" /> : <MdKeyboardArrowLeft className="block text-3xl" />}
            </div>

            <motion.div
                initial={{ height: 0 }}
                animate={{ height: open ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
            >
                <ul className="pl-16 mt-3 font-medium">
                    {menuLinks.map((link, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link className="text-lg" href={link.link}>
                                {link.name}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
}

