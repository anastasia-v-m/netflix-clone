import React, { useState, useEffect } from 'react';
import MovieCard from '../../components/MovieCard';

import '../PageOnlyOnNetflix/pageOnlyOnNetflix.scss';
import './filmDetailsPage.scss';

const similarTitle = 'Похожие';
const endpoint = 'https://api.themoviedb.org/3/';
const API_KEY = '224ce27b38a3805ecf6f6c36eb3ba9d0';

const contentType = sessionStorage.getItem('contentType');
let request = 'movie';

if (contentType) {
  request = contentType;
}

export interface ISimilrMoviesResp {
  results: Array<{
    poster_path: string;
    id: number;
    title: string;
  }>;
  total_pages: number;
  total_results: number;
}

export default function FilmDetailsSimilarsSpot(props: { movieID: string }): JSX.Element {
  const { movieID } = props;
  const url = `${endpoint}/${request}/${movieID}/similar?api_key=${API_KEY}&language=en-US`;

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [gotData, setGotData] = useState({ results: [{ poster_path: '', title: '', id: 0 }] });

  useEffect(() => {
    setIsLoaded(false);

    fetch(url)
      .then((response) => response.json())
      .then((data: ISimilrMoviesResp) => {
        setGotData(data);
        setIsLoaded(true);
      })
      .catch((err) => {
        document.location.href = '/stub';
        setError(err);
      });
  }, []);

  if (error) {
    return <main>{`Ошибка - ${error}`}</main>;
  }

  if (!isLoaded) {
    return <main>Загрузка...</main>;
  }

  const navigateToDetails = (id: string): void => {
    sessionStorage.setItem('movieID', id);
  };

  return (
    <section className="film-details-sect">
      <div className="filn-details-trailer-titles">
        <h2 className="film-details-sect-title">{similarTitle}</h2>
      </div>
      <div>
        <div className="movie-category-wrapper">
          <ul className="film-details-similar-list">
            {gotData.results.map((item) => (
              <MovieCard
                imgSrc={`https://image.tmdb.org/t/p/original/${!item.poster_path ? 'http://placehold.it' : item.poster_path}`}
                imgAlt="movie-poster"
                linkAdr="/details"
                cardTitle={item.title}
                liClass="film-details-similar-container"
                aClass="film-details-similar-movie"
                imageClass="film-details-similar-poster img-load"
                spanClass="film-details-similar-title"
                key={item.id}
                id={item.id}
                navigate={navigateToDetails}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
