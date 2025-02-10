import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { myContext } from './Logcontext'

const Unauth = () => {
    const[val,setVal] = useState("")
    const{login} = useContext(myContext)
  return (
 
    <>
       enter name:<input type='text' value={val} onChange={(e)=>{setVal(e.target.value)}}/>
       <button onClick={()=>{login(val)}}>login</button>
    </>
  )
}

export default Unauth