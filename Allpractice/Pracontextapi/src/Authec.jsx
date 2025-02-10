import { mycontext } from './Comman'
import { useContext } from 'react'

const Authec = () => {
   
    
    const{user,logout} = useContext(mycontext)
  return (
   <>
       <h1>Good morning{user.name}
        <button onClick={()=>{logout()}}></button>
       </h1>
   </>
   )
}

export default Authec