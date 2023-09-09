import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="about-navbar">
        <div className='about-nav-div'>
          <div className='about-nav-brand-div'>
            <Link to="/" className="about-navbar-brand">Navv</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
