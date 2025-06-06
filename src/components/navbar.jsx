import React from "react";
import { MessageCircleMore } from "lucide-react";

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
          <MessageCircleMore />
        </a>
        <a href="#messages" className="navbar-link">
          <img src="./assets/profile.jpg" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
