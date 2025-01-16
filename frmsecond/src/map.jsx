import { useState } from "react"

const Bk = () =>{

    let ar = ["basant",50,"bhopal"]
    let arf = ar.map((e,index) =>{return <li key={index}>{e}</li>})
    return(
        <>
        {ar.map((e,index)=>{return <h1 key={index}>{e}</h1>})}

        <ul>
            <li>
                {arf}
            </li>
        </ul>
        </>
    )
}
export default Bk