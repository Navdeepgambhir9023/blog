import React from 'react'
import './App.css'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import About from './Pages/About'
import { Route, Routes } from 'react-router-dom'
import CustomCursor from './Components/Home/CustomCursor'
import CustomCursorManager from './Components/Home/CustomCursor/context/manager'


const App = () => (
    <div className="container">
    <CustomCursorManager>

      <CustomCursor />
      <switch>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/blog/:name" element={<Blog />} />
          <Route path="/About" element={<About />} />
          <Route path="/" element={<About />} />
        </Routes>
      </switch>

    </CustomCursorManager>
    </div>
);
export default App;