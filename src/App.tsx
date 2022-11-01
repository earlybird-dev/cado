import React from 'react';
import { sportsAPI } from './sports/sportsAPI';
import { Sport } from './sports/Sport';
import './App.css';

const sports = sportsAPI.get();

function App() {
  return (
    <div className="App">
      <h1>iBet - youBet, weBet</h1>
      <button>Show All Sports</button>
    </div>
  );
}

export default App;
