import React from 'react'
import { useReducer } from 'react'

const Reducer = () => {
    
    const Reducer = (state,actions)=>{
        switch(actions)
        {
            case  "incre":
                return state+1;
                case "dec":
                return state-1;
                    
                    
                }
              
    }
    const [count,dispatch]  = useReducer(Reducer , 0)
  return (
   
    <>
    <button onClick={()=>{dispatch("incre")}}>incre</button>
    {count}
    <button onClick={()=>{dispatch("dec")}}>dec</button>
    </>
  )
}

export default Reducer