import React from 'react'
import Usecall from './Usecall'
import { useState } from 'react'

const Usecallback = () => {
     const [count,SetCount] = useState([])
     const myadd=()=>{
        SetCount(values=>[...values,"new Task"])
     }
  return (
    // {/* function return krta he  */}
    <>
    <Usecall task={count} addtask={myadd}/>
    <button onClick={()=>{SetCount(count+1)}}></button>
    count{count}

    </>
  )
}

export default Usecallback