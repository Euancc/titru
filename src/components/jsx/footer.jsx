import React from 'react'
import '../css/footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-item">
          <h3>Contact us</h3>
          <div className="contact-sect"></div>
          <p>titiruecolodge@gmail.com</p>
          <p>7312257</p>
        </div>

        <div className="footer-item">
          <h3>Where we are</h3>
          <div className="location-sect"></div>
          <p>link to location</p>
        </div>

        <div className="footer-item">
          <h3>Connect with us</h3>
          <div className="connect-sect">
            <img src="facebook.png" />
            <img src="tiktok1.png" />
            <img src="instagram.png" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
