"use client";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "../../../../public/elitlogo.png";
import Verified from "../../../../public/verified.png";
import { PaypalForm, CashappForm, BankForm } from "../page";

export default function Pending() {
  const router = useRouter();
  const [cookieState, setCookieState] = useState<
    { paypalForm: PaypalForm } | { cashappForm: CashappForm } | { bankForm: BankForm } | undefined
  >();

  useEffect(() => {
    const cookie = Cookies.get("withdrawal");
    if (!cookie) {
      router.push("/dashboard/withdraw");
    } else {
      try {
        const withdrawal = JSON.parse(cookie);
        setCookieState(withdrawal);
        console.log(withdrawal);
      } catch (err) {
        console.error("Invalid cookie format", err);
        router.push("/dashboard/withdraw");
      }
    }
  }, [router]);

  const paypal = cookieState && "paypalForm" in cookieState ? cookieState.paypalForm : null;
  const cashapp = cookieState && "cashappForm" in cookieState ? cookieState.cashappForm : null;
  const bank = cookieState && "bankForm" in cookieState ? cookieState.bankForm : null;

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <nav className="pt-4 px-4 flex items-center gap-x-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => router.push("/dashboard")}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-[#8670D6] cursor-pointer"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        <div className="flex items-center gap-x-2">
          <Image src={Logo} alt="Forex Trading Live" width={24} height={24} className="object-contain" />
          <header className="text-sm font-bold text-white">ETRADINGHUB</header>
        </div>
      </nav>

      <section className="py-12 flex flex-col items-center text-white">
        <div className="container mx-auto px-4">
          <Image
            src={Verified}
            alt="Verified"
            width={80}
            height={80}
            className="mx-auto mt-8 mb-10"
          />
          <div className="bg-gray-800 w-full max-w-md mx-auto rounded-xl p-6 shadow-lg border border-[#8670D6]/20">
            <h1 className="text-xl md:text-2xl font-semibold text-center text-white mb-6">Withdrawal Details</h1>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center">
                <p className="text-gray-300">Status:</p>
                <p className="text-orange-500 font-semibold">Pending</p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-gray-300">Amount:</p>
                <p className="text-[#8670D6] font-semibold">
                  {paypal?.amount || cashapp?.amount || bank?.amount}
                </p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-gray-300">Recipient:</p>
                <p className="text-[#8670D6] font-semibold">
                  {paypal?.email || cashapp?.email || bank?.accountNo}
                </p>
              </div>

              {bank && (
                <div className="flex justify-between items-center">
                  <p className="text-gray-300">Bank Name:</p>
                  <p className="text-[#8670D6] font-semibold">{bank.bankName}</p>
                </div>
              )}

              <div className="flex justify-between items-center">
                <p className="text-gray-300">Remarks:</p>
                <p className="text-[#8670D6] font-semibold">
                  {paypal?.note || cashapp?.note || bank?.note || "None"}
                </p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-gray-300">Platform:</p>
                <p className="text-[#8670D6] font-semibold">
                  {paypal ? "Paypal" : cashapp ? "Cashapp" : "Bank"}
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-400 text-xs mt-6 max-w-md mx-auto">
            We are currently verifying your credentials. If they are correct, your withdrawal should be processed successfully.
          </p>
        </div>
      </section>
    </div>
  );
}
