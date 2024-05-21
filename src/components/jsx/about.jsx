import React from 'react'
import '../css/about.css'

function About() {
  return (
    <>
      <section className="about-section">
        <hr width="90%" size="2" />
        <div className="about-container">
          <img className="about-img" src="titiru-welcome1.jpg" />
          <div className="about-text-container">
            <div className="about-text">
              <h1>Titiru Eco-Lodge</h1>
              <p className="subheader">'The undiscovered paradise'</p>
              <h2>Experience Solomon Island sustainable living...</h2>
              <p>
                We believe in eco-tourism where culture and environment is shown
                and preserved for tourists and the people. Enjoy island food
                like you’ve never tasted before. Become alive with an
                unforgettable island adventure.
                <br /> See and feel the Solomon Island and Rendova experience.
                Be part of island nature full of beauty, intrigue and wonder.{' '}
                <br />
                Adventure in Titiru is so many things: Visit islands, go diving,
                see birds, coral reefs and abundant fish and un-spoilt beauty of
                tiny islands and extinct volcanoes dotted through emerald
                lagoons. <br /> Titiru is the ancient protective spirit of
                Rendova. You will see culture and experience the ancient ways of
                island life through cultural demonstrations and visits to sacred
                sites.
              </p>
            </div>
          </div>
        </div>
        <hr width="90%" size="2" />
      </section>
    </>
  )
}

export default About
