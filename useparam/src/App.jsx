import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Navbar />}>
      <Route index element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/Contact' element={<Contact />}/>

      </Route>
    </Routes>
    </>
  )
}

export default App
