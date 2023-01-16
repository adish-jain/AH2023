import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import NavbarDropdown from "./NavbarDropdown";
import "../App.css";

const Layout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
  window.addEventListener(
    "resize",
    () => {
      setIsMobile(window.innerWidth < 700);
    },
    []
  );
  return (
    <div class="page-container">
      {isMobile ? <NavbarDropdown /> : <Navbar />}
      <Outlet />
    </div>
  );
};

export default Layout;
