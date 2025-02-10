import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
let myContext = createContext()

const Logcontext = ({children}) => {
    const [user,setUser] = useState({name:"",auth:false})

    const login=(mn)=>{
        setUser({name:mn,auth:true})
    }
    const logout=()=>{
        setUser({name:"",auth:false})
    }
  return (
   <>
     <myContext.Provider value={{user,login,logout}}>
      {children}
     </myContext.Provider>
   </>
  )
}

export default Logcontext
export{myContext}