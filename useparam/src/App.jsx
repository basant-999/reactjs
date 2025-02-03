import {Routes,Route,BrowserRouter} from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./component/Home"
import About from "./component/About"
import Contact from "./component/contact"


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar />}>
      <Route index element={<Home />}/>
      <Route path='/about/id' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>

      </Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
