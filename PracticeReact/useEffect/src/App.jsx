import { useEffect, useState } from "react"
import Change from "./Change"


function App() {
  let [count,setCount] = useState(0);
  let [bk,setbk] = useState(false);

  useEffect(()=>{alert("aaaaaaa")},[count,bk])
  return (
    <>
      <Change/>
      {count}

      <button onClick={()=>setCount(count+1)}>inc</button>
      <button onClick={()=>setbk(!bk)}>dec</button>

    </>
  )
}

export default App
