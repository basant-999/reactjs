import { useNavigate, useParams } from "react-router-dom"
import React from "react"

const About = () =>{
    let {name,age} = useParams()
    console.log(name); //useparams


    let nav = useNavigate()

    function Contactpage(){
        nav('/Contact')
    }
    return(
        <>
        <h1>About page</h1>
        <h1>my name is{name}and {age}</h1>
        <button onClick={Contactpage}>ContactUs </button>
        </>
    )
}
export default About