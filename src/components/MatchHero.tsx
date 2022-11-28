import React from 'react';
import { DownArrowIcon, PromoIcon, VSIcon } from './SVGIcon';

interface Carousel {
  active: boolean | undefined;
  src: string;
  title: string;
  body: string;
}

function CarouselItem(props: Carousel) {
  return (
    <div className={props.active ? 'carousel-item active' : 'carousel-item'}>
      <img src={props.src} className="d-block w-100" alt="..."></img>
      <div className="carousel-caption container p-4">
        <div className="row gx-5">
          <div className="col-12 col-lg-6">
            <h3>{props.title}</h3>
            <p>{props.body}</p>
          </div>
          <div className="col-12 col-lg-6 d-flex align-items-center">
            <div className="row flex-fill">
              <div className="col">
                <a className="btn" href="/promos">
                  <span className="promo-icon me-1">
                    <PromoIcon />
                  </span>
                  See all promos
                </a>
              </div>
              <div className="col ">
                <a className="btn" href="/signup">
                  Sign up today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const MatchHero = (props: any) => {
  return (
    <div className="f1jrlq65 f1dhpam1">
      <section className="stn-match-hero d-flex align-items-center mb-3 mb-md-5 p-3 p-md-5 position-relative">
        <div className="match-img">
          <div className=" d-flex flex-column">
            <div className="w-100 h-100 position-absolute overflow-hidden top-0 start-0">
              <img
                className="w-100 h-100"
                src="https://pointsbet.com.au/assets/img/sports/banners/aussie-rules.banner.md.jpg"
                alt="aussie-rules"
              />
            </div>
          </div>
        </div>
        <div className="match-info d-block my-0 mx-auto w-100 position-relative">
          <div className=" d-flex flex-column">
            <div className="d-flex flex-column justify-content-center align-items-center text-white gap-4">
              <div className="f1w6cbtc">
                <div className="f9wge8m d-flex flex-column justify-content-center align-items-center position-relative px-5">
                  <div className="match-time">2:40PM</div>
                  <div className="match-day">
                    <span>Today</span>
                  </div>
                  <div className="d-inline-block position-absolute end-0">
                    <button className="d-flex border-0 align-items-center justify-content-center rounded-circle">
                      <span className="f92nxf7 f1ry9gvn">
                        <DownArrowIcon />
                      </span>
                    </button>
                    <div className="f1fqtcfr"></div>
                  </div>
                </div>
              </div>
              <div className="w-100">
                <div className="w-100">
                  <span></span>
                  <div className="w-100">
                    <h2 className="match-teams d-flex align-items-center justify-content-center w-100">
                      <span className="match-team d-flex justify-content-end align-items-center">
                        Brisbane Lions Women
                      </span>
                      <span className="f1m8uqsy">
                        <span className="fnlae7i f1ry9gvn mx-2 mx-md-3">
                          <VSIcon size={50} />
                        </span>
                      </span>
                      <span className="match-team d-flex justify-content-start align-items-center">
                        Melbourne Women
                      </span>
                    </h2>
                  </div>
                  <span></span>
                </div>
              </div>
              <span className="fvyrjs fwa3sdj f1908qkc">3h 13m</span>
              <div className="f11z1geh f1mxy1xb">
                <span className=""></span>
                <span className=""></span>
                <span className=""></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MatchHero;
