import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

const PracMemo = () => {
    const [num,SetNum] = useState(0)
    const [city,SetCity] = useState("")
 
       const pro = useMemo(unkh,[num])

    function unkh(){
        console.log("*********")
        for(var i=0;i<=100000;i++){}
        return num*3
    }
  return (
   <>
   Enter number:<input type='number' value={num} onChange={(e)=>{SetNum(e.target.value)}} />
   Enter city:<input type='city' value={city} onChange={(e)=>{SetCity(e.target.value)}}/>
   {/* <h1>{unkh()}</h1> */}
   <h1>{pro}</h1>
   </>
  )
}

export default PracMemo