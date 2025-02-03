import React from 'react'
import { useState } from 'react'

const Frm = () => {
    let [st,setSt] = useState("")
    let [rt,setRt] = useState("")

    const sub=()=>{
        const input ={name:st,city:rt}
        console.log(input)
    }
   

  return (
  <>
  Enter Name:<input name='name' value={st} onChange={(e)=>{setSt(e.target.value)}}/>
  Enter city:<input name='city' value={rt} onChange={(e)=>{setRt(e.target.value)}}/>
  <button onClick={sub}> click</button>
  </>
  )
}

export default Frm