import React from 'react'
import { useState } from 'react'
import {message} from 'antd'

const Counter = () => {
    let [cout,setCout] = useState(0)

     const Incri =()=>{
            setCout(cout+1)
     } 

     const Dicri =()=>{
        // setCout(cout-1)
        if(cout<=0){
            message.error("can not lesser")
        }else{
            setCout(cout-1)
        }

     }
  return (
 <>
 <button onClick={Incri}>inc</button>
  {cout}
 <button onClick={Dicri}>dec</button>
 </>
  )
}

export default Counter