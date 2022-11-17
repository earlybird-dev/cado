import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { oddsAPI } from './api';
import { Odd } from './OddType';

const SingleSportPage = (props: any) => {
  const { key } = useParams();

  return (
    <section className="container p-0">
      <div className="min-vh-100 bg-black rounded text-white p-3 mb-3">
        <h1>{key}</h1>
        {/* {loading && <div>Loading...</div>} */}
      </div>
    </section>
  );
};

export default SingleSportPage;
