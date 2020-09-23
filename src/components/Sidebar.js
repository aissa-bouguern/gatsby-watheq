import React from 'react';

import Social from './sidebar/Social';
import About from './sidebar/About';
import Search from './sidebar/Search';
import Newsletter from './sidebar/Newsletter';
import Advertising from './sidebar/Advertising';

const Sidebar = () => (
  <>
    <About />
    <Search />
    <Social />
    <Newsletter />
    <Advertising />
  </>
);

export default Sidebar;
