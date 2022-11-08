import React, { useState, useEffect } from 'react';
import { sportsAPI } from './sports/sportsAPI';
import { Sport } from './sports/Sport';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [sports, setSports] = useState<Sport[]>([]);

  useEffect(() => {
    async function getSports() {
      setLoading(true);
      try {
        const data = await sportsAPI.get();
        console.log(data);
        setSports(data);
      } finally {
        setLoading(false);
      }
    }
    getSports();
  }, []);

  return (
    <div className="App">
      <h1>iBet - youBet, weBet</h1>
      {loading && <div>Loading...</div>}
      <ol>
        {sports.map((sport) => (
          <li key={sport.key}>{sport.description}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
