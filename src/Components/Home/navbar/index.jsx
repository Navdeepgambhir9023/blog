import React from 'react'
import "./navbar.css"
import navbarOptions from './data.json'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div>

      <nav className="navbar blur navbar-expand-lg">
        <div className='nav-div'>
          <div className='nav-brand-div'>
            <a className="navbar-brand" href="/"> Navv </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navtoggle" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon">
                <img className='toggle-button-img' src="/Assets/images/Menu.png" alt="" />
              </span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navtoggle">
            <ul className='navbar-nav ml-auto' >
              {navbarOptions.map((option, index) => (
                <li className='nav-link' key={index} >
                  <Link to={option.path}>{option.optionName}</Link>
                </li>
              ))}
            </ul>
            <div className="subscribe-button-wrapper">
              <button className="subscribe-btn"> Subscribe </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default navbar