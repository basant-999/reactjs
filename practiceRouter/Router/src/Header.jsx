import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
     <>
     <Link to="/">Home</Link>
     <Link to="/About">About</Link>
     <Link to="/Contact">Contact</Link>
     <Link to="/Login">Login</Link>
     <Link to="/Signup">Signup</Link>

     </>
  )
}

export default Header