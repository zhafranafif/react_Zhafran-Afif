import React from 'react'
import HeroBanner from '../assets/img/24758592_shoe_store_02.jpg'

const Hero = () => {
  return (
      <>
        
        <div className="hero-container">
          <div className="hero-main">
            <h1>Apps That Will<br />
              Make Your Life So<br /> 
              Much Easier</h1>
            <h3>Product Delivery Is Easier Ever</h3>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ratione qui quaerat doloribus rem voluptas ex repudiandae similique, obcaecati quis!</h6>
            <div className="hero-button">
              <button className="apple"><i className="bi bi-apple" />Available On the<br />App Store</button>
              <button className="play"><i className="bi bi-google-play" />Available On the<br />Play Store</button>
            </div>
          </div>
          <div className="hero-img">
            <img src={HeroBanner} alt="hero" />
          </div>
        </div>
      
      </>
  )
}

export default Hero