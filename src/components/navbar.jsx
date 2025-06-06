import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-logo">Threads Clone</span>
      </div>
      <div className="navbar-center">
        <p>Beranda</p>
      </div>
      <div className="navbar-right">
        <a href="#profile" className="navbar-link">
          Profile
        </a>
        <a href="#messages" className="navbar-link">
          Messages
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
