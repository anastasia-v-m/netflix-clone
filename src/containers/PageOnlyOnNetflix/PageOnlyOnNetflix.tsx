import React from 'react';
import Button from '../../components/Button';
import MovieCard from '../../components/MovieCard';
import {
  pageHead,
  pageSubHead,
  pageEndHead,
  pageEndSubHead,
} from './data';
import data from './data.json';

import './pageOnlyOnNetflix.scss';

const TO_HOME = 'Присоединяйтесь';

export interface IOneMovieData {
  posterSrc: string,
  title: string,
  src: string,
}

export interface IMoviesData {
  movieType: string,
  items: Array<IOneMovieData>,
}

export default function PageOnlyOnNetflix(): JSX.Element {
  return (
    <main className="only-netflix-main">
      <section className="only-netflix-head-sect">
        <h1 className="only-netflix-head">{pageHead}</h1>
        <p className="only-netflix-subhead">{pageSubHead}</p>
      </section>
      <section className="movie-categories-container">
        {data.map((item) => (
          <div className="only-netflix-blur-container">
            <h2 className="movie-category-title">
              <span>{item.movieType}</span>
            </h2>
            <div className="movie-category-wrapper">
              <ul className="movie-category-list">
                {item.items.map((innerItem: IOneMovieData) => (
                  // <li className="only-netflix-movie-container">
                  //   <a className="only-netflix-movie" href={innerItem.src}>
                  //     <Image src={innerItem.posterSrc} alt="movie poster" className="only-netflix-movie-poster" />
                  //     <span className="only-netflix-movie-title">{innerItem.title}</span>
                  //   </a>
                  // </li>
                  <MovieCard
                    imgSrc={innerItem.posterSrc}
                    imgAlt="movie-poster"
                    linkAdr={innerItem.src}
                    cardTitle={innerItem.title}
                    liClass="only-netflix-movie-container"
                    aClass="only-netflix-movie"
                    imageClass="only-netflix-movie-poster"
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
          <h2 className="only-netflix-endhead">{pageEndHead}</h2>
          <p className="only-netflix-endsubhead">{pageEndSubHead}</p>
          <Button
            type="BTN_TYPE_SIMPLE"
            name="only-netflix-btn-to-home"
            href="/"
            content={TO_HOME}
          />
        </div>
      </section>
    </main>
  );
}
