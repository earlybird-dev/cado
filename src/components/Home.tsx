import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { upcomingAPI } from '../sports/api';
import { Odd } from '../sports/OddType';
import Loading from './Loading';
import {
  CashOutIcon,
  InfoIcon,
  RightArrowIcon,
  SGMIcon,
  SportIcon,
} from './SVGIcon';

const Bookmaker = (props: any) => {
  if (props.markets) {
    return (
      <div className="row bookmaker mb-4">
        {props.markets.map((market: any) => {
          return (
            <>
              <div className="col-12 bookmaker-info d-flex align-items-center justify-content-between mb-1">
                <div className=" d-flex align-items-center">
                  <div className=" d-flex align-items-center">
                    <span className=" me-2">
                      <InfoIcon />
                    </span>
                  </div>
                  <h3 className="">
                    {props.title} <span className="dot"></span> {market.key}
                  </h3>
                </div>
                <div className="">
                  <span></span>
                  <span className=" me-2">
                    <SGMIcon />
                  </span>

                  <span className="">
                    <CashOutIcon />
                  </span>
                </div>
              </div>
              {market.outcomes.map(
                (outcome: { name: string; price: number }) => {
                  return (
                    <>
                      <div className="col p-1 m-0 mb-2 ">
                        <button className="btn btn-dark">
                          <span className="team">{outcome.name}</span>
                          <span className="">
                            <span className="d-block">
                              <span className="odd">{outcome.price}</span>
                            </span>
                          </span>
                        </button>
                      </div>
                    </>
                  );
                }
              )}
            </>
          );
        })}
      </div>
    );
  } else {
    return <></>;
  }
};

const UpcomingOdd = (props: {
  sport_key: string;
  sport_title: string;
  home_team: string;
  away_team: string;
  bookmakers: {
    key: string;
    title: string;
    last_update: string;
    markets: { key: string; outcome: { name: string; price: number }[] }[];
  }[];
}) => {
  return (
    <div className="">
      <div className="match border-bottom p-2 mb-3">
        <div className="match-info mb-3">
          <div className="row">
            <a
              className=" d-flex justify-content-between"
              data-test="sportsPage5EventHeaderLink"
              href="#"
            >
              <div className="col-9 d-flex gap-2 justify-content-start align-items-center">
                <div className="">
                  <div className="">
                    <span className="">
                      <SportIcon />
                    </span>
                  </div>
                </div>
                <div className="">
                  <p className="match-name">
                    {props.home_team} v {props.away_team}
                  </p>
                  <span className="sport-title">
                    {props.sport_title}
                    <span className="dot"></span>
                    <span>Today</span>, <span>3:10pm</span>
                  </span>
                </div>
              </div>
              <div className="col-3 d-flex gap-2 justify-content-end align-items-center">
                <div className="">
                  <div className="">
                    <span className="">2h 35m</span>
                  </div>
                  <span className="">59 Markets</span>
                </div>
                <div className="">
                  <span className="">
                    <RightArrowIcon />
                  </span>
                </div>
              </div>
              <div className=""></div>
            </a>
          </div>
        </div>
        <div className="bookmakers d-flex flex-column gap-2">
          {props.bookmakers &&
            props.bookmakers.map((bookmaker) => {
              return (
                <Bookmaker
                  title={bookmaker.title}
                  markets={bookmaker.markets}
                />
              );
            })}
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
