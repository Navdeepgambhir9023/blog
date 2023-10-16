import React from 'react';
import '../styles.css';

const PortfolioLargeContainer = () => {
  const largeContainerData = [
    {
      id: 1, // Add an id property
      title: "Your Ultimate Frontend Developer",
      description: "Eliminate the hassle of dealing with developers lacking design sensibility, and trust in someone who possesses the expertise, passion, and vision to realize your ideas as you've imagined them.",
    },
    
  ];

  return (
    <div>
      <div id='portfoliolargecontainer'>
        {largeContainerData.map((item) => (
          <div className='largecontentHolder' key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PortfolioLargeContainer