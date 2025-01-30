import React from 'react'
import { useContext } from 'react'
import { BioContext } from './Context'


const Detail = () => {
    const{ name,age}=useContext(BioContext)
  return (
   <>
    <h1>ffdggfghj2542{name}fgf{age}</h1>
   </>
  )
}

export default Detail