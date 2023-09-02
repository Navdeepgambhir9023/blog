import React from 'react'
import './styles.css'
import './responsive.css'

const AboutLanding = () => {
  return (
    <div>
      <div id="main-container">
        <div id="main-content">
          <div>
            <h1>
              Hello,<span> I am Navdeep</span>
            </h1>
          </div>
          <div className='para-div'>
            <p>
              I am a frontend developer with a passion for learning and building new things. 
            </p>
          </div>
          <div className='hire-btn'>
            <button>
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutLanding