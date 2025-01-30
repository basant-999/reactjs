import React from 'react'
import{Link , Outlet} from 'react-router-dom'

const Layout = () => {
  return (
   <>
   <Link to="home">Home</Link>
   <Link to="about">About</Link>
   <Link to="contact">Contact</Link>
   <Link to="detail">Detail</Link>

   <hr/>

   <Outlet/>

   <hr />

   wwww.bk.com

   </>
  )
}

export default Layout