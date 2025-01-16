   
   import { useState } from "react"
   
   function Count(){
  let [ count , setCounter ] = useState(0)

            function add(){
                setCounter(count+5)
            }
            function sub(){
              {
                
                setCounter(count-1)
              } 
            }

            return(
                <>
                <h1>{count}</h1>
                <button onClick={add}> incrt</button>
                <button onClick={sub}> dre</button>

                </>
            )
}
export default Count