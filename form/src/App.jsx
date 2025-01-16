import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Frm from './frm'
import Finput from './fromInp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>basant</h1>

      <Frm />
      <Finput />
    </>
  )
}

export default App
