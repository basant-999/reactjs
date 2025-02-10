import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

const ExpensiveFuc = () => {
    const [num ,SetNum] = useState(0)
    const [city,Setcity] = useState("")

    const mymulti = useMemo(myM,[num])

    function myM (){
        for(var i=0; i<=1000000000;i++){}
         return num*2
    }

  return (
   <>
   Entername:<input type='number' value={num} onChange={(e)=>{SetNum(e.target.value)}}/>
   Enter city:<input type='city' value={city} onChange={(e)=>{Setcity(e.target.value)}}/>

         {/* <h1>mu    {myM()}</h1> */}
         <h1>{mymulti}</h1>
   </>
  )
}

export default ExpensiveFuc