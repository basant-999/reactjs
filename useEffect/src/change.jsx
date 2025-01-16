import { useEffect, useState } from "react";

function Color(){
  let [Color, setColor] = useState('orange')

  function rd(){
    setColor('black')
  }
  useEffect(()=>{alert("call!!!!....")},[Color])

  return(
    <>
    <div style={{height:'200px',width:'200px',background:Color}}>
      <button onClick={rd}>black</button>
    </div>
    </>
  )
}
export default Color