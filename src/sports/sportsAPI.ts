import React from 'react';
import { Sport } from './Sport';

const url = `https://api.the-odds-api.com/v4/sports?apiKey=0a2c23d47f334a59643c37c212f8ac83`;

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

function convertToSportModel(data: any[]): Sport[] {
  let sports: Sport[] = data.map((sport) => new Sport(sport));
  return sports;
}

const sportsAPI = {
  get() {
    return fetch(url)
      .then(checkStatus)
      .then((response) => response.json())
      .then((data) => convertToSportModel(data))
      .catch((error) => console.log(error));
  },
};

export { sportsAPI };
