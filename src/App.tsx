import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Home from './components/Home';
import SportsPage from './sports/SportsPage';
import SingleSportPage from './sports/SingleSportPage';
import NotFound from './components/NotFound';
import MatchHero from './components/MatchHero';
import SingleMatchPage from './sports/SingleMatchPage';

function MainLayout(props: any) {
  return (
    <>
      <Navbar />
      <Hero />
      {props.content}
    </>
  );
}

function MatchLayout(props: any) {
  return (
    <>
      <Navbar />
      <SingleMatchPage />
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout content={<Home />} />} />
        <Route path="/sports">
          <Route index element={<MainLayout content={<SportsPage />} />} />
          <Route
            path=":key"
            element={<MainLayout content={<SingleSportPage />} />}
          />
        </Route>
        <Route path="/match/:key" element={<MatchLayout />} />

        <Route path="*" element={<MainLayout content={<NotFound />} />} />
      </Routes>
    </>
  );
}

export default App;
