import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
    let v=67
  return (
   <>
   <div>
    <Link to="/">Home</Link>
    <Link to={`/about/${v}`}>About</Link>
    <Link to="/contact">Contact</Link>

   </div>
   <hr />

   {/* <Outlet/> */}
   <hr />

   wwww.bk .com
   </>
  )
}

export default Navbar