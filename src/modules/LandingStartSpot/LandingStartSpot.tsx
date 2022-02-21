import React, { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { AppContext } from '../../components/constants';

import controller from '../TMDB/controller';

import SearchIcon from '../../assets/SearchIcon';

import data from './data';
import '../Header/header.scss';

const options = {
  query: '',
  language: 'ru-RU',
  page: 1,
};

const srcName =
  'https://assets.nflxext.com/ffe/siteui/vlv3/20876cab-b49d-4957-bbaf-906ceb1c05f1/370ebdc0-5135-43c5-8aa4-14c48dfc1bee/BY-ru-20220117-popsignuptwoweeks-perspective_alpha_website_large.jpg';

export default function LandingStartSpot(): JSX.Element {
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
    <AppContext.Consumer>
      {(context): JSX.Element => (
        <div className="start-card">
          <div className="start-card-background">
            <img className="start-card-img" src={srcName} alt="with promotional movie posters" />
            <div className="img-gradient" />
          </div>
          <div className="start-card-content">
            <h1>{data[context.locale].landingHeaderTitle}</h1>
            <h2>{data[context.locale].landingHeaderAnnotation}</h2>
            <form className="search-spot search-spot_landing-page" onSubmit={submitHandler}>
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
      )}
    </AppContext.Consumer>
  );
}
