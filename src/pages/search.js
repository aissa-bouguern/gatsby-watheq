import React from 'react';
import { Router } from '@reach/router';

import Search from '../components/client/Search';

export default function () {
  return (
    <Router basepath="/search">
      <Search path="/" />
      <Search path="/:searchTerm" />
    </Router>
  );
}
