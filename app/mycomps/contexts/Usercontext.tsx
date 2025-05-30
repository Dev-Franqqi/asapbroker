'use client'
import { useState, useEffect, createContext, Dispatch, SetStateAction, ReactNode } from "react"
import Cookies from "js-cookie"
import PageLoading from "@/app/mycomps/PageLoading"
import { Timestamp } from "firebase/firestore"
export interface IUser {

    firstname:string,
    lastname:string,
    email:string,
    password:string,
    country:string, 
    phone:string,
    accountType:string,
    uid:string,
    btc:number;
    eth:number;
    totaldeposits:string,
    currentprofits:string,
    createdAt:Timestamp,
    plan?:string,
    

}

type UserContextTypes = {
    user:IUser,
    setUser:Dispatch<SetStateAction<IUser>>

}
const defaultUser: IUser = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    country: '',
    phone: '',
    accountType: '',
    uid: '',
    btc: 0,
    eth: 0,
    totaldeposits: '',
    createdAt: Timestamp.now(),
    currentprofits: ''
  };

export const Usercontext = createContext<UserContextTypes>({user:defaultUser,setUser:()=>{}})


export default function UserContextProvider({children}:{children:ReactNode}){
    const [user,setUser] = useState<IUser>(defaultUser)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        const user = Cookies.get('userDoc')
        if(user){
            setUser(JSON.parse(user))
        }
        setLoading(false)
    },[])

    return(
        <Usercontext.Provider value={{user,setUser}}>
            {loading ? <PageLoading /> : children}
        </Usercontext.Provider>
    )
}