import React from 'react'
import './socialIcon.css'

const AuthorIcons = () => {
  return (
    <div>
      <div className='social-holder'>
        <a href="https://github.com/Navdeepgambhir9023">
          <img src="../Assets/images/twitter.png" alt="Author" />
        </a>
        <a href="https://www.linkedin.com/in/navdeepgambhir/">
          <img src="../Assets/images/linkedin.png" alt="Author" />
        </a>
        <a href="https://www.instagram.com/navdeep.gambhir/">
          <img src="../Assets/images/instagram.png" alt="Author" />
        </a>
        <a href="https://wa.me/918839232445?text=Hey!">
          <img src="../Assets/images/whatsapp.png" alt="Author" />
        </a>
      </div>
    </div>
  )
}

export default AuthorIcons