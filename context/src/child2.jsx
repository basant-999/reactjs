import React from "react"
import { createContext } from "react";
import {cdata } from "./App"
import Child3 from "./child3"

let newdata = createContext();
let name = "basant kushwaha"
let age = 23


const Child2 = () =>{
    return (
        <>
        <cdata.Consumer>
            {
            (data)=>{
                return(
                    <h1>happy {data}</h1>
                )
            }
            }
        </cdata.Consumer>

        <newdata.Provider value = {{name,age}}>
            <Child3 />
        </newdata.Provider>
     

        </>
    )
}
export  default Child2
export {newdata}