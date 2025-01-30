import{Routes,Route} from "react-router-dom"
import About from "./About"
import Login from "./Login"
import Signup from "./Signup"
import Contact from "./Contact"
import Home from "./Home"
import Header from "./Header"

function App() {

  return (
    <>
  <Header/>
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Signup" element={<Signup/>}/>

    </Routes>
  
    </>
  )
}

export default App
