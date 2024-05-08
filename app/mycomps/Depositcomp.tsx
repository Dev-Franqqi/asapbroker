import React, { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import "../dashboard/deposit/deposit.css"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
type CopyTextButtonProps = {
    coin:string,
    textToCopy: string;
  };
  
  const CopyTextButton: React.FC<CopyTextButtonProps> = ({ textToCopy,coin }) => {
    const [copySuccess, setCopySuccess] = useState<string>('');
  
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
  
    const copyTextFallback = () => {
      if (textAreaRef.current) {
        textAreaRef.current.select();
        document.execCommand('copy');
        setCopySuccess('Text copied to clipboard');
      }
    };
  
  return (
    <>
      <textarea
        ref={textAreaRef}
        value={textToCopy}
        readOnly
        style={{ position: 'fixed', top: '-9999px' }}
      />
      <Button className="bg-[#3a348d] mt-4  text-white font-semibold"  onClick={copyTextFallback}>Click to copy {coin} Address</Button>
      {copySuccess && <p className="text-green-500">{copySuccess}</p>}
    </>
  );
};

export default function Depositcomp(){
    const [coin,setCoin] = useState<string>('')    
    const [amount ,setAmount] = useState<string>('')
    const [walletDetails,setWalletDetails] = useState('')
    const [response,setResponse] = useState('')

    const handleCoinChange = (crypto:string)=>{
        setCoin(crypto)
    }

    useEffect(()=>{
        if(coin==='BTC'){
          setWalletDetails('1JyKXySKAuBnP86VnRbDbjZWfWbuuiVwzA')
        }
        if(coin==='ETH'){
          setWalletDetails('0xcfc430707dc5ce442f9257b3c33844de29b5e7a0')
        }
        if(coin==='USDT'){
          setWalletDetails('0xcfc430707dc5ce442f9257b3c33844de29b5e7a0')
        }
    },[coin])

    return(
        <div className="dark:text-gray-400  mt-6 mb-10">
            <p className="mb-2">Fill Details:</p>
        <form action="">
            <Input
              placeholder="Enter amount"
              onChange={(e) => {
                let value = e.target.value;
                if (!value.startsWith('$')) {
                  value = '$' + value;
                }
                setAmount(value);
              }}
              value={amount}
              className="mb-6"
              type="text"
            />
            <Select onValueChange={(e)=>setCoin(e)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Crypto token" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-800 text-white ">
                <SelectItem value="BTC">BTC</SelectItem>
                <SelectItem value="ETH">ETH</SelectItem>
                <SelectItem value="USDT">USDT</SelectItem>
              </SelectContent>
            </Select>
        </form>

        {walletDetails && (
            <div className="border dark:border-gray-600 text-sm p-5 rounded-md mt-4">
                <h2 className="text-sm font-semibold mb-2 ">Pay from {coin} wallet</h2>
                <p className="mb-1">You can deposit by sending {coin} to this Address:{walletDetails}</p>
                <p>After sending it, upload proof of payment below.</p>
                <CopyTextButton coin={coin}  textToCopy={walletDetails} />
            </div>
        )}
        </div>
    )
}