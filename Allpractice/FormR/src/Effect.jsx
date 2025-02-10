import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Effect = () => {
    const[count,setCount]=useState(0)
    const[multi,setmulti]=useState(0)

    useEffect(()=>{
        setmulti(count*2)
    },[count])
  return (
   <>
      <h1>my count :{count}</h1>
      <h1>multi: {multi}</h1>
      <button onClick={()=>setCount(count+1)}> click</button>
   </>
  )
}

export default Effect