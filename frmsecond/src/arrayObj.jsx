import { useState } from "react"

const Aray = () =>{
    let arr = [
         {
        id:1,
        name:"basant",
        add:"bareli",
        email:"bas@gmail.com"

    },
    {
        id:2,
        name:"kisan",
        add:"bari",
        email:"kiss@gmail.com"  
    },
    {
        id:3,
        name:"raja",
        add:"hosanga",
        email:"kiss@gmail.com"     
    }
]

let ar_obj = arr.map((e)=>{return <li>{e.id} - {e.name}</li>})
return(
    <>
    <h1>{ar_obj}</h1>
    
    </>
)
}
export default Aray