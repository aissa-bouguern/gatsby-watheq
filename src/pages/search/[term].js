import React from 'react';

import Search from '../../components/client/Search';

export default function (props) {
  const searchTerm = props.params['term'];
  return <Search searchTerm={searchTerm} />;
}
