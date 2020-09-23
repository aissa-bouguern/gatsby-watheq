import React from 'react';
import { Link } from 'gatsby';

const About = () => (
  <div className="soc-accounts main-border">
    <div className="soc-bar padding-1">
      <h4 className="no-margin in-block">صفحات أساسية</h4>
    </div>
    <div className="padding-1 primary_links">
      <Link to="/about" className="text-base ml-2">
        عني
      </Link>

      <Link to="/contact" className="text-base ml-2">
        تواصل معي
      </Link>

      <Link to="/privacy-policy" className="text-base ml-2">
        سياسة الخصوصية
      </Link>
    </div>
  </div>
);

export default About;
