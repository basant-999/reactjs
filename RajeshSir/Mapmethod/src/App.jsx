import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hotel from './Hotel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Map method</h1>
     <Hotel/>
    </>
  )
}

export default App
