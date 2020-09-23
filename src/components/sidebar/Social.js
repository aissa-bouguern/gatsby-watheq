import React from 'react';

import facebook from '../../images/facebook.svg';
import twitter from '../../images/twitter.svg';
import github from '../../images/github.svg';
import linkedin from '../../images/linkedin.svg';
import quora from '../../images/quora.svg';
import rss from '../../images/rss.svg';

const Social = () => (
  <div className="soc-accounts main-border margin-3">
    <div className="soc-bar padding-1">
      <h4 className="no-margin in-block">حساباتي الاجتماعية</h4>
    </div>
    <div className="icon-container padding-1">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/watheq.show"
      >
        <img src={facebook} alt="Facebook" />
      </a>

      <a
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/watheq_show"
      >
        <img src={twitter} alt="Rwitter" />
      </a>

      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/watheqAlshowaiter"
      >
        <img src={github} alt="Github" />
      </a>

      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/watheq-show/"
      >
        <img src={linkedin} alt="Linkedin" />
      </a>

      <a
        target="_blank"
        rel="noreferrer"
        href="https://ar.quora.com/profile/Watheq-Alshowaiter"
      >
        <img src={quora} alt="Quora" />
      </a>

      <a target="_blank" rel="noreferrer" href="http://www.watheq.xyz/rss/">
        <img src={rss} alt="Rss" />
      </a>
    </div>
  </div>
);

export default Social;
