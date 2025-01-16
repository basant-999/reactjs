import {Routes,Route} from "react-router-dom"

import About from './About'
import Navbar from "./Layout"
import Home from "./Home"


function App (){
  return(
    <>
   
    <Routes>
      <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path='/About' element={<About />} />
      </Route>
    </Routes>

    
    </>
  )
}
export default App