import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { upcomingAPI } from '../sports/api';
import { Odd } from '../sports/OddType';
import Loading from './Loading';
import { UpcomingOdd } from './Upcoming';

const Home = (props: any) => {
  const [loading, setLoading] = useState(true);
  const [upcoming, setUpcoming] = useState<Odd[]>([]);

  useEffect(() => {
    async function getUpcoming() {
      setLoading(true);
      try {
        const data = await upcomingAPI.get();
        console.log(data);
        setUpcoming(data);
      } finally {
        setLoading(false);
      }
    }
    getUpcoming();
  }, []);

  return (
    <section className="stn-upcoming container p-0">
      <div className="min-vh-100 p-0 mb-3 ">
        <div className="row g-2">
          <div className="col-12 col-lg-8">
            <div className="bg-black rounded p-2 p-md-3 p-lg-4 ">
              <h1 className="text-white">Upcoming</h1>
              {loading && <Loading />}
              {upcoming.map((odd) => {
                return (
                  <UpcomingOdd
                    key={odd.id}
                    sport_key={odd.sport_key}
                    sport_title={odd.sport_title}
                    home_team={odd.home_team}
                    away_team={odd.away_team}
                    commence_time={odd.commence_time}
                    bookmakers={odd.bookmakers}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="bg-black rounded p-2 p-md-3 p-lg-4">
              <nav className="nav nav-justified">
                <a className="nav-link active p-0" aria-current="page" href="#">
                  <h1>NEXT RACING</h1>
                </a>
                <a className="nav-link p-0" href="#">
                  <h1>NEXT SPORTS</h1>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
