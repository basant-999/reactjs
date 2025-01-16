import { useState } from 'react'
import Bk from './color'
import Count from './count'
import KK from './condition'
import Theme from './theme'


function App() {
 
  let [col,setCol] = useState('yellow')
  function red (){
    setCol('red')
  }
  function blue (){
    setCol('blue')
  }
  function green(){
    setCol('green')
  }
  function yellow(){
    setCol('yellow')
  }
  return(
    <>
    <div style={{height:"100vh",width:"100vw",background:col}}></div>
    <button onClick={red}>red</button>
    <button onClick={blue}>blue</button>
    <button onClick={green}>green</button>
    <button onClick={yellow}>yellow</button>

    <Bk />
    <Count />
    <KK />
    <Theme />
    </>
  )
}

export default App
