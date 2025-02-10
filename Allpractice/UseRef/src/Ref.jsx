import React from 'react'
import { useRef } from 'react'

const Ref = () => {
    const myref = useRef("")
    const myfuc=()=>{
        myref.current.style.color="red"
        myref.current.style.border="2px solid green"
        myref.current.style.padding="20px"
        myref.current.style.backgroundColor="yellow"
        myref.current.style.border="40px"
    }

  
  return (
   <>
   <h1></h1>
   <button onClick={myfuc}>click</button>
   <div ref={myref}>
     my name is basant
   </div>
   </>
  )
}

export default Ref