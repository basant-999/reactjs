import { useState } from "react"

const Frmse = ()=>{

    let [inputname,setInput] = useState({
        username:'',
        address:'',
        email:''

    })
    const Tinput = (ev) =>{
        const{ name,value} =ev.target;
        console.log(ev.target.value);
        setInput ({
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

                <label htmlFor="">addres</label>
                <input type="text" name="address" value={inputname.address} onChange={Tinput} /> <br /> <br />

                <label htmlFor="">email</label>
                <input type="text" name="email" value={inputname.email}  onChange={Tinput}/> <br /> <br />

                <input type="submit" />


            </form>
        </>
    )
}
export default Frmse