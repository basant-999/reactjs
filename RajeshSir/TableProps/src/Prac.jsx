import React from 'react'

const Prac = (props) => {
  return (
   <>
   <tr>
     <th>{props.model}</th>
     <th> {props.carName}</th>
     <th> {props.mfg}</th>
     <th> {props.branch}</th>
     </tr>
   </>
  )
}

export default Prac