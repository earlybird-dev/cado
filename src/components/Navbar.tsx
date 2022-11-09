import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props: any) => {
  return (
    <section className="stn-navbar">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            <span>i</span>Bet
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
            </ul>
          </div>
          <form className="d-flex">
            <button className="btn navbar-btn text-white me-3">Log In</button>
            <button className="btn btn-primary navbar-btn text-white">
              Sign Up
            </button>
          </form>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
