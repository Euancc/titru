import React from 'react'
import '../css/contact.css'

function Contact() {
  return (
    <>
      <section className="contact-sect" id="contact">
        <hr width="90%" size="2" />
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
              placeholder=""
              className="message-input"
              required
            />
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>

          <div className="contact-text">
            <h2>Get in touch</h2>
            <p>
              Contact us for a list of bungalows and prices, boat transfers, as
              well as all the activities that you can do while your here at
              Titiru
            </p>
            <br />
            <p>Hope to hear from you soon!</p>
          </div>
        </div>
        {/* <hr width="90%" size="2" /> */}
      </section>
    </>
  )
}

export default Contact
