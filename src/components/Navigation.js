import React from "react";
import { Link } from "gatsby";
import "../styles/partials/_navigation.scss";

const Navigation = props => {
  const { showButton } = props;

  return (
    <nav role="navigation" aria-label="Main" className="nav">
      <div className="container">
        <div className="menu__wrapper">
          <a href="/" className="logo">
            
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
