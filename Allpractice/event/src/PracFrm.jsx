import React, { useState } from 'react'

const PracFrm = () => {
    let [frm,setFrm] = useState("")
    let [umar,setUmar] = useState("")
    let [add,setAdd]=useState("")
    const had =()=>{
        const imk = {name:frm,age:umar,address:add}
        console.log(imk)
          
    }

  return (
   <>
   <h1> From handling </h1>
   Enter name:<input name='name' value={frm}  onChange={(e)=>setFrm(e.target.value)}/> <br /> <br />
   Enter age :<input name='age' value={umar} onChange={(e)=>setUmar(e.target.value)}/> <br /> <br />
   Enter address:<input name='address'value={add}onChange={(e)=>setAdd(e.target.value)}/> <br /><br />
   <button onClick={had}>submit form</button>
   </>
  )
}

export default PracFrm