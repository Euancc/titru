import React from 'react'
import './homePage.css'
import Navbar from '../components/jsx/navbar'
import Hero from '../components/jsx/hero'
import About from '../components/jsx/about'
import Footer from '../components/jsx/footer'
import Gallery from '../components/jsx/gallery'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Footer />
    </>
  )
}

export default Home
