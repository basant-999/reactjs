import React from 'react'
import { useParams } from 'react-router-dom'
const About = () => {
    let {id}=useParams()
  return (
    <div>this is About{id}</div>
  )
}

export default About