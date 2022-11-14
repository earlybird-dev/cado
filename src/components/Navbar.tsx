import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props: any) => {
  return (
    <section className="stn-navbar">
      <nav className="navbar navbar-expand-lg bg-black">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/#">
            <span>i</span>Bet
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="w-100 d-flex flex-column flex-lg-row justify-content-between">
              <div className="d-flex me-3">
                <div className="navbar-nav">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                  <Link className="nav-link" to="/sports">
                    Sports
                  </Link>
                </div>
              </div>
              <div className="d-flex flex-column flex-lg-row my-4 my-lg-0">
                <button className="btn btn-outline-primary navbar-btn text-white me-0 me-lg-3 mb-2 mb-lg-0">
                  Log In
                </button>
                <button className="btn btn-primary navbar-btn text-white">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
