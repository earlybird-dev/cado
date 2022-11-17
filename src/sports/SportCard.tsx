import React from 'react';
import { Sport } from './SportType';

const SportCard = (sport: Sport) => {
  return (
    <>
      <ol>
        <li>{sport.active}</li>
        <li>{sport.description}</li>
        <li>{sport.group}</li>
        <li>{sport.has_outrights}</li>
        <li>{sport.key}</li>
        <li>{sport.title}</li>
      </ol>
    </>
  );
};

export default SportCard;
