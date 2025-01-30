import { BioContext } from "./Context"
import { useContext } from "react"

const Compo = () => {
  const {name,age}  = useContext(BioContext)
    
  return (
            <h1>beatuful dffgfggnh{name}and{age}</h1>
  )
}

export default Compo