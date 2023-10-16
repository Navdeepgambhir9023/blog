import React from 'react'
import './styles.css'

const portfolio = () => {
  return (
    <div>
      <div id='redirector'>
        <button>
          <a href="/Portfolio/webProjects">Web Projects</a>
        </button>
        <button>
          <a href="/Portfolio/DigitalMarketing">Digital Marketing</a>
        </button>
      </div>
    </div>
  )
}

export default portfolio