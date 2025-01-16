 import {Routes,Route}  from 'react-router-dom'

import Navbar from './count'
// import About from './about'
// import Home from './home'
// import Navbar from './layout'

function App() {

  return (
    <>
      <Routes>
      <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      </Route>
    </Routes>
    <Count/>
    </>
  )
}

export default App
