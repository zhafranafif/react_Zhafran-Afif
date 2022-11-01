/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Logo from '../assets/img/28484177_7431864.svg'

const Navbar = () => {
  return (
      <>
          <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Shoe<span>.</span>seeker</a>
            <img src={Logo} alt="logo" className="logo" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse  justify-content-lg-end me-lg-5" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" style={{color: 'black'}} href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" style={{color: 'black'}} href="#">Product</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" style={{color: 'black'}} href="#">Contact</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" style={{color: 'black'}} href="#">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" style={{color: 'black'}} href="#">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      </>
  )
}

export default Navbar