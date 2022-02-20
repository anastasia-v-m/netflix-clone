import React, { useMemo, useState } from 'react';

import axios from 'axios';

import Footer from '../../modules/Footer';
import Header from '../../modules/Header/Header';
import InternalSearchSpot from '../../modules/InternalSearchSpot';
import FilterSpot from '../../modules/Filter';
import MovieCard from '../../components/MovieCard';

import controller from '../../modules/TMDB/controller';

import './internalPage.scss';

export interface IMoviesData {
  results: [
    {
      backdrop_path: string;
      title: string;
      poster_path: string;
      include_adult: boolean;
      id: number;
    },
  ];
}

const posterBaseURL = 'https://image.tmdb.org/t/p/original';

let request = '/discover/movie';
const options = {
  language: 'en',
  page: 1,
  with_original_language: 'en',
  'vote_count.gte': 0,
  'vote_average.gte': 0,
};

export default function InternalPage(): JSX.Element {
  const [moviesData, setData] = useState(Array);
  const [isLoaded, setLoading] = useState(false);
  const getMovies = async (opt?: any): Promise<void> => {
    const filtersOptions = JSON.parse(sessionStorage.getItem('filtersOptions') as string);
    if (opt) {
      request = opt.requestURL;
      options.page = opt.page;
      options.language = opt.language;
      options.with_original_language = opt.with_original_language;
      options['vote_count.gte'] = opt['vote_count.gte'];
      options['vote_average.gte'] = opt['vote_average.gte'];
    }

    if (filtersOptions && !opt) {
      request = filtersOptions.requestURL;
      options.language = filtersOptions.language;
      options.with_original_language = filtersOptions.with_original_language;
      options['vote_count.gte'] = filtersOptions['vote_count.gte'];
      options['vote_average.gte'] = filtersOptions['vote_average.gte'];
    }

    const url = controller(request, options);

    await axios
      .get(url)
      .then((res) => {
        const data = (res.data as IMoviesData).results.filter((elem) => elem.poster_path !== null);
        sessionStorage.setItem('totalPages', JSON.stringify(res.data.total_pages));
        setData(data);
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
    const totalPages = Number(sessionStorage.getItem('totalPages') as string);

    if (options.page < totalPages) {
      options.page += 1;
      sessionStorage.setItem('currentPage', JSON.stringify(options.page));
      getMovies();
    }
  };

  const navigateToDetails = (id: string): void => {
    sessionStorage.setItem('movieID', id);
  };

  // preloader need to layout
  if (!isLoaded) {
    return <main>Loading</main>;
  }

  return (
    <>
      <Header type="HEADER_INTERNAL_PAGE" name="header-container" />
      <InternalSearchSpot />
      <FilterSpot isOpened={false} getMovies={getMovies} />
      <div className="announce">
        <ul className="announce-content">
          {moviesData.map((item: any) => (
            <MovieCard
              imgSrc={posterBaseURL + item.poster_path}
              imgAlt="movie-poster"
              linkAdr="/details"
              cardTitle={item.title}
              liClass="card-container"
              aClass="card-item"
              imageClass="card-item__poster"
              spanClass="card-item__title"
              key={item.title}
              id={item.id}
              navigate={navigateToDetails}
            />
          ))}
        </ul>
        <button type="button" className="show-more-btn" onClick={showMore}>
          Show More
        </button>
      </div>
      <Footer />
    </>
  );
}
