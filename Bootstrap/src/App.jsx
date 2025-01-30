import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './navbar'
import Footer from './Footer'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Card/>
      <Footer/>
    </>
  )
}

export default App
