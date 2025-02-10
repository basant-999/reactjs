import React, { useContext, useState } from 'react'
import { mycontext } from './Comman'

const Unauthec = () => {
    const [val,Setval] = useState("")
    const{login} = useContext(mycontext)
  return (
   
    <>
   enter age: <input type="text" value={val} onChange={(e)=>{Setval(e.target.value)}} />
              <button onClick={()=>{login(val)}}></button>
    </>
  )
}

export default Unauthec