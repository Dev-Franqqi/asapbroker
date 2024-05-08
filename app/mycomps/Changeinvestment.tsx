"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { DocumentData } from "firebase/firestore"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { useState } from "react"
  import { Button } from "@/components/ui/button"
import { TiPencil } from "react-icons/ti"
import { doc,updateDoc } from "firebase/firestore"
import { db } from "@/components/ui/firebase"
import { query } from "firebase/firestore"
import { where } from "firebase/firestore"
import { collection } from "firebase/firestore"
import { getDocs,DocumentReference } from "firebase/firestore"
type Props = {
  cookieuid:string;
  investment?:string;
    darkMode:boolean
}
export default function Changeinvestment({darkMode,investment,cookieuid}:Props){
// const docref = doc(db,"users",)
const [invest,setInvest] = useState('')
const [done,setDone] =useState(false)
const q = query(
  collection(db,"UserInfo"),
  where("uid","==",`${cookieuid}`)
)
async function updateInvestmentField(query: any, newInvestment: string): Promise<void> {
  try {
    const querySnapshot = await getDocs(query); // Execute the query and get the snapshot of matching documents
    
    // Iterate over each document in the snapshot
    querySnapshot.forEach(async (doc) => {
      const docRef: DocumentReference<DocumentData> = doc.ref as DocumentReference<DocumentData>; // Get a reference to the document
      await updateDoc(docRef, { investment: newInvestment }); // Update the "investment" field with the new value
      console.log(`Document with ID ${doc.id} updated successfully.`);
    });
    setDone(true)
  } catch (error) {
    console.error("Error updating investment field:", error);
  }
}

    return(

        <div className="dark:text-gray-200 text-gray-900">
        <Dialog>
  <DialogTrigger> <div  className="flex space-x-2">

<p className="font-semibold text-sm pt-2">{investment}</p>
<TiPencil className=" mt-3" />
</div></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle className="text-white mb-4">Update Investment Choice</DialogTitle>
      <DialogDescription>
        <p className="text-red-500 mb-3">
** Please contact your broker before updating your investment type </p>
        <Select onValueChange={(e:string)=>setInvest(e)}>
    <SelectTrigger className="w-[180px] dark:text-white text-white">
      <SelectValue placeholder="Select Investment" />
    </SelectTrigger>
    <SelectContent className={'text-white bg-neutral-800'}>
      <SelectItem value="Crude oil">Crude Oil</SelectItem>
      <SelectItem value="Cryptocurrencies">Crypto Currencies</SelectItem>
      <SelectItem value="Stocks">Stocks</SelectItem>
      <SelectItem value="Forex">Forex</SelectItem>
      <SelectItem value="Cryptocurrency mining">Cryptocurrency Mining</SelectItem>
      <SelectItem value="Marijuana">Marijuana</SelectItem>
    </SelectContent>
  </Select>


<Button onClick={()=>updateInvestmentField(q,invest)} className="bg-white mt-3 focus:bg-white block">Submit</Button>
{done && <div className="text-green-500">Changed successfully</div>}

      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

        
        
        </div>
    )
}