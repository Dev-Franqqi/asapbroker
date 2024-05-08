'use client'
import { ReactNode } from "react"
import useOpen from "./hooks/useOpen"

type Props={
    children:ReactNode
}
export default function Wrapblur({children}:Props){
        const {open} = useOpen()
    return(
        <div className={open?'blur-lg':''}>
        {children}
        </div>
    )
}