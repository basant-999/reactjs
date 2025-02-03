import React, { useEffect } from 'react'
import { useState } from 'react'

const Change = () => {
    const [sk,setsk] = useState("black")
    function colo(){
        setsk("green")
    }
    useEffect(()=>{alert("call!!!!!!!")},[sk])
  return (
    <div style={{height:'200px',width:"200px",alignItems:"center",display:"flex",justifyContent:"center"}}>
        <button onClick={colo}> click</button>
    </div>
  )
}

export default Change