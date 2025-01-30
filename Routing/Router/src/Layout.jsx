import React from 'react'

import { Link,Outlet} from 'react-router-dom'

const Layout = () => {
  return (
   <>
   <Link to="home">Home</Link>
   <Link to="about">About us </Link>
   <Link to="contact">Contact us </Link>

   <hr />
   <Outlet/>
   <hr />

   www.company.com

   </>
  )
}

export default Layout