import { useContext } from "react"
import { nir } from "./child4"


const Child6 = () =>{
    let {ndata,p} = useContext(nir)
    return(
        <h1> my name is{ndata} age{p}</h1>
    )
}
export default Child6