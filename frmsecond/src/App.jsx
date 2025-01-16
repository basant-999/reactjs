import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Frmse from './frmsecond'
import Bk from './map'
import Aray from './arrayObj'
import Fter from './filter'
import Local from './locals'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Frmse /> */}
   <Aray />
    {/* <Bk /> */}
    <Fter />
    <Local />
    </>
  )
}

export default App
