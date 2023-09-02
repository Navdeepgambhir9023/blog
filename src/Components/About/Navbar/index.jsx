import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="about-navbar">
        <div className='about-nav-div'>
          <div className='about-nav-brand-div'>
            <Link className="about-navbar-brand" href="/"> Navv </Link>
            {/* <div className="subscribe-button-wrapper"> */}
              {/* <button className="subscribe-btn"> Subscribe </button> 
            {/* </div> */}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar