import React, { useEffect, useState } from 'react';
import axios from "axios";

const Axios = () => {
    let [jsondata, setdata] = useState([]);
    let [frmvisible, setfrmvisible] = useState(false);
    let [editdata, seteditdata] = useState({});

    let [frminp, setfrminp] = useState({
        name: "",
        age: "",
        contact: "",
        city: ""
    });

    // Reusable fetch function
    const getData = () => {
        axios.get('http://localhost:3000/student')
            .then(res => {
                setdata(res.data);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    const changeinp = (e) => {
        let { name, value } = e.target;
        setfrminp({ ...frminp, [name]: value });
    };

    const submitform = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/student', frminp)
            .then(() => {
                alert("Inserted");
                setfrminp({
                    name: "",
                    age: "",
                    contact: "",
                    city: ""
                });
                getData();
            });
    };

    const mydel = (id) => {
        axios.delete(`http://localhost:3000/student/${id}`)
            .then(() => {
                alert("Deleted");
                getData();
            });
    };

    const hinput = (e) => {
        let { name, value } = e.target;
        seteditdata({ ...editdata, [name]: value });
    };

    const finalsubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/student/${editdata.id}`, editdata)
            .then(() => {
                alert("Updated");
                setfrmvisible(false);
                getData();
            });
    };

    return (
        <>
            <table border="">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>age</th>
                        <th>contact</th>
                        <th>city</th>
                        <th>delete</th>
                        <th>edit</th>
                    </tr>
                </thead>
                <tbody>
                    {jsondata.map((e) => (
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.age}</td>
                            <td>{e.contact}</td>
                            <td>{e.city}</td>
                            <td><button onClick={() => mydel(e.id)}>delete</button></td>
                            <td><button onClick={() => { setfrmvisible(true); seteditdata(e); }}>edit</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Edit Form */}
            {frmvisible && (
                <form onSubmit={finalsubmit}>
                    <label htmlFor="id">id</label>
                    <input type="text" name='id' value={editdata.id || ''} onChange={hinput} disabled /> <br /> <br />

                    <label htmlFor="name">name</label>
                    <input type="text" name='name' value={editdata.name || ''} onChange={hinput} /> <br /> <br />

                    <label htmlFor="age">age</label>
                    <input type="text" name='age' value={editdata.age || ''} onChange={hinput} /> <br /> <br />

                    <label htmlFor="contact">contact</label>
                    <input type="text" name='contact' value={editdata.contact || ''} onChange={hinput} /> <br /> <br />

                    <label htmlFor="city">city</label>
                    <input type="text" name='city' value={editdata.city || ''} onChange={hinput} /> <br /> <br />

                    <input type="submit" value="Update" />
                </form>
            )}

            {/* Add Form */}
            <form onSubmit={submitform}>
                <label htmlFor="name">name</label>
                <input type="text" name='name' value={frminp.name} onChange={changeinp} /> <br /> <br />

                <label htmlFor="age">age</label>
                <input type="text" name='age' value={frminp.age} onChange={changeinp} /> <br /> <br />

                <label htmlFor="contact">contact</label>
                <input type="text" name='contact' value={frminp.contact} onChange={changeinp} /> <br /> <br />

                <label htmlFor="city">city</label>
                <input type="text" name='city' value={frminp.city} onChange={changeinp} /> <br /> <br />

                <input type="submit" value="Add Student" />
            </form>
        </>
    );
};

export default Axios;
