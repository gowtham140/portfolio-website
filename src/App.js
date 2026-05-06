import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Navigation from './Routers/Navigation';
import './styles/animations.css';

const App = () => {


   useEffect(() => {
    const script = document.createElement("script");
    script.src = "//code.tidio.co/pxdwj2gpszgo8jcimw21yvodl410mbbg.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        {/* Sidebar Navigation */}
        <Navigation />

        {/* Main Content */}
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
