import React, { useState } from 'react'

const Form = () => {
    let [input,setinput] = useState({
        "name":"",
        "email":"",
        "password":""
    })
     const datainput=(e)=>{
        let name=e.target.name
        let value=e.target.value

        setinput({...input,[name]:value})

    }
    const sub=()=>{
        console.log(input)

    }

  return (
    <>
    <center>
        <input type="text" name='name' value={input.name} onChange={datainput} placeholder='enter name'/> <br />
        <input type="email" name='email' value={input.email} onChange={datainput} placeholder='enter emai;'/> <br />
        <input type="password" name='password' value={input.password}  onChange={datainput}placeholder='enter password'/> <br />
        <button onClick={sub}>submit</button>


    </center>
    </>
  )
}

export default Form