import Counter from "./Counter"
import Form from "./Form"
import Frm from "./Frm"
import PracColor from "./PracColor"
import PracFrm from "./PracFrm"
import PracIncrement from "./PracIncrement"
import State from "./State"


function App() {
  const collage =(rm)=>{
    alert(`my collage name is:${rm}`)
  }
  const display=(fm,e)=>{
    console.log(e)
    alert(`my name: ${fm},event type:${e.type}`)
  }


  return (
    <>
    <h1>welcome</h1>
    <button onClick={()=>collage("bits")}>click</button>

    <button onClick={(e)=>{display("basant",e)}}> submit</button>

    <Form/>
    <State/>
    <Counter/>
    <Frm/> <br />
    <PracIncrement/>
    <PracColor/>
    <PracFrm/>
     
    </>
  )
}

export default App
