import React from 'react'

const ExDesign = (props) => {
  return (
   <>
     <tr>
        <th>{props.empno}</th>
        <th>{props.name}</th>
        <th>{props.salary}</th>
        <th>{props.destination}</th>

     </tr>
   </>
  )
}

export default ExDesign