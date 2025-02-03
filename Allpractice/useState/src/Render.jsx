import React from 'react'
import Form from './Form'
import { useState } from 'react'

const Render = () => {
    let [kk,setkk] = useState()
    function show(){
        setkk(<Form/>)
    
    }
  return (
    <>
    {kk}
    <button onClick={show} >click</button>
    </>

  )
}

export default Render