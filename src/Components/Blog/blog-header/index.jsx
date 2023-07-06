import React from 'react'
import { Link } from 'react-router-dom'
import './blog-head.css'

const Blogheader = () => {
  return (
    <div>
      <div className='blog-head' >
        <div className='blog-nav-div'>
          <ul className='blog-nav-link'>
            <Link className='home-link' to='/'>
              <li>Go back</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Blogheader

