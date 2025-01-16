import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'
import { useRef } from 'react'
import Box from './box'

function App() {
  let refel = useRef("")
  console.log(refel);

  function Change(){
    refel.current.innerHTML = "hello"
    refel.current.style.backgroundColor = "red"
    refel.current.style.padding = "10px"


  }

  return (
    <>
    <h1 ref={refel}>code with </h1>
    <button onClick={Change}>click</button>
    <Box />
    </>
  )
}

export default App
