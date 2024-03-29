import React, { useEffect } from 'react';
import './infiniteScrollAnimation.css';
import { Link } from 'react-router-dom';

const InfiniteScrollAnimation = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll('.scroller');

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute('data-animated', true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector('.scroller__inner');
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute('aria-hidden', true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div>
      <h1 className='portfolio-heading'> Featured Projects </h1>
      <div className="scroller" data-speed="fast">
        <ul className="tag-list scroller__inner">
          <li><img src="https://navdeepgambhir9023.github.io/instagram/Images/27.jpg" alt="" /></li>
          <li><img src="https://navdeepgambhir9023.github.io/instagram/Images/28.jpg" alt="" /></li>
          <li><img src="https://navdeepgambhir9023.github.io/instagram/Images/29.jpg" alt="" /></li>
          <li><img src="https://navdeepgambhir9023.github.io/instagram/Images/30.jpg" alt="" /></li>
          <li><img src="https://navdeepgambhir9023.github.io/instagram/Images/31.jpg" alt="" /></li>
          <li><img src="https://navdeepgambhir9023.github.io/instagram/Images/32.jpg" alt="" /></li>
          <li><img src="https://navdeepgambhir9023.github.io/instagram/Images/33.jpg" alt="" /></li>
        </ul>
      </div>
      <div className='button-holder'>
        <Link to="/Portfolio/webProjects">
          <button>
            <h5>Go to my projects</h5>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default InfiniteScrollAnimation;
