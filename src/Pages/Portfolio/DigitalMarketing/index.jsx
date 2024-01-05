import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

const digitalMarketing = () => {
  return (
    <div id='digital-marketing-container'>
      <div id='header-div'>
        <nav>
          <div className='nav-wrapper'>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/portfolio'>Portfolio</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <section id='about'>
        <div id='about-head'>
          <div className='profile'>
            <img src="../Assets/images/author2.png" alt="" />
          </div>
          <div className='about-head-content'>
            <h1>👋Hey! I am Navdeep Singh</h1>
            <p>
              I am a Full Stack Web Developer with a background in Digital Marketing.
            </p>
            <p>
              he/him
            </p>
          </div>
        </div>

        <section id='about-me'>
          <div className='about-me-content'>
            <div>
              <h2>👨‍💻about me</h2>
              <p>
                I have a passion for learning and sharing my knowledge with others as publicly as possible. Feel free to reach out if you're looking for a developer, have a question, or just want to connect. I have a passion for learning and sharing my knowledge with others as publicly as possible. Feel free 
              </p>
            </div>
            <div class='hire-me-div'>
              <div>
                <p>
                  I am currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <p>
                  I am currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <div className='btn-div'>
                  <a href="mailto:navdeepgambhir9023@gmail.com">
                    <button>
                      Hire Me
                    </button>
                  </a>

                  <Link to='/contact'>
                    <button>Get In Touch</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='work-experience'>
          <h2>👨‍💻Work Experience</h2>

          <div id='work-content'>
            <div>
              <h3>Full Stack Web Developer</h3>
              <p>
                I am currently working as a Full Stack Web Developer at <a href="https://www.linkedin.com/company/techvolt-software-pvt-ltd/">Techvolt Software Pvt Ltd</a>. I am working on ReactJS, NodeJS, ExpressJS, MongoDB, MySQL, and other technologies.
              </p>
            </div>
            <div>
              <h3>Digital Marketing Executive</h3>
              <p>
                I have worked as a Digital Marketing Executive at <a href="https://www.linkedin.com/company/techvolt-software-pvt-ltd/">Techvolt Software Pvt Ltd</a>. I have worked on SEO, SMO, SEM, SMM, and other digital marketing techniques.
              </p>
            </div>
            
          </div>
        </section>

      </section>
    </div>
  )
}

export default digitalMarketing