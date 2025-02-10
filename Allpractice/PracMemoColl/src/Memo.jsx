

import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

const Memo = () => {
const [mydata,Setmydata] = useState(0)
const [sub,Setsub] = useState(10)

const use= useMemo(multi,[mydata])

 function multi(){
    console.log("asdfgh")
    return mydata*4
 }

  return (
    <>
    <h1>multification:{use}</h1>
    <h1>data:{mydata}</h1>
    <button onClick={()=>{Setmydata(mydata+1)}}>click me</button>
    <h1>subract:{sub}</h1>
    <button onClick={()=>{Setsub(sub-1)}}>sub</button>
    </>
  )
}

export default Memo