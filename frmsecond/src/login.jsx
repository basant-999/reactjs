
import { useEffect, useState } from "react"
const Log = () =>{
    let [inputname,setInput] = useState({
        username:'',
        address:'',
        email:''

    })

    let [udata,setUdata] = useState(null)
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
    useEffect(()=>{
        let logindata = JSON.parse(localStorage.getItem('userdata'))
        setUdata(logindata)
    },[])
    
    return(
        <>
        <h1>this is login page</h1>

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
export default Log