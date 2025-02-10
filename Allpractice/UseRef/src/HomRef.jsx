import React, { useRef } from 'react'

const HomRef = () => {
    const raj = useRef()
    const first=()=>{
        raj.current.style.fontSize="40px"
    }
    const second=()=>{
        raj.current.style.backgrounColor="green"
    }
    const third=()=>{
        raj.current.style.color="blue"
    }
  return (
   <>
     <button onClick={first}>click</button>
     <button onClick={second}>click</button>
     <button onClick={third}>click</button>
       <h1 ref={raj}>best of useRef</h1>
   </>
  )
}

export default HomRef