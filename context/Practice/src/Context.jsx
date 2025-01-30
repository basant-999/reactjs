import { createContext } from "react";

const BioContext = createContext()

const BioProvider =({children})=>{
    const name = "vevek"
    const age = 25
    return(
            <BioContext.Provider value={{name,age}}>
                {children}
            </BioContext.Provider>
    )
}
export{BioProvider,BioContext}