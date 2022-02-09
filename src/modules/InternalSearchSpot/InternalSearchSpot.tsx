import React from 'react';

import dataInternal from './dataInternal.json';
import SearchIcon from '../../assets/SearchIcon';

import './internalSearch.scss';

export default function InternalSearchSpot(): JSX.Element {
  return (
    <div className="search-card">
      <div className="search-card-content">
        <h2>{dataInternal.title}</h2>
        <form className="search-spot">
          <div className="search-spot_block">
            <SearchIcon />
            <input type="search" className="search-spot_input" placeholder="Search for Netflix titles and news" />
          </div>
        </form>
      </div>
    </div>
  );
}
