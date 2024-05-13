import React from 'react'
import '../css/about.css'

function About() {
  return (
    <>
      <section className="about-section">
        <hr width="90%" size="2" />
        <div className="about-container">
          <img className="about-img" src="village-people.jpg" />
          <div className="about-text">
            <h1>Our Story</h1>
            <p>
              This is our story, It is a really good one. It is so good.
              Honestly this is such a great story. We have a really good story
              to tell, you will remember it so well and tell all of your
              children
            </p>
          </div>
        </div>
        <hr width="90%" size="2" />
      </section>
    </>
  )
}

export default About
