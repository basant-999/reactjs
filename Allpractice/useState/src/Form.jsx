import { useState } from "react"

const Form=()=>{
    let [bk,setbk] = useState()
    let [rk,setrk] = useState()
  
    let obj={
        names:bk,
        email:rk
    }
    console.log(obj)
    return(
        <>
        <input type="text" value={bk} onChange={(e)=>setbk(e.target.value)} /> <br />
        <input type="text" value={ rk} onChange={(e)=>setrk(e.target.value)} />
        </>
    )
}
export default Form