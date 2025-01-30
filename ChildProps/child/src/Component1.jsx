import Component2 from "./Component2"
const Component1 = () => {
    const abc = "kisan"
    const ob = {
        "name": "niranjan",
        "city" :"mandi"
    }
  return (
    <>
    <h1>    <div>Component1</div>  </h1>
     <Component2 text={abc} add={ob} />
     </>
 
  )
}

export default Component1