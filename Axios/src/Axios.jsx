import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"

const Axios = () => {
    let [jsondata,setdata]=useState([])
    let [frmvisible,setfrmvisible] = useState(false)
    let [editdata,seteditdata]=useState({})

    function hinput(e){
        let {name,vale} = e.target;
        seteditdata({...editdata,[name]:value})
    }

    let [frminp,setfrminp] = useState({
        name:"",
        age:"",
        contact:"",
        city:""
    })
    const changeinp=(e)=>{
        let {name,value}=e.target;
        setfrminp({...frminp,[name]:value})
    }
    const submitform =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3000/student',frminp)
        .then(r=>alert("inserted"))
    }
    const mydel=(id)=>{
        axios.delete(`http://localhost:3000/student/${id}`)
        .then(re=>alert("deleted"))
    }
    useEffect(()=>{
        axios.get('http://localhost:3000/student')
        .then(res=>{
            console.log(res.data);
            setdata(res.data)

        })
    },[mydel])


  return (
    <>
        <table border="">
            <thead>
                <th>id</th>
                <th>name</th>
                <th>age</th>
                <th>contact</th>
                <th>city</th>
                <th>delete</th>
                <th>edit</th>

            </thead>
            <tbody>
                {jsondata.map((e)=>(
                      <tr>
                      <td>{e.id}</td>
                      <td>{e.name}</td>
                      <td>{e.age}</td>
                      <td>{e.contact}</td>
                      <td>{e.city}</td>
                      <td><button onClick={()=>mydel(e.id)}>delete</button></td>
                      <td><button>edit</button></td>
  
  
                  </tr>
                ))
                }
              
            </tbody>
        </table>
         {frmvisible &&(
            <form>
            <label htmlFor="id">id</label>
            <input type="text" name='id' value={editdata.id} onChange={hinput} /> <br /> <br />

            <label htmlFor="name">name</label>
            <input type="text" name='name' value={editdata.name} onChange={hinput} /> <br/> <br />

            <label htmlFor="age">age</label>
            <input type="text" name='age' value={editdata.age} onChange={hinput} /> <br /> <br />

            <label htmlFor="contact">contact</label>
            <input type="text" name='contact' value={editdata.contact} onChange={hinput} /> <br /> <br />

            <label htmlFor="city">city</label>
            <input type="text" name='city' value={editdata.city} onChange={hinput} /> <br /> <br />

            <input type="submit" />
            </form>
        )} 
        <form onSubmit={submitform}>
             

            <label htmlFor="name">name</label>
            <input type="text" name='name' value={frminp.name} onChange={changeinp} /> <br/> <br />

            <label htmlFor="age">age</label>
            <input type="text" name='age' value={frminp.age} onChange={changeinp} /> <br /> <br />

            <label htmlFor="contact">contact</label>
            <input type="text" name='contact' value={frminp.contact} onChange={changeinp} /> <br /> <br />

            <label htmlFor="city">city</label>
            <input type="text" name='city' value={frminp.city} onChange={changeinp} /> <br /> <br />
            <input type="submit" />

        </form>
        </>   
  )
}

export default Axios