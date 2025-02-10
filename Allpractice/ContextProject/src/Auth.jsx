import React from 'react'
import { useContext } from 'react'
import { myContext } from './Logcontext'

const Auth =()=> {

    const {user,logout} = useContext(myContext)
  return (
   
    <>
       <h2>wecome:{user.name}
        <button onClick={()=>{logout()}}>logout</button>
       </h2>
    </>
  )
}

export default Auth