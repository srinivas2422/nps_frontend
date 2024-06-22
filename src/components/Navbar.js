// import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = ({ isAuthenticated, handleSignOut }) => {
  return (
    <header>
      <nav
        className="navbar navbar-expand-md bg-secondary"
        aria-label="Thirteenth navbar example"
      >
        <div className="container-fluid">
          <Link className="navbar-brand col-lg-2 me-0" to="/">
            Nex Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample11"
            aria-controls="navbarsExample11"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse d-lg-flex"
            id="navbarsExample11"
          >
            <ul className="navbar-nav col-lg-6 justify-content-lg-center mx-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/rent">
                  Rent
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/buy">
                  Buy
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sell">
                  Sell
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="d-lg-flex col-lg-3 justify-content-lg-end">
              {isAuthenticated ? (
                <>
                  <div className="flex-shrink-0 dropdown ">
                    <Link
                      href="#"
                      className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="https://github.com/mdo.png"
                        alt="mdo"
                        width={32}
                        height={32}
                        className="rounded-circle"
                      />
                    </Link>
                    <ul
                      className="dropdown-menu text-small shadow dropdown-menu-lg-end"
                    >
                      
                      <li>
                        <Link className="dropdown-item" href="#">
                          Profile
                        </Link>
                      </li>
                      
                      <li>
                        <Link
                          className="dropdown-item"
                          href="#"
                          onClick={handleSignOut}
                        >
                          Sign out
                        </Link>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <Link
                    className="btn btn-primary mx-1"
                    to="/signin"
                    role="button"
                  >
                    Sign In
                  </Link>
                  <Link
                    className="btn btn-primary mx-1"
                    to="/signup"
                    role="button"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
