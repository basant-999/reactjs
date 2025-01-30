import { BrowserRouter, Route,Routes } from "react-router-dom"
import Layout from "./Layout"
import About from "./pages/About"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import AboutCom from "./pages/AboutCom"
import AboutService from "./pages/AboutService"
import AboutProduct from "./pages/AboutProduct"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>

      <Route path="about" element={<About/>}> 
      <Route index element={<AboutCom/>}/>
      <Route path="aboutCom" element={<AboutCom/>}/>
      <Route path="aboutService" element={<AboutService/>}/>
      <Route path="aboutProduct" element={<AboutProduct/>}/>
      </Route>

      <Route path="contact" element={<Contact/>}/>
     
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
