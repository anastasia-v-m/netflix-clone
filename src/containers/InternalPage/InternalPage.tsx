import React, { useMemo, useState } from 'react';

import axios from 'axios';

import Footer from '../../modules/Footer';
import Header from '../../modules/Header/Header';
import InternalSearchSpot from '../../modules/InternalSearchSpot';
import FilterSpot from '../../modules/Filter';
import MovieCard from '../../components/MovieCard';

import { FOOTER_INTERNAL_PAGE_TYPE } from '../../components/constants';
import controller from '../../modules/TMDB/controller';

import './internalPage.scss';

export interface IMoviesData {
  results: [
    {
      backdrop_path: string;
      title: string;
      poster_path: string;
    },
  ];
}

const posterBaseURL = 'https://image.tmdb.org/t/p/original';
const defaultData = {
  results: [
    {
      backdrop_path: '/#',
      title: 'title',
      poster_path: '/#',
    },
  ],
};
const request = '/discover/movie';
const options = {
  language: 'ru-RU',
  page: 1,
};

export default function InternalPage(): JSX.Element {
  const [moviesData, setData] = useState(defaultData);
  const [isLoaded, setLoading] = useState(false);
  const getMovies = async (): Promise<void> => {
    const url = controller(request, options);
    await axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setLoading(true);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
        setLoading(false);
      });
  };

  useMemo(() => getMovies(), []);

  const showMore = (): void => {
    options.page += 1;
    getMovies();
  };

  // preloader need to layout
  if (!isLoaded) {
    return <main>Loading</main>;
  }

  return (
    <>
      <Header type="HEADER_INTERNAL_PAGE" name="header-container" />
      <InternalSearchSpot />
      <FilterSpot isOpened={false} />
      <div className="announce">
        <ul className="announce-content">
          {(moviesData as IMoviesData).results.map((item) => (
            <MovieCard
              imgSrc={posterBaseURL + item.poster_path}
              imgAlt="movie-poster"
              linkAdr="/#"
              cardTitle={item.title}
              liClass="card-container"
              aClass="card-item"
              imageClass="card-item__poster"
              spanClass="card-item__title"
              key={item.title}
            />
          ))}
        </ul>
        <button type="button" className="show-more-btn" onClick={showMore}>
          Show More
        </button>
      </div>
      <Footer footerType={FOOTER_INTERNAL_PAGE_TYPE} />
    </>
  );
}
