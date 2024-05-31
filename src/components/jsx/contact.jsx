import React from 'react'
import '../css/contact.css'

function Contact() {
  return (
    <>
      <section className="contact-sect">
        <div className="contact-container">
          <form className="input-fields">
            <div className="input-title">Name</div>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="contact-inputs"
              required
            />
            <div className="input-title">Email</div>
            <input
              type="text"
              name="email"
              placeholder="Your email"
              className="contact-inputs"
              required
            />
            <div className="input-title">Message</div>
            <textarea
              name="message"
              placeholder="Your Message"
              className="contact-inputs"
              required
            />
            <button type="submit">Submit</button>
          </form>

          <div className="contact-text"></div>
        </div>
      </section>
    </>
  )
}

export default Contact
