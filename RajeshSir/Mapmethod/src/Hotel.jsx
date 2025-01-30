
    const Ho = [
        {
            "Detail":"bhopal",
            "password":14562,
            "contact":45565
        },
        {
            "Detail":"dehli",
            "password":14545162,
            "contact":455444465
        },
        {
            "Detail":"betul",
            "password":145442,
            "contact":45541415
        },
    ]
        const arg = Ho.map((key)=>{
            return(
                <>
                <tr>
                    <th>{key.Detail}</th>
                    <th>{key.password}</th>
                    <th>{key.contact}</th>
                </tr>
                </>
            )
        })
    const Hotel = () => {
    return (
        <>
       <h1>Features</h1>
       <table border="2px">
        <tr>
            <th>DETAIL</th>
            <th>PASSWORD</th>
            <th>CONTACT</th>
        </tr>
        {arg}
       </table>
       </>
    )
    }

    export default Hotel