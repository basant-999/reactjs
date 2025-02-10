import React, { useState } from 'react'

const PracIncrement = () => {
    let [cou,setcou] = useState(0)
    const increase=()=>{
        setcou(cou+1)
    }
    const  decrease=()=>{
        if(cou<=0){
            alert("no laser than")
        }else{
        setcou(cou-1)

        }
    }
  return (
    <>
    <button onClick={increase}>Inc</button><br />
    count {cou} <br />
    <button onClick={decrease}>DEc</button>
    </>
  )
}

export default PracIncrement