import { useState } from 'react'
import Fet from './Fet'

import './App.css'
import Axios from './Axios'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Axios />
     <Fet />
    </>
  )
}

export default App
