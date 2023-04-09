import React from 'react'
import './landing.css'

const landing = () => {
  return (
    <div>
      <div className='landing-div'>
        <div className='content-div'>
          <div className='content-grid'>
            <div className='content'>
              <h1>Welcome to Navv</h1>
              <p>
                Hey! I am Navdeep, welcome to my personal blog! Here, I share my thoughts, experiences, and ideas on various topics that interest me. Join me on this journey and explore the world through my eyes.
              </p>
              <div className="read-button-wrapper">
                <a href="/subscription" className="read-button">Start Reading</a>
              </div>
            </div>
            <div className='image-div'>
              <img src="Assets/images/landing-svg.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default landing