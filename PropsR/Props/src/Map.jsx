const  stuData = [
        {
        "roll":123,
        "name":"niranjan",
        "subject":"mca",
        "fees":1556321
        },
        {
            "roll":123,
            "name":"niranjan",
            "subject":"mca",
            "fees":1556321
        },
        {
            "roll":123,
            "name":"niranjan",
            "subject":"mca",
            "fees":1556321
        }
]
const ans=stuData.map((key)=>{
    return (
        <>
        <tr>
             <th>{key.roll}</th>
             <th>{key.name}</th>
             <th>{key.subject}</th>
             <th>{key.fees}</th>

        </tr>
        </>
    )
})
const  Arr=()=>{
    return(
        <>
        <h1> wel come usinf map()</h1>

        <table border="2">
            <tr>
                 <th>roll</th>
                 <th>name</th>
                 <th>subject</th>
                 <th>fess</th>
            </tr>
            {ans}
        </table>
        </>
    )
}
export default Arr 