import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "../App.css"

const Layout = () => {
  return (
    <div class="page-container">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
