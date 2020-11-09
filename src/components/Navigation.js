import React from "react";
import { Link } from "gatsby";
import "../styles/partials/_navigation.scss";

const Navigation = class extends React.Component {
  render() {
    return (
      <nav role="navigation" aria-label="Main" className="nav">
        <div className="container">
          <div className="logo" id="logo">
            <a href="/">
              <img src="/media/img/logos/logo--gatsby-starter-plus.png" alt="Gatsby Starter Plus" />
            </a>
          </div>
          <div className="mobile-menu__toggle">
            <div className="mobile-menu__toggle--mask">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="menu">
            <ul className="menu__main">
              <li className="has-submenu menu__item" id="menu__item--solutions">
                <span className="accent menu__item">Features</span>
                <div className="menu__submenu">
                  <div className="menu__submenu--wrapper">
                    <a href="/" className="submenu__item">
                      <img loading="lazy" width="40" height="40" src="/media/img/logos/logo--gatsby-starter-plus.png" alt="Strategy" />
                      <div className="submenu__item--content">
                        <p className="submenu__item--title">Strategy</p>
                        <p>Top business experts for digital transformation and data science.</p>
                      </div>
                    </a>
                    <a href="/design" className="submenu__item">
                      <img loading="lazy" width="40" height="40" src="/media/img/logos/logo--gatsby-starter-plus.png" alt="Design" />
                      <div className="submenu__item--content">
                        <p className="submenu__item--title">Design</p>
                        <p>Top business experts for digital transformation and data science.</p>
                      </div>
                    </a>
                    <a href="/design" className="submenu__item">
                      <img loading="lazy" width="40" height="40" src="/media/img/logos/logo--gatsby-starter-plus.png" alt="Design" />
                      <div className="submenu__item--content">
                        <p className="submenu__item--title">Design</p>
                        <p>Top business experts for digital transformation and data science.</p>
                      </div>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a href="/about" className="menu__item">
                  About
                </a>
              </li>
              <li>
                <a href="/blog" className="menu__item">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="menu__item">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navigation;
