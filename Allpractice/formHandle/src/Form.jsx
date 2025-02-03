import React from 'react'
import './form.css'
import { useState } from 'react'

const Form = () => {
    let [name,setname]=useState("")
    let [email,setemail]=useState("")
    let [mob,setmob]=useState("")
    let [pass,setpass]=useState("")
    let [cpass,setcpass]=useState("")


     function show(){
                let obj={
                    names:name,
                    emails:email,
                    mobs:mob,
                    password:pass,
                    compassword:cpass
                }
                console.log(obj)
    }

  return (
   <>
   <section id='frm'>
   <div> <input type="text"value={name}onChange={(e)=>setname(e.target.value)} placeholder='entername' /> </div>
   <div> <input type="email"value={email} onChange={(e)=>setemail(e.target.value)} placeholder='enteremail' /></div>
   <div> <input type="tel" value={mob} onChange={(e)=>setmob(e.target.value)} placeholder='entermobile' /></div>
   <div>  <input type="password" value={pass}onChange={(e)=>setpass(e.target.value)} placeholder='enterpassword' /></div>
   <div>  <input type="password" value={cpass} onChange={(e)=>setcpass(e.target.value)} placeholder='entercpassword' /></div>
    <button onClick={show}>click me</button>

   </section>
   </>
  )
}

export default Form