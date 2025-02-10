import { useState } from "react"
import Compo1 from "./Component/Compo1"
import { createContext } from "react"
let myContext = createContext()


function App() {
 const [chi,setChi] = useState("kajal")

  return (
    <>
     <h1> Contaxt Api {chi}</h1>
     <button onClick={()=>{setChi("ramesh")}}>click</button>
     <myContext.Provider value={{chi,setChi}}>
     <Compo1/>
     </myContext.Provider>
   
    
    </>
  )
}

export default App
export {myContext}
