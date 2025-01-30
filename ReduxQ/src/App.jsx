

import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { dec,inc } from "./createSlice"

function App() {
  let c= useSelector((s)=>s.counter.value)
  let dis= useDispatch()

  return (
    <>
      <h1>{c}</h1>
      <button onClick={()=>dis(inc())}>Inc</button>
      <button onClick={()=>dis(dec())}>dec</button>
    </>
  )
}

export default App
