import React from 'react'
import { useState } from 'react'

const Form = () => {
    let [name,setName] = useState("rahul")
    const bk=()=>{
        setName("bipin")
    }
  return (
    <>
    <h1>my name:{name}</h1>
    <button onClick={bk}>click</button>
    </>

  )
}

export default Form