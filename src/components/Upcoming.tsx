import React from 'react';
import {
  CashOutIcon,
  InfoIcon,
  RightArrowIcon,
  SGMIcon,
  SportIcon,
} from './SVGIcon';

const Outcomes = (props: any) => {
  let outcomesHTML;
  if (props.outcomes.length === 2) {
    outcomesHTML = props.outcomes.map(
      (outcome: { name: string; price: number }) => {
        return (
          <div key={outcome.name} className="col p-1 m-0 mb-2 ">
            <button className="btn btn-dark">
              <span className="team">{outcome.name}</span>
              <span className="">
                <span className="d-block">
                  <span className="odd">{outcome.price}</span>
                </span>
              </span>
            </button>
          </div>
        );
      }
    );
  } else if (props.outcomes.length === 3) {
    const allOutcomes = props.outcomes.slice(0, 2); // Take 2 first outcomes
    allOutcomes.splice(1, 0, props.outcomes[2]); // Insert Draw outcome to the outcome list
    outcomesHTML = allOutcomes.map(
      (outcome: { name: string; price: number }) => {
        return (
          <div key={outcome.name} className="col p-1 m-0 mb-2 ">
            <button className="btn btn-dark">
              <span className="team">{outcome.name}</span>
              <span className="">
                <span className="d-block">
                  <span className="odd">{outcome.price}</span>
                </span>
              </span>
            </button>
          </div>
        );
      }
    );
  }
  return outcomesHTML;
};

const Bookmaker = (props: any) => {
  if (props.markets) {
    return (
      <div className="row bookmaker mb-4">
        {props.markets.map((market: any) => {
          return (
            <div key={market.key} className="row">
              <div className="col-12 bookmaker-info d-flex align-items-center justify-content-between mb-1">
                <div className=" d-flex align-items-center">
                  <div className=" d-flex align-items-center">
                    <span className=" me-2">
                      <InfoIcon />
                    </span>
                  </div>
                  <h3 className="">
                    {props.title} <span className="dot"></span> {market.key}
                  </h3>
                </div>
                <div className="">
                  <span></span>
                  <span className=" me-2">
                    <SGMIcon />
                  </span>

                  <span className="">
                    <CashOutIcon />
                  </span>
                </div>
              </div>
              <Outcomes outcomes={market.outcomes} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return <></>;
  }
};

const UpcomingOdd = (props: {
  sport_key: string;
  sport_title: string;
  commence_time: string;
  home_team: string;
  away_team: string;
  bookmakers: {
    key: string;
    title: string;
    last_update: string;
    markets: { key: string; outcome: { name: string; price: number }[] }[];
  }[];
}) => {
  const date = props.commence_time.slice(0, 10);
  const time = props.commence_time.slice(11, 16);

  return (
    <div className="">
      <div className="match border-bottom p-2 mb-3">
        <div className="match-info mb-3">
          <div className="row">
            <a
              className=" d-flex justify-content-between"
              data-test="sportsPage5EventHeaderLink"
              href="#"
            >
              <div className="col-9 d-flex gap-2 justify-content-start align-items-center">
                <div className="">
                  <div className="">
                    <span className="">
                      <SportIcon />
                    </span>
                  </div>
                </div>
                <div className="">
                  <p className="match-name">
                    {props.home_team} v {props.away_team}
                  </p>
                  <span className="sport-title">
                    {props.sport_title}
                    <span className="dot"></span>
                    <span>{date}</span>, <span>{time}</span>
                  </span>
                </div>
              </div>
              <div className="col-3 d-flex gap-2 justify-content-end align-items-center">
                <div className="">
                  <div className="">
                    <span className="">2h 35m</span>
                  </div>
                  <span className="">{props.bookmakers.length} Markets</span>
                </div>
                <div className="">
                  <span className="">
                    <RightArrowIcon />
                  </span>
                </div>
              </div>
              <div className=""></div>
            </a>
          </div>
        </div>
        <div className="bookmakers d-flex flex-column gap-2">
          {props.bookmakers &&
            props.bookmakers.map((bookmaker) => {
              return (
                <Bookmaker
                  key={bookmaker.key}
                  title={bookmaker.title}
                  markets={bookmaker.markets}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export { Bookmaker, UpcomingOdd };
