import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

const Memo = () => {
    const [add,Setadd] = useState(0)
    const [sub,Setsub] = useState(100)

    const mem = useMemo(mymulti,[add])

    function mymulti (){
        console.log("aaaaaasd")
        return add*2
    }
  return (
    // yh value return krta he 
   <>
       {/* <h1>multipication :{ mymulti()}</h1> */}
       <h1>multipication :{ mem}</h1>

       <h1>addition:{add}</h1>
       <button onClick={()=>{Setadd(add+1)}}> add</button>
       <h1>subtraction:{sub}</h1>
       <button onClick={()=>{Setsub(sub-1)}}>subtraction</button>
   </>
  )
}

export default Memo