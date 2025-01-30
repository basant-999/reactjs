import Studata from "./Data"
import DataTbale from "./DataTbale"
import Prac from "./Prac"
import Car from "./Practice"


function App() {
   const bk = Studata.map((key)=><DataTbale
     name = {key.name}
     age = {key.age}
     contact={key.contact}
     city = {key.city}

   />)

  //  ==============================practice===============

  const jeep = Car.map((key)=><Prac
    model={key.model}
    carName={key.carName}
    mfg={key.mfg}
     branch={key.branch}

  />)
  

  return (
    <>
     <h1>Table data using Props</h1>

     <table border="2px">
      <tr>
        <th>NAME</th>
        <th>AGE</th>
        <th>CONTACT</th>
        <th>CITY</th>

      </tr>
      {bk}

      {jeep}
     </table>

    

      
       
    

    </>
  )
}

export default App
