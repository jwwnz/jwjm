import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href=".">
          JAMES+JIMIN
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav center">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
            </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/venue">
                The Venue
            </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href=".">
                Korean Apps
            </a>
            </li>
          </ul>
      </div>


    </nav>
  );
}
