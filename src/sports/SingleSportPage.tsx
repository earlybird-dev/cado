import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { oddsAPI } from './api';
import { Odd } from './Odd';

const SingleSportPage = (props: any) => {
  const { key } = useParams();
  const [loading, setLoading] = useState(true);
  const [odds, setOdds] = useState<Odd[]>([]);
  [];

  useEffect(() => {
    async function getOdds() {
      setLoading(true);
      try {
        const data = await oddsAPI.get();
        console.log('odds', data);
        setOdds(data);
      } finally {
        setLoading(false);
      }
    }
    getOdds();
  }, []);

  return (
    <section className="container p-0">
      <div className="min-vh-100 bg-black rounded text-white p-3 mb-3">
        <h1>{key}</h1>
        {loading && <div>Loading...</div>}
        <ul>
          {odds.map((odd) => {
            return (
              <li key={odd.id}>
                <Link to={'/sports/' + odd.sport_key}>
                  Away Team: {odd.away_team}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SingleSportPage;
