import React from 'react'
const DataTbale = (props) => {
  return (
    <>
    {/* <table style={{border:"2px ", backgroundColor:"yellow"}}> */}
        <tr>
            <th>{props.name}</th>
            <th>{props.age}</th>
            <th>{props.contact}</th>
            <th>{props.city}</th>

        </tr>
    {/* </table> */}
    </>
   
  )
}

export default DataTbale