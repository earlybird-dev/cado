import React from 'react';
import { useParams } from 'react-router-dom';

const SingleSportPage = (props: any) => {
  const { key } = useParams();

  return (
    <section className="container">
      <div className="min-vh-100 bg-black rounded text-white p-3 mb-3">
        <h1>Single Sport Page</h1>
        <p>{key}</p>
      </div>
    </section>
  );
};

export default SingleSportPage;
