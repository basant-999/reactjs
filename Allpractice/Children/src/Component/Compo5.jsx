import React from 'react'
import { myContext } from '../App'
import { useContext } from 'react'

const Compo5 = () => {
  const {chi,setChi} = useContext(myContext)
  return (
   <>
     <h1>this is compoent5{chi}</h1>
     <button onClick={()=>{setChi("suresh")}}>click</button>
   </>
  )
}

export default Compo5