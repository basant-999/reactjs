import { useState } from "react"

const Finput =() => {
    let [inputname,setInput] = useState({
        username:'',
        address:''
    })

    const Tinput = (event) => {

        const {name,value} = event.target;
        console.log(event.target.value)
        setInput({
            ...inputname,
            [name]:value
        })
 
    }
    const finalsubmit = (event) =>{
        event.preventDefault();
        console.log(inputname)
    }

    return(
        <>
        <form onSubmit={finalsubmit}>
            <label htmlFor="">Nmane</label>
            <input type="text" name="username" value={inputname.username} onChange={Tinput} /> <br /> <br />

            <label htmlFor="">Address</label>
            <input type="text" name="address" value={inputname.address} onChange={Tinput} /> <br /> <br />

            <label htmlFor="">email</label>
            <input type="text" name="email" value={inputname.email} onChange={Tinput} />
            <input type="submit" />
        </form>
        </>
    )
}
//   sred opreator rest opreator
export default Finput