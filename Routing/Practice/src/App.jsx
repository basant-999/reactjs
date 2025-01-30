
import About from './componets/About'
import Contact from './componets/Contact'
import Detail from './componets/Detail'
import Home from './componets/Home'
import NewC from './componets/NewC'
import OldC from './componets/OldC'
import PreC from './componets/PreC'
import Layout from './Layout'
import{BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <>
     
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout/>}>
                  <Route index element={<Home/>}/>
                  <Route path='home' element={<Home/>}/>
                  <Route path='about' element={<About/>}/>
                  <Route path='contact' element={<Contact/>}>
                         <Route path='newC'element={<NewC/>}/>
                         <Route path='oldC' element={<OldC/>}/>
                         <Route path='preC' element={<PreC/>}/>
                     </Route>
                    
                  <Route path='detail' element={<Detail/>}/>

                  


              </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
