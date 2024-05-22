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
          <div className="location-sect"></div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.7288072876677!2d157.38906809246652!3d-8.428271163550335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x68d4ab9555555515%3A0xb4f315e1c4bf7239!2sTitiru%20Eco%20Lodge!5e0!3m2!1sen!2ssb!4v1716402964185!5m2!1sen!2ssb"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
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
