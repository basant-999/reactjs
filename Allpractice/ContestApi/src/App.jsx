import { useState ,createContext} from 'react'
import Compo1 from './compo1'
import Coll from './Coll'

let myContext =createContext()

function App() {
  const [user, setUser] = useState("basant")

  return (
    <>
    <h1>context api {user}</h1>
    <button onClick={()=>{setUser("bipin")}}>Change nname</button>
   <myContext.Provider value={{user,setUser}}>
    <Compo1/>
   </myContext.Provider>


<Coll/>
    
    </>
  )
}

export default App
export {myContext}
