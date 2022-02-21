import React, { useContext, useMemo, useState } from 'react';
import axios from 'axios';
import Footer from '../../modules/Footer';
import Header from '../../modules/Header/Header';
import MovieCard from '../../components/MovieCard';
import { AppContext } from '../../components/constants';
import controller from '../../modules/TMDB/controller';
import { IMoviesData } from '../InternalPage/InternalPage';

import './termsUsePage.scss';

const posterBaseURL = 'https://image.tmdb.org/t/p/original';

export default function ComingSoonPage(): JSX.Element {
  const context = useContext(AppContext);
  let request = '/movie/upcoming';
  const options = {
    language: context.locale,
    page: 1,
    with_original_language: 'en',
  };
  const [moviesData, setData] = useState(Array);
  const [isLoaded, setLoading] = useState(false);
  const getMovies = async (opt?: any): Promise<void> => {
    if (opt) {
      request = opt.requestURL;
      options.page = opt.page;
      options.language = opt.language;
      options.with_original_language = opt.with_original_language;
    }
    const url = controller(request, options);
    await axios
      .get(url)
      .then((res) => {
        const data = (res.data as IMoviesData).results.filter(
          (elem) => elem.poster_path !== null && +elem.release_date.slice(0, 4) >= 2021,
        );
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

  const navigateToDetails = (id: string): void => {
    sessionStorage.setItem('movieID', id);
  };

  // preloader need to layout
  if (!isLoaded) {
    return <main>Loading</main>;
  }
  return (
    <>
      <Header type="HEADER_404_PAGE" name="header-container" />
      <main className="inform-main">
        <ul className="announce-content">
          {moviesData.map((item: any) => (
            <MovieCard
              imgSrc={posterBaseURL + item.poster_path}
              imgAlt="movie-poster"
              linkAdr="/details"
              cardTitle={item.title}
              liClass="card-container"
              aClass="card-item"
              imageClass="card-item__poster img-load"
              spanClass="card-item__title"
              key={item.title}
              id={item.id}
              navigate={navigateToDetails}
            />
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
