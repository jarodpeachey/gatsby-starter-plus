import React from "react";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import "../styles/partials/pages/_home.scss";
import { Row, Column } from "@react-tiny-grid/core";

const Home = () => {
  return (
    <>
      <SEO bodyClass="home" />

      <header>
        <Navigation />
      </header>

      <section className="hero">
        <div className="container">
          <h1 className="section-heading display">Gatsby Starter Plus</h1>
          <p className="section-description">
            A modern starter kit for Gatsby to give you a Gatsby site that scores 100s for performance, SEO and accessibility, right out of the box.
          </p>
          <p className="section-description">Perfect for bootstrapping a SaaS, blog or personal website.</p>
          <a href="/" className="btn">
            Download
          </a>
          <a href="/" className="btn outlined">
            Source Code
          </a>
        </div>
      </section>
      <section className="features">
        <div className="container">
          <h2 className="section-heading">Totally awesome. No configuration needed.</h2>
          <p className="section-description">
            Gatsby Starter Plus gives you support for SCSS, accessiblity, performance and SEO without any extra packages or plugins.
          </p>
          <Row spacing={[24]} breakpoints={[576, 769]}>
            <Column widths={[6, 4]}>
              <div className="feature">
                <img src="/media/img/icons/icon--100.png" alt="Speed icon" />
                <h3>Speed</h3>
                <p> Gatsby Starter Plus is built for speed; it removes any unneeded JS to make sure you get a 100 on Google PageSpeed.</p>
              </div>
            </Column>
            <Column widths={[6, 4]}>
              <div className="feature">
                <img src="/media/img/icons/icon--search.png" alt="Search icon" />
                <h3>SEO</h3>
                <p>
                  Gatsby Starter Plus is built for SEO; simply add an SEO image to each page and Gatsby Starter Plus will set up social cards, meta tags and
                  more.
                </p>
              </div>
            </Column>
            <Column widths={[6, 4]}>
              <div className="feature">
                <img src="/media/img/icons/icon--users.png" alt="Accessibility icon" />
                <h3>Accessibility</h3>
                <p> Gatsby Starter Plus is built for accessibility. The starter comes out-of-the-box passing all accessibility tests for your users.</p>
              </div>
            </Column>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Home;
