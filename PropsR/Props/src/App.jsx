
import './App.css'
import Compo from './Compo'
import Arr from './Map'
import Student from './Student'

import ExDesign from './ExDesign'
import EmpData from './ExData'
import InLincss from './InLincss'

function App() {

   const arg= EmpData.map((key)=> <ExDesign
      
   empno={key.empno}
   name ={key.name}
   salary={key.destination}
   destination={key.salary}
   />)


  return (
    <>
    <h1 align="center">welcome</h1>
    <Compo clgname="Basasal" fs="4000"/>

    <Student/>
    <Arr/>
    <InLincss/>


    <table border="2">
       <tr>
         <th>emp</th>
         <th>name</th>
         <th>destination</th>
         <th>Salary</th>
       </tr>
       {arg}
    </table>
    </>
  )
}

export default App
