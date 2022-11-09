import React from 'react';
import { useState, useEffect } from 'react';
import { Sport } from '../sports/Sport';
import { sportsAPI } from '../sports/sportsAPI';

const Home = (props: any) => {
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
    <section className="container">
      <div className="bg-lightgray text-white">
        <h1>Sports</h1>
        {loading && <div>Loading...</div>}
        <ul>
          {sports.map((sport) => (
            <li key={sport.key}>{sport.description}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Home;
