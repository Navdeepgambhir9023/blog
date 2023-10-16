import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import WebProjects from './Pages/Portfolio/webProjects';
import DigitalMarketing from './Pages/Portfolio/DigitalMarketing';
import { Route, Routes } from 'react-router-dom';
import CustomCursor from './Components/Home/CustomCursor';
import CustomCursorManager from './Components/Home/CustomCursor/context/manager';

const App = () => (
  <div className="container">
    <CustomCursorManager>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:name" element={<Blog />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Portfolio/webProjects" element={<WebProjects />} />
        <Route
          path="/Portfolio/DigitalMarketing"
          element={<DigitalMarketing />}
        />
      </Routes>
    </CustomCursorManager>
  </div>
);

export default App;
