import React from 'react'
import './home-footer.css'
import { Link } from 'react-router-dom'
import AuthorIcons from '../../Reuseable/socialIcon'

const HomeFooter = () => {
  return (
    <div>
      <hr />
      <div id='home-footer-container'>
        <div className='home-foot-content'>
          <div className='head-holder'>
            <h1>Subscribe Whatsletter</h1>
          </div>
          <div>
            {/* subscription form */}
            <form action="https://wa.me/918839232445?text=Subscribe!">
              <input placeholder='Enter Your Whatsapp Number' type="tel" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>


        {/* footer Nav */}

        <div id='foot-nav-div'>
          <div id='foot-nav'>
            <div>
              <ul>
                <Link to='/'> <li>Home</li> </Link>
                <Link to='/about'> <li>About</li> </Link>
                <Link to='/blogs'> <li>Blog</li> </Link>
                <Link to='/portfolio'> <li>Portfolio</li> </Link>
                <Link to='/contact'>  <li>Contact</li> </Link>
              </ul>
            </div>
            <div id='auth-icon-div'>
              <AuthorIcons />
            </div>
          </div>
        </div>

        <div>

        </div>
      </div>
    </div>
  )
}

export default HomeFooter