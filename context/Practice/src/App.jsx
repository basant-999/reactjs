import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Compo from './Compo'
import { BioProvider } from './Context'
import Detail from './Detail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BioProvider>
     <Compo/>
     <Detail/>
    </BioProvider>
  )
}

export default App
