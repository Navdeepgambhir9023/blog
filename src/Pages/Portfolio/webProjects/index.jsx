import React from 'react'
import './styles.css'
import PortfolioLargeContainer from '../../../Components/Portfolio/containers/LargeContainers/LargeContainer1'
import PortfolioSmallContainer from '../../../Components/Portfolio/containers/smallContainer'
import PortfolioSideBar from '../../../Components/Portfolio/sideBar'
import PortfolioLargeContainer2 from '../../../Components/Portfolio/containers/LargeContainers/LargeContainer2'


const webProjects = () => {
  return (
    <div>
      <div id="webProjectHolder">
        <div id="webProjectSideBar">
          <PortfolioSideBar />
        </div>
        <div className="webContentHolder">
          <div>
            <h1 className='webContentHolderTitle'>Web Development</h1>
          </div>
          <div className="container-grid">
            <div className="content-box-1">
              <PortfolioSmallContainer />
            </div>
            <div className="content-box-2">
              <PortfolioLargeContainer />
            </div>
            <div className="content-box-2">
              <PortfolioLargeContainer2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default webProjects;
