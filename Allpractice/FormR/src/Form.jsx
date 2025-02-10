import React from 'react'
import { useState } from 'react'

const Form = () => {
    let [input,setInput] = useState({})
     
    const inputSubmit=(e)=>{
        let name=e.target.name
         let value = e.target.value

         setInput((values)=>({...values,[name]:value}))
         
    }
    const handleSubmit=()=>{
        console.log(input)
    }
    
  return (
   <>
   <h1>Form</h1>
   Enter name:<input name='name'onChange={inputSubmit}/>
   Enter city:<input name='city'onChange={inputSubmit}/>
   Enter subject:<input name='subject'onChange={inputSubmit}/>
   Enter fees:<input name='fees'onChange={inputSubmit}/>
   <button onClick={handleSubmit}> click me</button>

   </>
  )
}

export default Form