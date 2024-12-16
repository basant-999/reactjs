
import { createElement } from 'react'
import './App.css'

function App() {
  // let a = createElement("h1",[],"hellow from element")
  let name = "basant"
  let ob ={
    fname:"basant",
    age:25

  }

  return (
   <>
   <h1>my name is {name}</h1>
   <h1>{ob.fname}</h1>
   </>

  )
}

export default App
