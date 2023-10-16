import React from 'react';
import './styles.css';

const PortfolioSmallContainer = () => {
  const smallContainerData = [
    {
      id: 1,
      title: "19",
      description: "Completed Projects",
    },
    {
      id: 2,
      title: "05",
      description: "Ongoing Projects",
    },
    {
      id: 3,
      title: "14",
      description: "Satisfied Clients",
    },
    {
      id: 4,
      title: "2+",
      description: "Years Of Development Experience",
    },
  ];

  return (
    <div>
      <div id='portfoliosmallcontainer'>
        {smallContainerData.map((item) => (
          <div className='contentHolder' key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSmallContainer;
