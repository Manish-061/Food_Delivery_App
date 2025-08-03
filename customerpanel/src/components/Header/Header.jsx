import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <h1 className="header-title">Crave it? Get it.</h1>
        <p className="header-subtitle">
          Explore a world of flavors from your favorite local spots to new
          culinary delights.
        </p>
        <Link to="/explore" className="btn-explore">
          View Menu
        </Link>
      </div>
    </header>
  );
};

export default Header;
