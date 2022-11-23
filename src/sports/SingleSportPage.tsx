import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import { LeftArrowIcon, RightArrowIcon } from '../components/SVGIcon';
import { UpcomingSport } from '../components/Upcoming';
import { upcomingBySportAPI } from '../utilities/api';
import { Odd } from '../utilities/OddType';

const SingleSportPage = (props: any) => {
  const { key } = useParams();
  const [loading, setLoading] = useState(true);
  const [upcoming, setUpcoming] = useState<Odd[]>([]);
  const [sport, setSport] = useState('');

  useEffect(() => {
    async function getUpcoming() {
      setLoading(true);
      try {
        const data = await upcomingBySportAPI.get(key);
        console.log(data);
        setUpcoming(data);
        setSport(data[0].sport_title);
      } finally {
        setLoading(false);
      }
    }
    getUpcoming();
  }, []);

  const FilterUpcoming = (props: any) => {
    const upcomingSports = props.upcoming.map((odd: any) => {
      return (
        <UpcomingSport
          key={odd.id}
          id={odd.id}
          sport_key={odd.sport_key}
          sport_title={odd.sport_title}
          home_team={odd.home_team}
          away_team={odd.away_team}
          commence_time={odd.commence_time}
          bookmakers={odd.bookmakers}
        />
      );
    });

    return <>{upcomingSports}</>;
  };

  return (
    <section className="stn-upcoming container p-0">
      <div className="min-vh-100 p-0 mb-3 ">
        <div className="row g-2">
          <div className="col-12 col-lg-8">
            <div className="bg-black rounded p-2 p-md-3 p-lg-4 ">
              <div className="">
                <h1 className="text-white sport-header w-100 position-relative">
                  <button className="btn ms-2 p-0 position-absolute start-0">
                    <span className="m-0 p-0">
                      <Link to={'/'}>
                        <LeftArrowIcon size={20} />
                      </Link>
                    </span>
                  </button>
                  <span>{sport}</span>
                </h1>
              </div>
              {loading ? <Loading /> : <FilterUpcoming upcoming={upcoming} />}
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

export default SingleSportPage;
