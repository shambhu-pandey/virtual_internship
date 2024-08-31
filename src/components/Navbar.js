import React from "react";
import "./Navbar.scss";

const Navbar = ({ onGetUsers }) => {
  return (
    <nav className="navbar">
      <h1 className="brand">TECHHUB</h1>
      <button className="get-users-button" onClick={onGetUsers}>
        Get Users
      </button>
    </nav>
  );
};

export default Navbar;

