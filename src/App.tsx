import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Home from './components/Home';
import SportsPage from './sports/SportsPage';
import SingleSportPage from './sports/SingleSportPage';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sports">
          <Route index element={<SportsPage />} />
          <Route path=":key" element={<SingleSportPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
