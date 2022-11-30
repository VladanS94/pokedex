import { createContext, useState } from "react";

const GlobalContext = createContext({})

export const GlobalContextProvider = ({children}) =>{
    const [search, setSearch] = useState('')
    return <GlobalContext.Provider value={{search, setSearch}}>{children}</GlobalContext.Provider>
}

export default GlobalContext