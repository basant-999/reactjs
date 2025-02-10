import { useState } from 'react'
import Ref from './Ref'
import Pracref from './Pracref'
import Reducer from './Reducer'
import PracReducer from './PracReducer'
import HomeRef from './HomeRef'
import HomRef from './HomRef'
import HomeRedu from './HomeRedu'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Useref</h1>

      <Ref/>
      <Pracref/>
      <Reducer/> <br />
      <PracReducer/><br />
      <HomeRef/> <br /> <br />
      <HomRef/> <br /> <br />
      <HomeRedu/>

    </>
  )
}

export default App
