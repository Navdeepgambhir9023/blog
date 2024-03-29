import React, { useState, useEffect, useMemo, useCallback } from 'react';
import './styles.css';
import './responsive.css';
import Scroll from "react-scroll-horizontal";
import { Link } from 'react-router-dom';

const AboutLanding = () => {
  const child = { width: `100vw`, height: `100%` };

  const [currentSection, setCurrentSection] = useState(0);
  const sectionIds = useMemo(() => ["main-container", "about-container"], []);

  const scrollToSection = useCallback((index) => {
    const sectionId = sectionIds[index];
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [sectionIds]);

  const handleHireButtonClick = () => {
    scrollToSection(1); // Scroll to the "about-container"
  };

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.deltaY > 0 && currentSection < sectionIds.length - 1) {
        setCurrentSection(currentSection + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        setCurrentSection(currentSection - 1);
      }
    };

    // Add event listener for wheel scroll
    window.addEventListener('wheel', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [currentSection, sectionIds]);

  // Handle scrolling when currentSection changes
  useEffect(() => {
    scrollToSection(currentSection);
  }, [currentSection, scrollToSection]);

  return (
    <div className="AboutLanding">
      <Scroll reverseScroll={true}>
        {sectionIds.map((sectionId, index) => (
          <div key={index} style={child} id={sectionId}>
            {index === 0 ? (
              <div id="main-content">
                <div>
                  <h1>
                    Hey,<span> I am Navdeep</span>
                  </h1>
                </div>
                <div className='para-div'>
                  <p>
                    Welcome to my Portfolio, Please scroll down or click the button below to know more about me.
                  </p>
                </div>
                <div className='hire-btn'>
                  <button onClick={handleHireButtonClick}>
                    Hire Me
                  </button>
                </div>
                <div className='scroll-img-div'>
                  <img src="Assets/images/scroller-img.svg" alt="scroll" />
                </div>
              </div>
            ) : (
              <div id="about-content">
                <div className='text'>
                  <h1>
                    Navdeep Singh Gambhir
                  </h1>
                  <p>
                    I am a self-taught frontend developer with a passion for innovation. With two years of experience in digital marketing, I bring a unique blend of skills to the table. Explore my work and let's collaborate on your next project for a brighter digital future.
                  </p>
                </div>
                <div className='img'>
                  <div>
                    <img src="Assets/images/Myimg.png" alt="" />
                  </div>
                </div>
              </div>
            )}
            <div id="redirect-btns">
              <div>
                <Link to="/Portfolio/webProjects">
                  <button>
                    Web Developer
                  </button>
                </Link>
              </div>
              <div>
                <Link to="/Portfolio/digitalMarketing">
                  <button>
                    Digital Marketer
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Scroll>
    </div>
  );
}

export default AboutLanding;
