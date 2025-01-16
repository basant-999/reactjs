import React from "react"
import { use } from "react"
import { useState } from "react"
 
const Frm=()=>{

    let [h,setH] = useState('')
    let [e,setE] = useState('')

    let [st,setSt] = useState(false)



    function hinput(event){
        console.log(event.target.value);
        setH(event.target.value)
    }

    function hinput2(event){
        console.log(event.target.value);
        setE(event.target.value)
    }
    return(
        <>
        <h1>my name {(st) ? st : ''}</h1>
        <h2>my result is {e}</h2>
        {/* <input type="text" onChange={hinput} /> <br /> */}
        <input type="text" onChange={hinput2} />

        <button onClick={()=>setSt(true)}>click</button>
        </>
    )
}
export default Frm