import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sport } from '../utilities/SportType';
import { sportsAPI } from '../utilities/api';
import Loading from '../components/Loading';

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
    <section className="container p-0">
      <div className="min-vh-100 bg-black rounded text-white p-3 mb-3">
        <h1>Sports</h1>
        {loading && <Loading />}
        <ul>
          {sports.map((sport) => (
            <li key={sport.key}>
              <Link to={'/sports/' + sport.key}>{sport.description}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Home;
