import React from 'react';
import { Link } from 'gatsby';

import search from '../../images/search.svg';

const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  return (
    <div className="search-container main-border margin-3">
      <form>
        <input
          className="text-base"
          type="text"
          placeholder="ابحث في المدونة..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Link to={`/search/${searchTerm}`}>
          <img src={search} alt="بحث" />
        </Link>
      </form>
    </div>
  );
};

export default Search;
