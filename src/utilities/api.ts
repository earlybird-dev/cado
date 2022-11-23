import React from 'react';
import { Sport } from './SportType';
import { Odd } from './OddType';
import {
  SPORTS_TEST_DATA,
  UPCOMING_BY_SPORT_TEST_DATA,
  UPCOMING_TEST_DATA,
} from './data';

const url = 'https://api.the-odds-api.com/v4/sports';
const apiKey = '947a3cf2a3a6377b4c11c9d1b5b2a804';
const sportUrl = `${url}?apiKey=${apiKey}`;

function delay(ms: number) {
  return function(x: any): Promise<any> {
    return new Promise((resolve) => setTimeout(() => resolve(x), ms));
  };
}

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

    // return fetch('')
    //   .then(delay(600))
    //   .then(() => {
    //     return SPORTS_TEST_DATA;
    //   });
  },
};

const upcomingAPI = {
  get() {
    const upcomingUrl = `https://api.the-odds-api.com/v4/sports/upcoming/odds/?regions=au&markets=h2h&apiKey=${apiKey}`;
    return fetch(upcomingUrl)
      .then(checkStatus)
      .then(parseJSON)
      .then(convertToOddModel)
      .catch((error: TypeError) => {
        throw new Error(
          'There was an error retrieving the odds. Please try again.'
        );
      });

    // return fetch('')
    //   .then(delay(600))
    //   .then(() => {
    //     return UPCOMING_TEST_DATA;
    //   });
  },
};

const upcomingBySportAPI = {
  get(key: string | undefined) {
    const oddUrl = `https://api.the-odds-api.com/v4/sports/${key}/odds/?regions=au&markets=h2h&apiKey=${apiKey}`;
    return fetch(oddUrl)
      .then(checkStatus)
      .then(parseJSON)
      .then(convertToOddModel)
      .catch((error: TypeError) => {
        throw new Error(
          'There was an error retrieving the odds. Please try again.'
        );
      });

    // return fetch('')
    //   .then(delay(600))
    //   .then(() => {
    //     return UPCOMING_BY_SPORT_TEST_DATA;
    //   });
  },
};

export { sportsAPI, upcomingAPI, upcomingBySportAPI };
