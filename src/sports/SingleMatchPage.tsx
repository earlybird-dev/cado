import React, { useEffect, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import MatchHero from '../components/MatchHero';
import { upcomingBySportAPI } from '../utilities/api';
import { Odd } from '../utilities/OddType';

const SingleMatchPage = (props: any) => {
  const { key } = useParams();
  const location = useLocation();
  console.log(location);
  const {
    sport_key,
    sport_title,
    commence_time,
    home_team,
    away_team,
  } = location.state;

  return (
    <>
      <MatchHero home_team={home_team} away_team={away_team} />
      <section className="container p-0">
        <div className="min-vh-100 bg-black rounded text-white p-3 mb-3">
          <h1 className="text-center">
            Match - {home_team} v {away_team}
          </h1>
          <h2 className="text-center">Time: {commence_time}</h2>

          {/* {loading && <div>Loading...</div>} */}
        </div>
      </section>
    </>
  );
};

export default SingleMatchPage;
