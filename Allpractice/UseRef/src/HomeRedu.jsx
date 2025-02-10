import React, { useReducer } from 'react'

const HomeRedu = () => {
     const increment=(state,actions)=>{
          switch(actions){
            case "inser":
             return state+1
                
           
            case "dise":
             return state-1
                
          }

          
     }
    const [count,indis] = useReducer(increment,0)
  return (
<>
<button onClick={()=>{indis("inser")}}>in</button>
{count}
<button onClick={()=>{indis("dise")}}>de</button>
</>
  )
}

export default HomeRedu