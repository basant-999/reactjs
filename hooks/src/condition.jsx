import { useState } from "react";


function KK(){
    let [show,setShow] = useState(false)

    return(
        <>
        <button onClick={()=>setShow(!show)}>
            {(show)?"hide":"display"}
        </button>

        {(show)?<h2>success</h2> : ""}

        </>
    )
}
export default KK