import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import data from './data.json';

const PortfolioSideBar = () => {
  return (
    <div id="sidebar">
      <div className='sideBarTopContent'>
        <img src="../Assets/images/author2.png" alt="" />
        <h3>
          Navdeep Singh Gambhir
        </h3>
      </div>
      <div id='side-nav'>
        <ul>
          {data.sideBarOptions.map((option, index) => (
            <li key={index}>
              <Link to={option.path}>
                <button>
                  {option.navName}
                </button>
              </Link>

            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PortfolioSideBar;
