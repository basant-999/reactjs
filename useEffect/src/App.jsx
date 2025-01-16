import { useEffect, useState } from 'react'
import './App.css'
import Color from './change'



function App() {
  let [count,setCount] = useState(0)
  let [coun,setCoun] = useState(false)

useEffect(()=>{alert("call...!!!!!")},[count,coun])
  return (
    <>
    <Color/>
      {count}

       <button onClick={()=>setCount(count+1)}>inc</button>
      <button onClick={()=>setCoun(!coun)}>dec</button>

      
    </>
  )
}

export default App
