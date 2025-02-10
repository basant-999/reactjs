import React from 'react'
import { useContext } from 'react'
import { myContext } from './App'

const Compo5 = () => {
    const {user,setUser} = useContext(myContext)

  return (
   <>
 <h1>  component5 :{user}</h1>
 <button onClick={()=>{setUser("shikha")}}>Change nname</button>
   </>
  )
}

export default Compo5