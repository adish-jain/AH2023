import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "../NavbarDropdown.css";
import logo from "../logo.svg";
import { useLocation } from "react-router-dom";

function NavbarDropdown() {
  const [opened, toggleOpen] = useState(false);
  const location = useLocation();
  return (
    <div className={"NavbarDropdown"}>
      {/* <Logo goToIndex={props.goToIndex} /> */}
      <div className={"dropdown"}>
        <button onClick={(e) => toggleOpen(!opened)} className={"dropbtn"}>
          ☰
        </button>
        <div className={"dropdownContent"}>
          {opened ? (
              <ul>
                 <li>
                  <Link
                    to="/rsvp"
                    class={location.pathname === "/rsvp" ? "active" : ""}
                  >
                    RSVP
                  </Link>
                </li>
                <li>
                  <Link
                    to="/events"
                    class={location.pathname === "/events" ? "active" : ""}
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    to="/stay"
                    class={location.pathname === "/stay" ? "active" : ""}
                  >
                    Where to Stay
                  </Link>
                </li>
                <li>
                  <Link
                    to="/around"
                    class={location.pathname === "/around" ? "active" : ""}
                  >
                    Getting around
                  </Link>
                </li>          
                <li>
                  <Link
                    to="/sightseeing"
                    class={location.pathname === "/sightseeing" ? "active" : ""}
                  >
                    Sightseeing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/story"
                    class={location.pathname === "/story" ? "active" : ""}
                  >
                    Our Story
                  </Link>
                </li>  
              </ul>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavbarDropdown;
