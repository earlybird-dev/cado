import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { upcomingAPI } from '../sports/api';
import { Odd } from '../sports/OddType';
import Loading from './Loading';
import { LeftArrowIcon, RightArrowIcon, SportIcon } from './SVGIcon';
import { UpcomingSport } from './Upcoming';

const Home = (props: any) => {
  const [loading, setLoading] = useState(true);
  const [upcoming, setUpcoming] = useState<Odd[]>([]);
  const [sports, setSports] = useState<string[]>([
    'Basketball',
    'Soccer',
    'Tennis',
    'Cricket',
    'Boxing',
  ]);

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

  const SportFilter = () => {
    const ScrollRight = () => {
      const sportList: any = document.getElementById('sport-list');
      sportList.scrollLeft += 50;
    };
    const ScrollLeft = () => {
      const sportList: any = document.getElementById('sport-list');
      sportList.scrollLeft -= 50;
    };

    return (
      <div id="sport-filter" className=" mt-3 mb-4">
        <div className="d-flex flex-row">
          <button
            className="scroll-btn scroll-btn-left m-0 p-0"
            aria-label="Scroll left"
            data-test="leftArrowTabButton"
            onClick={ScrollLeft}
          >
            <span className="m-0 p-0">
              <LeftArrowIcon />
            </span>
          </button>
          <div
            id="sport-list"
            className="d-flex flex-row gap-1 mx-3 overflow-auto"
          >
            <button
              className="btn btn-dark sport-btn selected-sport "
              data-test="sportsFilterAllButton"
            >
              <span className="">All</span>
            </button>

            {sports.map((sport: any) => {
              return (
                <button
                  key={sport}
                  className="btn btn-dark sport-btn "
                  data-test="sportsFilter0Button"
                >
                  <span className="">
                    <span>
                      <span className="me-2">
                        <SportIcon />
                      </span>
                    </span>
                  </span>
                  <span className="">{sport}</span>
                </button>
              );
            })}
          </div>
          <button
            id="scroll-right-btn"
            className="scroll-btn scroll-btn-right m-0 p-0"
            aria-label="Scroll right"
            data-test="rightArrowTabButton"
            onClick={ScrollRight}
          >
            <span className="m-0 p-0">
              <RightArrowIcon />
            </span>
          </button>
        </div>
      </div>
    );
  };

  const FilterUpcoming = (props: any) => {
    const upcomingSports = props.upcoming.map((odd: any) => {
      return (
        <UpcomingSport
          key={odd.id}
          sport_key={odd.sport_key}
          sport_title={odd.sport_title}
          home_team={odd.home_team}
          away_team={odd.away_team}
          commence_time={odd.commence_time}
          bookmakers={odd.bookmakers}
        />
      );
    });

    return (
      <>
        <SportFilter />
        {upcomingSports}
      </>
    );
  };

  return (
    <section className="stn-upcoming container p-0">
      <div className="min-vh-100 p-0 mb-3 ">
        <div className="row g-2">
          <div id="upcoming" className="col-12 col-lg-8">
            <div className="bg-black rounded p-2 p-md-3 p-lg-4 ">
              <h1 className="text-white">Upcoming</h1>
              {loading && <Loading />}
              {upcoming && <FilterUpcoming upcoming={upcoming} />}
            </div>
          </div>
          <div id="next" className="col-12 col-lg-4">
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
