import React from 'react'
import AboutUs from '../component/AboutUs'
import ContactUs from '../component/ContactUs'
import Footer from '../component/Footer'
import Hero from '../component/Hero'
import Navbar from '../component/Navbar'

const WebPages = () => {
  return (
      <>
          <Navbar />
          <main>
                <section className="hero" id="hero">
                  <Hero/>
                </section>
                <section className='aboutus' id='aboutus'>
                <AboutUs/>
                </section>
                <section className="contact-us" id="contactUs">
                    <ContactUs/>  
                </section>
          </main>
          <Footer/>
      </>
  )
}

export default WebPages