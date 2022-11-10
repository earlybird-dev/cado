import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Home from './components/Home';
import SportsPage from './components/SportsPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sports" element={<SportsPage />} />
        <Route path="/sports/:id" element={<SportsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
