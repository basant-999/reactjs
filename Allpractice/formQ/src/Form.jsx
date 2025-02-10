import React from 'react'
import { useState } from 'react'

const Form = () => {
    
    let [e,setE] = useState()
    let [st,setSt] = useState(false)

    const hinput=(event)=>{
      console.log(event.target.value)
      setE.event.target.value
    }
  return (
   <>
      <h1> my name is {(st)? st:""}</h1>
      <input type="text" onChange={hinput}  />

      <button onClick={()=>setSt(true)}>click</button>
   </>
  )
}

export default Form