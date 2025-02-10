import React, { useRef } from 'react'

const HomeRef = () => {
    const dataref = useRef()
    const change=()=>{
        dataref.current.style.backgroundColor="black"
        dataref.current.style.fontSize="50px"

    }
  return (
   <>
   <button onClick={change}>change</button>
   <div ref={dataref}>
   <h1>vicram</h1>
   </div>
   </>
  )
}

export default HomeRef