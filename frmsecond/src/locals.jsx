import { useState } from "react"
import Log from "./login"

const Local = () =>{
    let [inp,setInput ] =  useState({
        username:'',
        password:''
    })
    let [status,setStatus] = useState(false)
    const hinput = (e) =>{
    const {name,value} =e.target 
    setInput({
        ...inp,
        [name]:value
    })
}
    const handlesubnit = (e)=>{
        e.preventDefault()
        if(inp.username=="" || inp.password==""){
            alert("both feild are required")
        }
        else{
            localStorage.setItem('userdata',JSON.stringify(inp))
            setStatus(true)
        }
    }

    if(status){
        return <Log />
    }

    return(
        <>
        <form onSubmit={handlesubnit}>

        <label htmlFor="">username</label>
        <input type="text" name="username" value={inp.username} onChange={hinput}/> <br /> <br />

        <label htmlFor="">password</label>
        <input type="text" name="password" value={inp.password} onChange={hinput}/> <br /> <br />



        <input type="submit" />
        </form>

        

        </>
    )
}
export default Local