import {Routes,Route} from "react-router-dom"
import Home from "./home"
import About from './About'
import Navbar from "./Layout"


function App (){
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes>

    
    </>
  )
}
export default App