
import React, { createContext, useState } from 'react'
let mycontext = createContext()

const Comman = ({children}) => {
    const [user,Setuser] = useState({name:"",auth:false})

    const login=(nm)=>{
        Setuser({name:nm,auth:true})
    }
    const logout=()=>{
        Setuser({name:"",auth:false})
    }
  return (

    <>
       <mycontext.Provider value={{user,login,logout}}>
          {children}
       </mycontext.Provider>
    </>
  )
}

export default Comman
export {mycontext}

