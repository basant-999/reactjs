import React from 'react'
import axios from "axios"
import { useEffect } from 'react'


const Prop = () => {
    useEffect(()=>{
        const store=async()=>{
            let data1 =await axios.get("http://localhost:3000/resis")
            let respon= await data1.data
            console.log(respon)
        }
        store();
    },[])
  return (
   <>
 <h1>basant</h1>
   </>
  )
}

export default Prop