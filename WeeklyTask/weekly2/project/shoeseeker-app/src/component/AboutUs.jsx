import React from 'react'
import AboutUsBanner from '../assets/img/The Chosen 1’s 🏆🚨.png'

const AboutUs = () => {
  return (
      <>
          <h2>About Us</h2>
          <div className='about-us__container'>
              <div className='about-us__mainquote'>
                  <div className='quote'>
                      <p>“Sneakerhead. Sneaker addict. Sneaker slave. Call it what you want; there's a certain thrill, like an itch only shoes can scratch, that sneakerheads feel for their passion.”</p>
                  </div>
                  <div className='description'>
                  <p>Shoe seeker is a website where we can buy, search, and also design the shoes we want</p>
                  </div>
              </div>
              <div className='about-us__image'>
                  <img src={AboutUsBanner} alt="about us banner" />
              </div>
          </div>
      </>
  )
}

export default AboutUs