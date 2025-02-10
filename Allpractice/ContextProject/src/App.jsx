import { myContext } from "./Logcontext"
import Unauth from "./Unauth"
import { useContext } from "react"
import Auth from "./Auth"

function App() {
 const {user} = useContext(myContext)

  return (
    <>
    <h1>my login app</h1>
    {user.auth? <Auth/>:<Unauth/>}
    </>
  )
}

export default App
