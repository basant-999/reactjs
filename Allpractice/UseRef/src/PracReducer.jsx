import React from 'react'
import { useReducer } from 'react'

const PracReducer = () => {

    const bgcolor =(state,actions)=>{
        switch(actions){
            case "redcolor":
            return state="red"
            case "yellowcolor":
            return state="yellow"
            case "greencolor":
            return state="green"
             case "blackcolor":
            return state="black"
             case "orangecolor":
            return state="orange"
        }

    }
    const [color,mydis] = useReducer(bgcolor,"pink")
  return (

    <>
    <button onClick={()=>{mydis("redcolor")}}>red</button>
    <button onClick={()=>{mydis("yellowcolor")}}>yellow</button>
    <button onClick={()=>{mydis("greencolor")}}> green</button>
    <button onClick={()=>{mydis("blackcolor")}}>black</button>
    <button onClick={()=>{mydis("orangecolor")}}>orange</button>
     <br />
     <div style={{ height:"400px", width:"500px", backgroundColor:color}}></div>
    </>
  )
}

export default PracReducer