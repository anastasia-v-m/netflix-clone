import React, { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import dataInternal from './dataInternal.json';
import SearchIcon from '../../assets/SearchIcon';
import controller from '../TMDB/controller';

import './internalSearch.scss';

const options = {
  query: '',
  language: 'ru-RU',
  page: 1,
};

export default function InternalSearchSpot(): JSX.Element {
  const contentType = sessionStorage.getItem('contentType');
  let request = '/search/movie';
  if (contentType) {
    request = `/search/${contentType}`;
  }
  const [searchValue, setValue] = useState('');
  const navigator = useNavigate();

  const submitHandler = async (e: SyntheticEvent): Promise<void> => {
    e.preventDefault();
    options.query = searchValue;
    const url = controller(request, options);
    await axios
      .get(url)
      .then((res) => sessionStorage.setItem('searchMoviesData', JSON.stringify(res.data)))
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err))
      .then(() => navigator('/search'));
  };

  const changeHandler = (e: SyntheticEvent): void => {
    const { value } = e.target as HTMLInputElement;
    setValue(value);
    sessionStorage.setItem('searchMovieValue', value);
  };

  return (
    <div className="search-card">
      <div className="search-card-content">
        <h2>{dataInternal.title}</h2>
        <form className="search-spot" onSubmit={submitHandler}>
          <div className="search-spot_block">
            <SearchIcon />
            <input
              type="search"
              className="search-spot_input"
              placeholder="Search for Netflix titles and news"
              onChange={changeHandler}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
