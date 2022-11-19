import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { upcomingAPI } from '../sports/api';
import { Odd } from '../sports/OddType';
import Loading from './Loading';
import { CashOutIcon, InfoIcon, SGMIcon } from './SVGIcon';

const Bookmarker = (props: any) => {
  return (
    <div className="row bookmarker">
      <div className="col-12 bookmarker-info d-flex align-items-center justify-content-between">
        <div className="fddsvlq d-flex align-items-center">
          <div className="f1jkm6a5 d-flex align-items-center">
            <span className="f1ry9gvn me-1">
              <InfoIcon />
            </span>
          </div>
          <h3 className="f1i87hcv">Match Result</h3>
        </div>
        <div className="f1ngjn4m">
          <span></span>
          <span className="f1ry9gvn me-2">
            <SGMIcon />
          </span>

          <span className="f1ry9gvn">
            <CashOutIcon />
          </span>
        </div>
      </div>
      <div className="col">
        <button className="btn btn-dark">
          <span className="team">{props.home_team}</span>
          <span className="">
            <span className="d-block">
              <span className="odd">2.00</span>
            </span>
          </span>
        </button>
      </div>
      <div className="col">
        <button className="btn btn-dark">
          <span className="team">{props.away_team}</span>
          <span className="">
            <span className="d-block">
              <span className="odd">1.74</span>
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

const UpcomingOdd = (props: {
  sport_key: string;
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
        <div className="bookmarkers d-flex flex-column gap-2">
          <Bookmarker home_team={props.home_team} away_team={props.away_team} />
          <Bookmarker home_team={props.home_team} away_team={props.away_team} />
          <Bookmarker home_team={props.home_team} away_team={props.away_team} />
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
            <div className="bg-black rounded p-2 p-md-3 p-lg-4 ">
              <h1 className="text-white">Upcoming</h1>
              {loading && <Loading />}
              {upcoming.map((odd) => {
                return (
                  <UpcomingOdd
                    sport_key={odd.sport_key}
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
