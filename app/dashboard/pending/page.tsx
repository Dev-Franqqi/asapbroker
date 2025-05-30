"use client"
import { Input } from "@/components/ui/input"
import { useEffect ,useState} from "react"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import Image from "next/image"
import Logo from '@/public/elitlogo.png'
import Paypal from '@/public/Paypal.png'
import Cashapp from '@/public/cashapp.png'
import { Textarea } from "@/components/ui/textarea"
import Bank from '../../../public/Bank.png'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"


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
  } from "../../../components/ui/alert-dialog"
import { Hand } from "lucide-react"
export interface CashappForm{
  email:string,
  amount:string,
  note?:string
}

export interface PaypalForm {
  email:string,
  amount:string,
  note?:string
}
export interface BankForm {
  accountNo:number,
  amount:number,
  bankName:string,
  note?:string
}
  
export default function Withdraw(){
    const [amount,setAmount] = useState<number>()
    const [address,setAddress] = useState('')
    const [error,setError] = useState('')
    const [paypalForm,setPaypalForm] = useState<PaypalForm>({email:'',amount:'',note:''})
    const [cashappForm,setCashappForm] = useState<PaypalForm>({email:'',amount:'',note:''}) 
    const [bankForm,setBankForm] = useState<BankForm>({accountNo:0,amount:0,bankName:'',note:''})

    const handlePaypal = ()=>{
      setError('')

      if(!paypalForm.email || !paypalForm.amount){
        setError('Please fill in all fields')
      }
      Cookies.set('withdrawal', JSON.stringify({paypalForm}), { expires: 2 / (24 * 60) }); // 2 minutes

      router.push('/dashboard/withdraw/pending')
    }
    const handleCashapp = ()=>{
      setError('')

      if(!paypalForm.email || !paypalForm.amount){
        setError('Please fill in all fields')
      }
      Cookies.set('withdrawal', JSON.stringify({cashappForm}), { expires: 2 / (24 * 60) }); // 2 minutes

      router.push('/dashboard/withdraw/pending')
    }
     
  const handleBank = ()=>{

      setError('')

      if(!paypalForm.email || !paypalForm.amount){
        setError('Please fill in all fields')
      }
      Cookies.set('withdrawal', JSON.stringify({bankForm}), { expires: 2 / (24 * 60) }); // 2 minutes

      router.push('/dashboard/withdraw/pending')
  }
    const router = useRouter()
    const [formH,setFormH]   = useState('')
    const [darkMode,setdarkMode] = useState(false)
    const setToDarkMode = ()=>{
        setdarkMode(true);
        Cookies.set('dark','true')
    }
    const setLightMode = ()=>{
        setdarkMode(false);
        Cookies.set('dark','false')
    }

    useEffect(()=>{
        const dark = Cookies.get('dark');
        if(dark){
          if(dark==='true'){
            setdarkMode(true)
          }
        }
        else{
          setdarkMode(false)
        }},[])
    return(
        <div className={'bg-[#202020] h-[100%]'}>
            <nav className="pt-3 px-2 flex gap-x-6 text-white">


<svg xmlns="http://www.w3.org/2000/svg" onClick={()=>router.push('/dashboard')} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:text-[#8670FC]">
<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
<div className="flex gap-x-2">
<Image src={Logo} alt='' width={20} height={20} />
<header className="font-bold">FOREX TRADING LIVE</header>
</div>



{/* {!darkMode &&  <svg
onClick={setToDarkMode}
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
strokeWidth={1.5}
stroke="currentColor"
className="w-6 h-6 mt-1 "
>
<path
strokeLinecap="round"
strokeLinejoin="round"
d="M21.752 15.002A9..72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
/>
</svg>}
{darkMode && <svg xmlns="http://www.w3.org/2000/svg" onClick={setLightMode} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-1 text-white">
<path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>
} */}
</nav>

<div className="text-white mt-10">
    <h1 className="text-2xl font-bold mb-6 text-center text-white">WITHDRAWALS</h1>
  <h2 className="text-center px-3 text-sm md:text-base">Select Payment Method</h2>


  <div className="flex justify-center">
    <div>

    <Image onClick={()=>setFormH('paypal')} src={Paypal} alt='' width={100} height={100} className="mt-5" />
    <p className="text-center text-xs">Paypal</p>
    
    </div>
    <div className="flex flex-col justify-center relative items-center">

    <Image onClick={()=>setFormH('cashapp')} src={Cashapp} alt='' width={100} height={100} className=" mt-5 -scale-50 " />

    <p className="absolute bottom-2 text-center text-xs">Cashapp</p>

    </div>
  </div>
    <Image  onClick={()=>setFormH('bank')} src={Bank} width={50} className="mx-auto" alt=""/>
    <p className="text-center text-xs">Bank</p>
</div>
{formH ==='paypal' && <main className=" py-20 px-5  text-xs text-gray-200 md:w-3/6 md:mx-auto md:text-center">
  <h2 className="text-center text-xl font-semibold">Paypal</h2>

             
      <div>

        <label htmlFor="to">To: </label>
        <Input onChange={(e)=>setPaypalForm((prev)=>({...prev,email:e.target.value}))} id="to" type="text" placeholder="Enter recipient's email" className="w-full mb-2 text-black" />
      </div>
      <div>

        <label htmlFor="amount">Amount: </label>
        <Input onChange={(e)=>setPaypalForm((prev)=>({...prev,amount:e.target.value}))} id="amount" type="text" placeholder="Enter Amount" className="w-full mb-4 text-black" />

      </div>

      <div><label htmlFor="Add a Note">Add A Note</label>
      <Textarea id="amount" onChange={(e)=>setPaypalForm((prev)=>({...prev,note:e.target.value}))}
       placeholder="Enter Note ..." className="w-full mb-4 p-4 text-black" />

      </div>

      <Drawer>
  <DrawerTrigger className="bg-[#bbee01] w-full text-black font-semibold py-2 px-4 rounded-md">

      SUBMIT
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button onClick={handlePaypal}>Submit</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

</main> }
{formH ==='cashapp' &&  <main className=" py-20 px-5  text-xs text-gray-200 md:w-3/6 md:mx-auto md:text-center">
             
             <div>
              <h2 className="text-center text-xl font-semibold">Cashapp</h2>
       
               <label htmlFor="to">To: </label>
               <Input onChange={(e)=>setCashappForm((prev)=>({...prev,email:e.target.value}))} id="to" type="text" placeholder="Enter recipient's email" className="w-full mb-2 text-black" />
             </div>
             <div>
       
               <label htmlFor="amount">Amount: </label>
               <Input onChange={(e)=>setCashappForm((prev)=>({...prev,amount:e.target.value}))} id="amount" type="text" placeholder="Enter Amount" className="w-full mb-4 text-black" />
       
             </div>
       
             <div><label htmlFor="Add a Note">Add A Note</label>
             <Textarea id="amount" onChange={(e)=>setCashappForm((prev)=>({...prev,note:e.target.value}))}
              placeholder="Enter Note ..." className="w-full mb-4 p-4 text-black" />
       
             </div>
       
             <Drawer>
             <DrawerTrigger className="bg-[#bbee01] w-full text-black font-semibold py-2 px-4 rounded-md">

SUBMIT
</DrawerTrigger>
         <DrawerContent>
           <DrawerHeader>
             <DrawerTitle>Are you absolutely sure?</DrawerTitle>
             <DrawerDescription>This action cannot be undone.</DrawerDescription>
           </DrawerHeader>
           <DrawerFooter>
             <Button onClick={handleCashapp}>Submit</Button>
             <DrawerClose>
               <Button variant="outline">Cancel</Button>
             </DrawerClose>
           </DrawerFooter>
         </DrawerContent>
       </Drawer>
       
       </main>}
{formH ==='bank' &&  <main className=" py-20 px-5  text-xs text-gray-200 md:w-3/6 md:mx-auto md:text-center">
             
             <div>
              <h2 className="text-center text-xl font-semibold">Bank</h2>
       
               <label htmlFor="to">To: </label>
               <Input
  onChange={(e) => {
    const value = Number(e.target.value);
    if (value > 0) {
      setBankForm((prev) => ({
        ...prev,
        accountNo: value,
      }));
    } else {
      // Optionally, you can handle invalid input here, like showing an error
      console.log("Account number must be greater than 0");
    }
  }}
  id="to"
  type="number"
  placeholder="Enter recipient's account number"
  className="w-full mb-2 text-black"
  required
/>


             </div>
             <div>
              <label htmlFor="BankName">Bank name: </label>
  
              <Input type='text' placeholder="Enter Bank Name" 
  className="w-full mb-4 text-black"
  onChange={(e) => setBankForm((prev) => ({ ...prev, bankName: e.target.value }))}
              />
             </div>
             <div>
       
               <label htmlFor="amount">Amount: </label>
               <Input
  onChange={(e) => {
    const value = Number(e.target.value);
    if (value > 0) {
      setBankForm((prev) => ({
        ...prev,
        amount: value,
      }));
    } else {
      // Optionally, handle invalid input, like showing an error message
      console.log("Amount must be greater than 0");
    }
  }}
  id="amount"
  type="number"
  placeholder="Enter Amount"
  className="w-full mb-4 text-black"
  required
/>

       
             </div>
       
             <div><label htmlFor="Add a Note">Add A Note</label>
             <Textarea id="amount" onChange={(e)=>setBankForm((prev)=>({...prev,note:e.target.value}))}
              placeholder="Enter Note ..." className="w-full mb-4 p-4 text-black" />
       
             </div>
       
             <Drawer>
             <DrawerTrigger className="bg-[#bbee01] w-full text-black font-semibold py-2 px-4 rounded-md">

SUBMIT
</DrawerTrigger>
         <DrawerContent>
           <DrawerHeader>
             <DrawerTitle>Are you absolutely sure?</DrawerTitle>
             <DrawerDescription>This action cannot be undone.</DrawerDescription>
           </DrawerHeader>
           <DrawerFooter>
             <Button onClick={handleBank}>Submit</Button>
             <DrawerClose>
               <Button variant="outline">Cancel</Button>
             </DrawerClose>
           </DrawerFooter>
         </DrawerContent>
       </Drawer>
       
       </main>}



        
        </div>
    )
}