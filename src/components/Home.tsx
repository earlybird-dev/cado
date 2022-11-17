import React, { useEffect, useState } from 'react';
import { upcomingAPI } from '../sports/api';
import { Odd } from '../sports/Odd';

const UpcomingOdd = (props: {
  sport_title: string;
  home_team: string;
  away_team: string;
}) => {
  return (
    <div className="">
      <div className="match border-bottom p-2 mb-3">
        <div className="">
          <div className="">
            <h5 className="sport-name">{props.sport_title}</h5>
          </div>
        </div>
        <div className="row">
          <div className="col p-1">
            <button className="">
              <span className="team">{props.home_team}</span>
              <span className="">
                <span className="d-block">
                  <span className="odd">2.00</span>
                </span>
              </span>
            </button>
          </div>
          <div className="col p-1">
            <button className="">
              <span className="team">{props.away_team}</span>
              <span className="">
                <span className="d-block">
                  <span className="odd">1.74</span>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

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
            <div className="bg-black rounded p-2 p-md-3 p-lg-4">
              <h1 className="text-white">Upcoming</h1>
              {loading && <div>Loading...</div>}
              {upcoming.map((odd) => {
                return (
                  <UpcomingOdd
                    sport_title={odd.sport_title}
                    home_team={odd.home_team}
                    away_team={odd.away_team}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="bg-black rounded p-2 p-md-3 p-lg-4">
              <h1>Header Placeholder</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
