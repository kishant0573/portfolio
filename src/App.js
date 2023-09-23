
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Projects from './Projects'; // Create this component

import AnimatedText from './AnimatedText';
import Code from './Code';
import Navbar from './Navbar';
import Content from './Content';
import Home from './Home';
function App() {
  return (
    <Router>
      <div>
        
      
        <Routes>
        <Route path="/" element={ <AnimatedText /> } />
        <Route path='/home' element ={<Home />} />
          <Route path="/projects" element={<Projects />} />
          {/* Add more routes for other pages */}
          <Route path='/code' element={<Code />}/>
          <Route path='/content' element={<Content />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App