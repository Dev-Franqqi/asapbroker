'use client'
import { useContext } from "react"
import { Usercontext } from "../contexts/Usercontext"


export default function useUser(){
    const userContext = useContext(Usercontext)
    if(!userContext){
        throw new Error("useUser must be used within a UsercontextProvider")
    }
    return userContext
}