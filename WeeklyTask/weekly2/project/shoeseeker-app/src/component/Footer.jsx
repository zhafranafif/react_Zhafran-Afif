/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Footer = () => {
  return (
      <>
          <footer className="footer bg-dark" id="footer">
          <div className="container">
            <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
              <div className="col">
                <div className="p-3 footer-main__content">
                  <a className="navbar-brand" href="#" style={{color: 'rgb(127, 121, 121)'}}>Shoe<span>.</span>seeker</a>
                  <p><i>Shoe.Seeker is the app that will make your life so much easier to find sneakers</i></p>
                  <div className="social-media">
                    <ul>
                      <li>
                        <a href="https://t.me/zhafranafif" target="_blank" rel='noreferrer'>
                          <i className="bi bi-telegram" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/zhafranafiff/" target="_blank" rel='noreferrer'>
                          <i className="bi bi-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/zhafranafiff" target="_blank" rel='noreferrer'>
                          <i className="bi bi-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/zhafranafif" target="_blank" rel='noreferrer'>
                          <i className="bi bi-github" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="p-3 footer-main__link">
                  <h4>Visit the Following Link Below!</h4>
                  <div className="link-pages">
                    <ul>
                      <li>
                        <a className="nav-link" href="#">Home</a>
                      </li>
                      <li>
                        <a className="nav-link" href="#">Product</a>
                      </li>
                      <li>
                        <a className="nav-link" href="#">Contact</a>
                      </li>
                      <li>
                        <a className="nav-link" href="#">About Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="p-3 footer-main__contact">
                  <h4>Our Contact is Down Below!</h4>
                  <div className="contact-link">
                    <h5>Cikarang</h5>
                    <h5>Jawa Barat, 17530</h5>
                    <h5>shoe.seeker@gmail.com</h5>
                    <h5><span>+62 812 8980 3547</span></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="copyright-footer">
          <p>© 2022 Shoe<span>.</span>seeker | All Right Reserved</p>
        </div>
      </>
  )
}

export default Footer