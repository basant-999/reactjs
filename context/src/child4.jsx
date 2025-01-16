import React, { createContext, useContext } from "react"
import { newdata } from "./child2"
import { use } from "react"
import Child5 from "./child5"

let nir = createContext();
let ndata = "niranjan"
let p = 25
const Child4 = () =>{
    let {name,age} = useContext(newdata)

    return(
        <>
        <h1> child4
            <p>my name is{name} and age {age}</p>
        </h1>
        {/* <newdata.Consumer>
            {
                ({name,age})=>{
                    return (
                        <h1>my name is{name} and my age {age} </h1>
                    )
                }
            }
        </newdata.Consumer> */}
        <nir.Provider value={{ndata,p}}>
            <Child5 />
        </nir.Provider>
        
        </>
    )
}
export default Child4
export {nir}