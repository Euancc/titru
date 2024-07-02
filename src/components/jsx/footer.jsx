import React from 'react'
import { Link } from 'react-router-dom'
import '../css/footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-item">
          <h3>Contact us</h3>
          <div className="contact-sect"></div>
          <p>email: titiruecolodge@gmail.com</p>
          <p>ph: +777312257</p>
        </div>

        <div className="footer-item">
          <div className="location-sect"></div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.7288072876677!2d157.38906809246652!3d-8.428271163550335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x68d4ab9555555515%3A0xb4f315e1c4bf7239!2sTitiru%20Eco%20Lodge!5e0!3m2!1sen!2ssb!4v1716402964185!5m2!1sen!2ssb"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="footer-item">
          <h3>Connect with us</h3>
          <div className="connect-sect">
            <a
              href="https://www.facebook.com/Titiruecolodge2021/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="facebook.png" />
            </a>

            <a
              href="https://www.tiktok.com/@titiruecolodge677"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="tiktok1.png" />
            </a>

            <a
              href="https://www.instagram.com/titiru_eco_lodge/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="instagram.png" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
