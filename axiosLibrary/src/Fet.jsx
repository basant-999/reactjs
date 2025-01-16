import axios from "axios";
import { useEffect, useState } from "react";

const Fet = ()=>{
    let [jsondata,setData] = useState([])
    let [frminp,setfrminp] = useState({
        name:"",
        age:"",
        contact:"",
        city:""

    })

    const changeinp = (e)=>{
            let {name,value} = e.target;
            setfrminp({...frminp,[name]:value})
    }

    const submitform = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3000/student',frminp)
        .then(r=>alert("inserted"))
        
    }
    const mydel=(id)=>{
        axios.delete(`http://localhost:3000/student/${id}`)
        .then(re=>alert("deleted"))
    }

    useEffect(()=>{
        axios.get("http://localhost:3000/student")
        .then(res=>{
            console.log(res.data)
            setData(res.data)
        })
    },[mydel])

    

    return (
        <>
        <table border="">
        <thead>
        <th>id</th>
        <th>Name</th>
        <th>Age</th>
        <th>Contact</th>
        <th>city</th>
        <th>delete</th>
        </thead>
       <tbody>
        {
            jsondata.map((e)=>(
                <tr>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.age}</td>
                    <td>{e.contact}</td>
                    <td>{e.city}</td>
                    <td><button onClick={()=>mydel(e.id)}>Delete</button></td>

                </tr>
            ))
        }
       </tbody>
        </table>
        <form onSubmit={submitform}>
            <label htmlFor="">Name</label>
            <input type="text" value={frminp.name}  name='name' onChange={changeinp} /> <br />

            <label htmlFor="">age</label>
            <input type="text" value={frminp.age} name='age' onChange={changeinp} /> <br />

             <label htmlFor="">contact</label>
             <input type="text" value={frminp.contact} name='contact' onChange={changeinp} /> <br />

             <label htmlFor="">city</label>
             <input type="text" value={frminp.city} name='city' onChange={changeinp} /> <br />
            
             <input type="submit" />

        </form>

        </>
    )
}
export default Fet