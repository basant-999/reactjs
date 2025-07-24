import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Memo from './Memo'
import ExpensiveFuc from './ExpensiveFuc'
import Usecallback from './Usecallback'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Memo/> <br /> <br />  */}
      {/* <ExpensiveFuc/> <br /> <br /> */}
      <Usecallback/>
    </>
  )
}

export default App
