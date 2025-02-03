import React from 'react'
import { useState } from 'react'

const State = () => {
    const [color,setColor] = useState("red")

  return (
    <>
        <h1 style={{color:color}}>my feb color:{color}</h1>
        <button onClick={()=>{setColor("blue")}}>blue color</button>
        <button onClick={()=>{setColor("black")}}>blue color</button>
        <button onClick={()=>{setColor("pink")}}>blue color</button>
        <button onClick={()=>{setColor("green")}}>blue color</button>
        <button onClick={()=>{setColor("yellow")}}>blue color</button>

    </>
  )
}

export default State