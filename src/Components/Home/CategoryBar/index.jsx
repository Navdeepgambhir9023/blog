import React, { useState } from 'react';
import './categoryBar.css';

const CategoryBar = ({ onSelectCategory}) => {
  const [btnLeft, setBtnLeft] = useState(0);

  const leftClick = () => {
    setBtnLeft(0);
    onSelectCategory('All');
  };

  const middleClick1 = () => {
    setBtnLeft(170);
    onSelectCategory('Programming');
  };

  const middleClick2 = () => {
    setBtnLeft(340);
    onSelectCategory('Technology');
  };

  const middleClick3 = () => {
    setBtnLeft(510);
    onSelectCategory('Finance');
  };

  const rightClick = () => {
    setBtnLeft(680);
    onSelectCategory('Deals');
  };
  

  return (
    <div>
      <div className='category-container'>
        <div id='btn' style={{ left: `${btnLeft}px` }}></div>
        <button
          type='button'
          className='toggle-btn'
          onClick={leftClick}
        >
          All
        </button>
        <button
          type='button'
          className='toggle-btn'
          onClick={middleClick1}
        >
          Programming
        </button>
        <button
          type='button'
          className='toggle-btn'
          onClick={middleClick2}
        >
          Technology
        </button>
        <button
          type='button'
          className='toggle-btn'
          onClick={middleClick3}
        >
          Finance
        </button>
        <button
          type='button'
          className='toggle-btn'
          onClick={rightClick}
        >
          Deals
        </button>
      </div>
    </div>
  );
};

export default CategoryBar;
