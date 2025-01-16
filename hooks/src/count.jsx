import { useState } from "react"

function Count() {
         let [count, setCounter] = useState(0)
          function add (){
            setCounter(count+1)
          }
        
            function sub (){
              {
                setCounter(count-1)
        
              }
            }
          
        
          return (
            <>
          <h1>{count}</h1>
          <button onClick={add}>increment</button>
          <button onClick={sub}> dicriment</button>
        </>
          )
    }

    export default Count