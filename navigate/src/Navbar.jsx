import React from "react"

import { Link, Outlet } from "react-router-dom"
const Navbar = () =>{
    return(
        
       <div>
       <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>

        </ul>
       <Outlet />

       </div>
    
    )
}
export default Navbar