import React from 'react'
import { useRef } from 'react'

const Pracref = () => {
     const myref = useRef("")
    const  first=()=>{
        myref.current.style.fontSize = "30px"
    }

    const  second=()=>{
        myref.current.style.backgroundColor = "black"
    }

    const  third=()=>{
        myref.current.style.fontSize = ""
    }
  return (
   <>
   <button onClick={first}>click me</button>
   <button onClick={second}>click me</button>
   <button onClick={third}>click me</button>
   <div ref={myref}>
    kisan viskrma
   </div>

   </>
  )
}

export default Pracref