import React from 'react';
import { Link } from 'gatsby';

import watheq from '../images/watheq.svg';

import config from '../siteConfig';

const Navigation = () => {
  return (
    <nav className="nav-bar">
      <div className="container">
        <div className="main-bar">
          <Link to="/" title={config.siteTitle}>
            <img src={watheq} alt={config.siteTitle} />
          </Link>
        </div>
        <div id="nav-items">
          {config.navLinks.map((nav, index) => (
            <Link to={nav.link} className="nav-link" key={index}>
              {nav.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
