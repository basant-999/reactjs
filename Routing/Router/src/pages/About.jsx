import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const About = () => {
  return (
   <>
   <h1>About us</h1>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sunt facere nobis consequatur sequi quas perspiciatis tempore repudiandae dolorem! Dolores odit numquam quaerat delectus aspernatur, doloribus suscipit aperiam eligendi ab! <br />

        <Link to="aboutCom">AboutCompany</Link> <br />
        <Link to="aboutService">AboutService</Link> <br />
        <Link to="aboutProduct">AboutProduct</Link> <br />

        <Outlet />

   </>
  )
}

export default About