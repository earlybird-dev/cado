import React from 'react';
import { Sport } from './Sport';
import { Odd } from './Odd';

const url = 'https://api.the-odds-api.com/v4/sports';
const apiKey = '0a2c23d47f334a59643c37c212f8ac83';
const sportUrl = `${url}?apiKey=${apiKey}`;

function checkStatus(response: any) {
  if (response.ok) {
    return response;
  } else {
    const htmlErrorInfo = {
      status: response.status,
      statusText: response.statusText,
      url: response.url,
    };
    console.log(`HTML Error Info: ${htmlErrorInfo}`);
    throw new Error(htmlErrorInfo.status);
  }
}

function parseJSON(response: Response) {
  return response.json();
}

function convertToSportModel(data: any[]): Sport[] {
  let sports: Sport[] = data.map((sport) => new Sport(sport));
  return sports;
}
function convertToOddModel(data: any[]): Odd[] {
  let odds: Odd[] = data.map((odd) => new Odd(odd));
  return odds;
}

const sportsAPI = {
  get() {
    return fetch(sportUrl)
      .then(checkStatus)
      .then(parseJSON)
      .then(convertToSportModel)
      .catch((error: TypeError) => {
        throw new Error(
          'There was an error retrieving the sports. Please try again.'
        );
      });
  },
};

const oddsAPI = {
  get() {
    const oddUrl = `https://api.the-odds-api.com/v4/sports/upcoming/odds/?regions=us&markets=h2h&apiKey=0a2c23d47f334a59643c37c212f8ac83`;
    return fetch(oddUrl)
      .then(checkStatus)
      .then(parseJSON)
      .then(convertToOddModel)
      .catch((error: TypeError) => {
        throw new Error(
          'There was an error retrieving the odds. Please try again.'
        );
      });
  },
};

const upcomingAPI = {
  get() {
    const upcomingUrl = `https://api.the-odds-api.com/v4/sports/upcoming/odds/?regions=us&markets=h2h&apiKey=0a2c23d47f334a59643c37c212f8ac83`;
    return fetch(upcomingUrl)
      .then(checkStatus)
      .then(parseJSON)
      .then(convertToOddModel)
      .catch((error: TypeError) => {
        throw new Error(
          'There was an error retrieving the odds. Please try again.'
        );
      });
  },
};

export { sportsAPI, oddsAPI, upcomingAPI };
