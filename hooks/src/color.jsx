import { use, useState } from "react";


function Bk() {
    let [h,setH] = useState(false)
    let p = ''
    
        if(h){
            p=<h1>time is now </h1>
        }
        else{
            p = ''
        }
    
    return(
        <>
        <button onClick={()=>setH(!h)}>show</button>
        {/* <button onClick={()=>setH(false)}>hide</button> */}
        {p}
        </>
    )
}
export  default Bk