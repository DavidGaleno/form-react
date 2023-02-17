import {createContext, ReactNode, useState} from 'react'
import { useTheme } from 'styled-components'

export const GlobalContext = createContext<any | null>(null)
GlobalContext.displayName = 'Global Context'

export const GlobalProvider = ({children} : any) => {
    const [name,setName] = useState<string>()
    const [age,setAge] = useState<number>()
    const [email,setEmail] = useState<string>()
    const[usability,setUsability] = useState<string>()
    const [utility,setUtility] = useState<string>()
    const [comment,setComment] = useState<string>()

    return(
        <GlobalContext.Provider value={{name,setName,age,setAge,email,setEmail,usability,setUsability,utility,setUtility,comment,setComment}}>
            {children}
        </GlobalContext.Provider>
    )
}