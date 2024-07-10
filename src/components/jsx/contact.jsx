import React from 'react'
import '../css/contact.css'

function Contact() {
  const [result, setResult] = React.useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult('Sending....')
    const formData = new FormData(event.target)

    formData.append('access_key', 'YOUR_ACCESS_KEY_HERE')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setResult('Form Submitted Successfully')
      event.target.reset()
    } else {
      console.log('Error', data)
      setResult(data.message)
    }
  }
  return (
    <>
      <section className="contact-sect" id="contact">
        <hr width="90%" size="2" />
        <div className="contact-container">
          <form onSubmit={onSubmit} className="input-fields">
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
            <span>{result}</span>
          </form>

          <div className="contact-text">
            <h2>Get in touch</h2>
            <hr />
            <p>
              Contact us for a list of bungalow options, prices of boat
              transfers, as well as all the activities that you can do while
              your here at Titiru or for any other enquiries.
            </p>
            <br />
            <p className="finish-line">Hope to hear from you soon!</p>
          </div>
        </div>
        {/* <hr width="90%" size="2" /> */}
      </section>
    </>
  )
}

export default Contact
