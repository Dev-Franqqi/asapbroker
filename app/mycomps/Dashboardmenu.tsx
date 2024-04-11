import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
type Props = {
  open: boolean;
};

export default function Dashboardmenu({ open }: Props) {
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (open && inView) {
      // Start the animation
      console.log('Starting animation');
    }
  }, [open, inView]);

  if (!open) {
    return null; // Render nothing if open is false
  }

  return (
    <motion.aside
      ref={ref}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="p-5 bg-[#8184ac] text-white text-sm -z-10"
    >
      <h2 className="font-semibold mb-4">Personal Account</h2>
      <ul className="leading-10 pl-4">
      <li><Link href='/'>Homepage</Link></li>
        <hr />
        <li><Link href="#">Dashboard</Link></li>
        <hr />
        <li><Link href="/dashboard/support">Support</Link></li>
        <hr />
        <li><Link href="/dashboard/deposit">Deposit</Link></li>
        <hr />
        <li><Link href={'/dashboard/withdraw'}>Withdrawal</Link></li>
        <hr />
       
      </ul>
    </motion.aside>
  );
}
