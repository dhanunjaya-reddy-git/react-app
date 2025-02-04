import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">Products</NavLink>
      <NavLink to="/admin">ProductsAdmin</NavLink>
    </nav>
  );
};

export default Navbar;
