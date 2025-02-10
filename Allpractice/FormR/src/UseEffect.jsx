import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const UseEffect = () => {
    const [ count ,setCount] = useState(0)

    useEffect(()=>{
        setTimeout(()=>{
        setCount(count+1)
         
        },5000)
    },[])
  return (
    <>
    <h1>my data {count}</h1>
    </>
  )
}

export default UseEffect