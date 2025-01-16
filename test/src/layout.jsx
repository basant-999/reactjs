import React from "react"
import { Link ,Outlet } from "react-router-dom"
function Navbar(){
    return(
        <>
        <header>
        <nav>
            <h1>logo</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>

            </ul>
        </nav>
        </header>
        
        <main>
            <Outlet />
        </main>

        <footer>
            <h2>footer </h2>
        </footer>
        </>
    )
}
export default Navbar