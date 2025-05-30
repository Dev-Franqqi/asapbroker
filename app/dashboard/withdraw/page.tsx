"use client";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Image from "next/image";
import Logo from "../../../public/elitlogo.png";
import Paypal from "../../../public/Paypal.png";
import Cashapp from "../../../public/cashapp.png";
import Bank from "../../../public/Bank.png";
import { Textarea } from "@/components/ui/textarea";
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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../../components/ui/alert-dialog";
import { Hand } from "lucide-react";

export interface CashappForm {
  email: string;
  amount: string;
  note?: string;
}

export interface PaypalForm {
  email: string;
  amount: string;
  note?: string;
}

export interface BankForm {
  accountNo: number;
  amount: number;
  bankName: string;
  note?: string;
}

// Sample data for payment methods (replace src with your actual image paths if needed)
const initialPaymentMethods = [
  { id: "1", name: "Paypal", form: "paypal", src: Paypal },
  { id: "2", name: "Cashapp", form: "cashapp", src: Cashapp },
  { id: "3", name: "Bank", form: "bank", src: Bank },
];

export default function Withdraw() {
  const [amount, setAmount] = useState<number>();
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [paypalForm, setPaypalForm] = useState<PaypalForm>({ email: "", amount: "", note: "" });
  const [cashappForm, setCashappForm] = useState<CashappForm>({ email: "", amount: "", note: "" });
  const [bankForm, setBankForm] = useState<BankForm>({ accountNo: 0, amount: 0, bankName: "", note: "" });
  const [formH, setFormH] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState(initialPaymentMethods);

  const router = useRouter();

  const setToDarkMode = () => {
    setDarkMode(true);
    Cookies.set("dark", "true");
  };

  const setLightMode = () => {
    setDarkMode(false);
    Cookies.set("dark", "false");
  };

  useEffect(() => {
    const dark = Cookies.get("dark");
    if (dark) {
      setDarkMode(dark === "true");
    }
  }, []);

  const handlePaypal = () => {
    setError("");
    if (!paypalForm.email || !paypalForm.amount) {
      setError("Please fill in all required fields");
      toast.error("Please fill in all required fields");
      return;
    }
    Cookies.set("withdrawal", JSON.stringify({ paypalForm }), { expires: 2 / (24 * 60) });
    router.push("/dashboard/withdraw/pending");
  };

  const handleCashapp = () => {
    setError("");
    if (!cashappForm.email || !cashappForm.amount) {
      setError("Please fill in all required fields");
      toast.error("Please fill in all required fields");
      return;
    }
    Cookies.set("withdrawal", JSON.stringify({ cashappForm }), { expires: 2 / (24 * 60) });
    router.push("/dashboard/withdraw/pending");
  };

  const handleBank = () => {
    setError("");
    if (!bankForm.accountNo || !bankForm.amount || !bankForm.bankName) {
      setError("Please fill in all required fields");
      toast.error("Please fill in all required fields");
      return;
    }
    Cookies.set("withdrawal", JSON.stringify({ bankForm }), { expires: 2 / (24 * 60) });
    router.push("/dashboard/withdraw/pending");
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    e.dataTransfer.setData("text/plain", id);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const draggedId = e.dataTransfer.getData("text/plain");
    const draggedItem = paymentMethods.find((item) => item.id === draggedId);
    if (!draggedItem) return;
    const items = paymentMethods.filter((item) => item.id !== draggedId);
    const dropIndex = Math.round(e.clientX / (window.innerWidth / items.length));
    items.splice(dropIndex, 0, draggedItem);
    setPaymentMethods(items);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <nav className="pt-3 px-4 flex gap-x-6 items-center">
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
        {/* Dark mode toggle (commented out as in original) */}
        {/* {!darkMode && (
          <svg
            onClick={setToDarkMode}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-[#8670D6]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        )}
        {darkMode && (
          <svg
            onClick={setLightMode}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-[#8670D6]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        )} */}
      </nav>

      <section className="py-12 flex flex-col items-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-4">Withdrawals</h1>
          <h2 className="text-center text-sm md:text-base text-gray-300 mb-8">Select Payment Method</h2>

          <div
            className="flex flex-wrap justify-center gap-6 mb-12"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className="flex flex-col items-center bg-gray-800 rounded-xl p-4 shadow-lg border border-[#8670D6]/20 cursor-move w-32 hover:bg-gray-700"
                draggable
                onDragStart={(e) => handleDragStart(e, method.id)}
                onClick={() => setFormH(method.form)}
              >
                <Image
                  src={method.src}
                  alt={method.name}
                  width={80}
                  height={80}
                  className="object-contain"
                />
                <p className="text-xs text-gray-300 mt-2">{method.name}</p>
              </div>
            ))}
          </div>

          {error && (
            <p className="text-center text-red-500 text-sm mb-4">{error}</p>
          )}

          {formH === "paypal" && (
            <main className="bg-gray-800 rounded-xl p-6 md:p-8 mx-auto md:w-1/2 text-gray-200 text-sm">
              <h2 className="text-xl md:text-2xl font-semibold text-center text-white mb-6">Paypal</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="paypal-to" className="block text-gray-300 mb-1">To:</label>
                  <Input
                    onChange={(e) => setPaypalForm((prev) => ({ ...prev, email: e.target.value }))}
                    id="paypal-to"
                    type="email"
                    placeholder="Enter recipient's email"
                    className="w-full bg-gray-700 text-white border-gray-600 focus:border-[#8670D6] rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="paypal-amount" className="block text-gray-300 mb-1">Amount:</label>
                  <Input
                    onChange={(e) => setPaypalForm((prev) => ({ ...prev, amount: e.target.value }))}
                    id="paypal-amount"
                    type="number"
                    placeholder="Enter Amount"
                    className="w-full bg-gray-700 text-white border-gray-600 focus:border-[#8670D6] rounded-md"
                    min="0"
                  />
                </div>
                <div>
                  <label htmlFor="paypal-note" className="block text-gray-300 mb-1">Add A Note:</label>
                  <Textarea
                    id="paypal-note"
                    onChange={(e) => setPaypalForm((prev) => ({ ...prev, note: e.target.value }))}
                    placeholder="Enter Note ..."
                    className="w-full bg-gray-700 text-white border-gray-600 focus:border-[#8670D6] rounded-md"
                  />
                </div>
                <Drawer>
                  <DrawerTrigger className="bg-[#8670D6] w-full text-white font-semibold py-2 px-4 rounded-md hover:bg-[#8670D6]/80">
                    SUBMIT
                  </DrawerTrigger>
                  <DrawerContent className="bg-gray-800 text-white">
                    <DrawerHeader>
                      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                      <DrawerDescription className="text-gray-300">This action cannot be undone.</DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                      <Button onClick={handlePaypal} className="bg-[#8670D6] text-white hover:bg-[#8670D6]/80">Submit</Button>
                      <DrawerClose>
                        <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">Cancel</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </div>
            </main>
          )}

          {formH === "cashapp" && (
            <main className="bg-gray-800 rounded-xl p-6 md:p-8 mx-auto md:w-1/2 text-gray-200 text-sm">
              <h2 className="text-xl md:text-2xl font-semibold text-center text-white mb-6">Cashapp</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="cashapp-to" className="block text-gray-300 mb-1">To:</label>
                  <Input
                    onChange={(e) => setCashappForm((prev) => ({ ...prev, email: e.target.value }))}
                    id="cashapp-to"
                    type="text"
                    placeholder="Enter recipient's email"
                    className="w-full bg-gray-700 text-white border-gray-600 focus:border-[#8670D6] rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="cashapp-amount" className="block text-gray-300 mb-1">Amount:</label>
                  <Input
                    onChange={(e) => setCashappForm((prev) => ({ ...prev, amount: e.target.value }))}
                    id="cashapp-amount"
                    type="number"
                    placeholder="Enter Amount"
                    className="w-full bg-gray-700 text-white border-gray-600 focus:border-[#8670D6] rounded-md"
                    min="0"
                  />
                </div>
                <div>
                  <label htmlFor="cashapp-note" className="block text-gray-300 mb-1">Add A Note:</label>
                  <Textarea
                    id="cashapp-note"
                    onChange={(e) => setCashappForm((prev) => ({ ...prev, note: e.target.value }))}
                    placeholder="Enter Note ..."
                    className="w-full bg-gray-700 text-white border-gray-600 focus:border-[#8670D6] rounded-md"
                  />
                </div>
                <Drawer>
                  <DrawerTrigger className="bg-[#8670D6] w-full text-white font-semibold py-2 px-4 rounded-md hover:bg-[#8670D6]/80">
                    SUBMIT
                  </DrawerTrigger>
                  <DrawerContent className="bg-gray-800 text-white">
                    <DrawerHeader>
                      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                      <DrawerDescription className="text-gray-300">This action cannot be undone.</DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                      <Button onClick={handleCashapp} className="bg-[#8670D6] text-white hover:bg-[#8670D6]/80">Submit</Button>
                      <DrawerClose>
                        <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">Cancel</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </div>
            </main>
          )}

          {formH === "bank" && (
            <main className="bg-gray-800 rounded-xl p-6 md:p-8 mx-auto md:w-1/2 text-gray-200 text-sm">
              <h2 className="text-xl md:text-2xl font-semibold text-center text-white mb-6">Bank</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="bank-to" className="block text-gray-300 mb-1">Account Number:</label>
                  <Input
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      if (value > 0) {
                        setBankForm((prev) => ({ ...prev, accountNo: value }));
                      } else {
                        setError("Account number must be greater than 0");
                        toast.error("Account number must be greater than 0");
                      }
                    }}
                    id="bank-to"
                    type="number"
                    placeholder="Enter recipient's account number"
                    className="w-full bg-gray-700 text-white border-gray-600 focus:border-[#8670D6] rounded-md"
                    required
                    min="0"
                  />
                </div>
                <div>
                  <label htmlFor="bank-name" className="block text-gray-300 mb-1">Bank Name:</label>
                  <Input
                    type="text"
                    placeholder="Enter Bank Name"
                    className="w-full bg-gray-700 text-white border-gray-600 focus:border-[#8670D6] rounded-md"
                    onChange={(e) => setBankForm((prev) => ({ ...prev, bankName: e.target.value }))}
                  />
                </div>
                <div>
                  <label htmlFor="bank-amount" className="block text-gray-300 mb-1">Amount:</label>
                  <Input
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      if (value > 0) {
                        setBankForm((prev) => ({ ...prev, amount: value }));
                      } else {
                        setError("Amount must be greater than 0");
                        toast.error("Amount must be greater than 0");
                      }
                    }}
                    id="bank-amount"
                    type="number"
                    placeholder="Enter Amount"
                    className="w-full bg-gray-700 text-white border-gray-600 focus:border-[#8670D6] rounded-md"
                    required
                    min="0"
                  />
                </div>
                <div>
                  <label htmlFor="bank-note" className="block text-gray-300 mb-1">Add A Note:</label>
                  <Textarea
                    id="bank-note"
                    onChange={(e) => setBankForm((prev) => ({ ...prev, note: e.target.value }))}
                    placeholder="Enter Note ..."
                    className="w-full bg-gray-700 text-white border-gray-600 focus:border-[#8670D6] rounded-md"
                  />
                </div>
                <Drawer>
                  <DrawerTrigger className="bg-[#8670D6] w-full text-white font-semibold py-2 px-4 rounded-md hover:bg-[#8670D6]/80">
                    SUBMIT
                  </DrawerTrigger>
                  <DrawerContent className="bg-gray-800 text-white">
                    <DrawerHeader>
                      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                      <DrawerDescription className="text-gray-300">This action cannot be undone.</DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                      <Button onClick={handleBank} className="bg-[#8670D6] text-white hover:bg-[#8670D6]/80">Submit</Button>
                      <DrawerClose>
                        <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">Cancel</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </div>
            </main>
          )}
        </div>
      </section>
    </div>
  );
}