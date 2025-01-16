import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'

import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Navbar />}>
      <Route index element={<Home />}/>
      <Route path='/about/:name/:age' element={<About />}/>
      <Route path='/Contact' element={<Contact />}/>

      </Route>
    </Routes>
 
    </>
  )
}

export default App
