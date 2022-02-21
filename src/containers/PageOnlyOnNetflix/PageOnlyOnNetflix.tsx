import React, { useContext } from 'react';
import Button from '../../components/Button';
import MovieCard from '../../components/MovieCard';
import Header from '../../modules/Header/Header';
import dataDescription from './data';
import data from './data.json';
import { AppContext } from '../../components/constants';

import './pageOnlyOnNetflix.scss';

export interface IOneMovieData {
  posterSrc: string;
  title: string;
  src: string;
}

export interface IMoviesData {
  movieType: string;
  items: Array<IOneMovieData>;
}

export default function PageOnlyOnNetflix(): JSX.Element {
  const context = useContext(AppContext);
  return (
    <>
      <Header type="HEADER_404_PAGE" name="header-container" />
      <main className="only-netflix-main">
        <section className="only-netflix-head-sect">
          <h1 className="only-netflix-head">{dataDescription[context.locale].pageHead}</h1>
          <p className="only-netflix-subhead">{dataDescription[context.locale].pageSubHead}</p>
        </section>
        <section className="movie-categories-container">
          {data.map((item) => (
            <div className="only-netflix-blur-container">
              <div className="movie-category-wrapper">
                <ul className="movie-category-list">
                  {item.items.map((innerItem: IOneMovieData) => (
                    <MovieCard
                      imgSrc={innerItem.posterSrc}
                      imgAlt="movie-poster"
                      linkAdr={innerItem.src}
                      cardTitle={innerItem.title}
                      liClass="only-netflix-movie-container"
                      aClass="only-netflix-movie"
                      imageClass="only-netflix-movie-poster img-load"
                      spanClass="only-netflix-movie-title"
                    />
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>
        <section className="only-netflix-endhead-sect">
          <div className="only-netflix-endhead-container">
            <h2 className="only-netflix-endhead">{dataDescription[context.locale].pageEndHead}</h2>
            <p className="only-netflix-endsubhead">{dataDescription[context.locale].pageEndSubHead}</p>
            <Button
              type="BTN_TYPE_SIMPLE"
              name="only-netflix-btn-to-home"
              linkAdr="/"
              content={dataDescription[context.locale].toHomeButton}
            />
          </div>
        </section>
      </main>
    </>
  );
}
