import React, { useState } from 'react'

const PracColor = () => {
    let [col,setCol] = useState("yellow")

    const chag=()=>{
        setCol("blue")
    }
  return (
    <>
    <h1 style={{color:col}}>this is {col} </h1>
    <button onClick={chag} >change blue</button>
    <button onClick={()=>{setCol("black")}} >change black</button>
    <button  onClick={()=>setCol("green")}>change green</button>
    <button onClick={()=>setCol("orange")} >change orange</button>
    <button onClick={()=>setCol("pink")}>change pink</button>

    </>
  )
}

export default PracColor