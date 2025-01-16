import { useState } from "react"

function Theme(){
        let [show,setShow] = useState('white')
        function black(){
            setShow('black')
        }

        return(
            <>
            <div style={{width:"100vh",height:"100vw",background:show}}>
            <button onClick={black} > click</button>

            </div>
            </>
        )
    
}export default Theme