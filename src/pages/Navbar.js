import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "../Navbar.css";
import logo from "../logo.svg";

function Navbar() {
  return (
    <nav>
      <ul>
        {/* <li>
          <Link to="/">Home</Link>
        </li> */}
        <li>
          <Link to="/story">Story</Link>
        </li>
        <li>
          <Link to="/schedule">Schedule</Link>
        </li>
        <li>
          <Link to="/stay">Where to Stay</Link>
        </li>
        <li>
          <Link to="/sightseeing">Sightseeing</Link>
        </li>
        <li>
          <Link to="/gift">Wedding Gift</Link>
        </li>
        <li>
          <Link to="/rsvp">RSVP</Link>
        </li>
        <li class="logo">
          <img src={logo} />
        </li>
        {/* <Link to="/"> */}
        {/* </Link> */}
      </ul>
    </nav>
  );
}

export default Navbar;
