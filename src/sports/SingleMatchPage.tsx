import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { oddsAPI } from '../utilities/api';
import { Odd } from '../utilities/OddType';

const SingleMatchPage = (props: any) => {
  // const { key } = useParams();

  return (
    <section className="container p-0">
      <div className="min-vh-100 bg-black rounded text-white p-3 mb-3">
        <h1>Match</h1>
        {/* {loading && <div>Loading...</div>} */}
      </div>
    </section>
  );
};

export default SingleMatchPage;
