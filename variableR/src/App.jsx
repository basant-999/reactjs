import Data from "./component/Data"
import Footer from "./component/Footer"
import Header from "./component/Header"

const car = <ul>
  <li>basant</li>
  <li>kisan</li>
  <li>niranjan</li>
</ul>
function App() {
 

  return (
    <>
    {/* <p>our course{car}</p>
    <h1> mern {car}</h1>

    <h1>application form</h1>
    Enter name : <input type="text" /> <br />
    Enter city : <input type="text" /> <hr /> */}

    <form action="">
      roll no : <input type="text" /> <br />
      name : <input type="text" /> <br />
      class:  <input type="text" /> <br />
      comment: <textarea name="" id=""/> <br />
    </form>
    <Header/>
    <Data/>
    <Footer/>

    </>
  )
}

export default App
