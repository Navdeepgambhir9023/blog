import React from 'react'
import './App.css'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import { Route, Routes } from 'react-router-dom'


const App = () => (
    <div className="container">
      <switch>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
      </switch>
    </div>
);
export default App;