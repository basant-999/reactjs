import './App.css'
import Nav  from './navbar.jsx'

function App(){
  let st = {
    backgroundColor:"green", // internal css
    color :"white",
    padding:"10px",
    borderRadius:"10px"
  }
  return(
    <>
    <nav />
    <h1 style={{backgroundColor:"black",color:"red",padding:"10px", borderRadius:'10px'}}>well come react</h1>
    <h2 style={st}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
    <h3 className='head'> crete programme</h3>
    </>
  )
}
export default App