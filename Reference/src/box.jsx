
import React from "react"
import { useRef } from "react"
const Box = () =>{
    let ref = useRef("")
    function Mouse (){
        ref.current.style.backgroundColor = "yellow"
    }

    function Leave (){
        ref.current.style.backgroundColor = "blue"
    }
    return (
        <>
        <div ref={ref} onMouseEnter={Mouse} onMouseLeave={Leave} style={{padding:"100px",backgroundColor:"red"}} >

        </div>
        </>
    )
}
export default Box