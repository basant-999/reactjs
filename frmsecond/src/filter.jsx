
import { useState } from "react";

const Fter  = () =>{
    let arr  = [1,2,3,4,56,4,5,6,];
    let arrOutput = arr.filter((e)=>{return e>3 })
    console.log(arrOutput);
    return(
        <>
        
        <ul>
            <li>
                {
                    arrOutput.map((e,index)=>{return <li key={index}>{e}</li>})
                }
            </li>
        </ul>
        </>
    )
}
export default Fter