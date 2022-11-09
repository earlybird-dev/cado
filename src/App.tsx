import React from 'react';
import Navbar from './components/Navbar';
import SportsPage from './components/SportsPage';
import Home from './components/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sports" element={<SportsPage />} />
        <Route path="/sports/:id" element={<SportsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
