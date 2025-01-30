import React from 'react'
import{Outlet,Link} from "react-router-dom"

const Contact = () => {
  return (
   <>
   <Link to="newC">NewC</Link>
   <Link to="preC">PreC</Link>
   <Link to="oldC">OldC</Link>

   <hr />

   <Outlet/>

   <hr />

   </>
  )
}

export default Contact