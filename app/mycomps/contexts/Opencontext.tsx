'use client'
import { ReactNode,useState, createContext, Dispatch, SetStateAction } from "react"
type Props = {
    children:ReactNode
}

type Contextprops ={
    open:boolean,
    setOpen:Dispatch<SetStateAction<boolean>>
}
export const Opencontext = createContext<Contextprops>({open:false,setOpen:()=>{}})

export function Opencontextprovider({children}:Props){
        const [open,setOpen] = useState(false)

    return(
        <Opencontext.Provider value={{open,setOpen}}>
            {children}
        </Opencontext.Provider>
    )
}