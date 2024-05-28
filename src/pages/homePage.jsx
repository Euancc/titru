import React from 'react'
import './homePage.css'
import Navbar from '../components/jsx/navbar'
import Hero from '../components/jsx/hero'
import About from '../components/jsx/about'
import Footer from '../components/jsx/footer'
import Gallery from '../components/jsx/gallery'
import Contact from '../components/jsx/contact'

function Home() {
  return (
    <>
      <div className="back-g">
        <Navbar />
        <Hero />
        <About />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default Home
