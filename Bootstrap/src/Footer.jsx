import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
    <div className="footer-container">
      <div className="footer-section">
        <h4>Contact Us</h4>
        <p>THE INDAI RESORT</p>
        <p>BARELI DIST. RAISEN MP </p>
        <p><a href="#">81207450</a></p>
        <p><a href="#">Basant kushwaha</a></p>
      </div>
  
      <div className="footer-section">
        <h4> Our Facility</h4>
        <ul>
          <li><a href="#">Rooms</a></li>
          <li><a href="#">Meating Area</a></li>
          <li><a href="#">Restaurant</a></li>
          <li><a href="#">Bar & club</a></li>
          <li><a href="#">Party Area</a></li>
          <li><a href="#">Pools</a></li>
        </ul>
      </div>
  
      <div className="footer-section">
        <h4>FeedBack</h4>
        <p>feedback to Resort management and service</p>
        <form>
          <input type="text" placeholder="inter feedback" required/>
          <button type="submit">Submit</button>
        </form>
      </div>
  
      <div className="footer-section">
        <h4>Follow Us</h4>
        <div className="social-icons">
        <a href="#"><li>facebook</li></a>
        <a href="#"><li>Whatsapp</li></a>
        <a href="#"><li>Instagram</li></a>
        <a href="#"><li>Twitter</li></a>
        </div>
      </div>
    </div>
  
    <div className="footer-bottom">
      <p>THE INDIAN RESORT MP</p>
      <p><a href="#">Govt. Permitted</a> | <a href="#"> All Terms and condition</a></p>
    </div>
  </footer>
  )
}

export default Footer