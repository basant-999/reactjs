import React from 'react'

const Usecall = ({task,addtask}) => {
  console.log("*****************")
  return (
  
    <>
    {
      task.map((key,index)=>{
        return(
          <>
          <h3 key={index}>{key}</h3>
          </>
        )
      })
}
<button onClick={addtask}>add</button>
<button onClick={task}></button>
    </>
  )
}

export default Usecall