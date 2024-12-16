  
import myimg from './assets/h_cat_card_05.jpg'
const Hero = () =>{
    return (
        <>
      <div>
        <ul>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home  </li>
        </ul>
      </div>
      <section>
        <h1>from public folder</h1>
        <img src="h_cat_card_05.jpg" alt="" />

        <h1>from src folder</h1>
        <img src={myimg} alt="" />
      </section>
        </>
    )
}
export default Hero