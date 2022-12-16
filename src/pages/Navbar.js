import React, { useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "../Navbar.css";
import logo from "../logo.svg";
import { useLocation } from 'react-router-dom'


function Navbar() {
  const location = useLocation();

  return (
    <nav>
      <ul>
        {/* <li>
          <Link to="/">Home</Link>
        </li> */}
        <li>
          <Link to="/story" class={location.pathname === "/story" ? "active" : ""}>
            Our Story
          </Link>
        </li>
        <li>
          <Link to="/events" class={location.pathname === "/events" ? "active" : ""}>Events</Link>
        </li>
        <li>
          <Link to="/around" class={location.pathname === "/around" ? "active" : ""}>Getting around</Link>
        </li>
        <li>
          <Link to="/stay" class={location.pathname === "/stay" ? "active" : ""}>Where to Stay</Link>
        </li>
        <li>
          <Link to="/sightseeing" class={location.pathname === "/sightseeing" ? "active" : ""}>Sightseeing</Link>
        </li>
        <li>
          <Link to="/rsvp" class={location.pathname === "/rsvp" ? "active" : ""}>RSVP</Link>
        </li>
        <li class="logo">
          <Link to="/">
            <img src={logo} />
          </Link>
        </li>
        {/* <Link to="/"> */}
        {/* </Link> */}
      </ul>
    </nav>
  );
}

export default Navbar;
