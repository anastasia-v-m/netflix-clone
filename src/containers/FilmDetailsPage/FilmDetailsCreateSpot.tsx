import React, { useState, useEffect } from 'react';

import './filmDetailsPage.scss';

const aboutFilmTitle = 'Подробнее';
const actorsTitle = 'В ролях';
const prodTitle = 'Произведено';
const acting = 'Acting';
const endpoint = 'https://api.themoviedb.org/3/';
const API_KEY = '224ce27b38a3805ecf6f6c36eb3ba9d0';

export interface IProdCompany {
  name: string
}

export interface IMovieCreateResp {
  cast: Array<{ known_for_department: string, name: string }>
}

export default function FilmDetailsCreateSpot(props: { productionCompanies: Array<IProdCompany>, movieID: string }): JSX.Element {
  const { productionCompanies, movieID } = props;

  const url = `${endpoint}/movie/${movieID}/credits?api_key=${API_KEY}&language=en-US`;
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [gotData, setgotData] = useState({ cast: [{ known_for_department: '', name: '' }] });

  useEffect(() => {
    setIsLoaded(false);

    fetch(url)
      .then((response) => response.json())
      .then((data: IMovieCreateResp) => {
        setgotData(data);
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

  const actors = gotData.cast.filter((item) => item.known_for_department === acting);
  if (actors.length > 20) {
    actors.length = 20;
  }

  return (
    <section className="film-details-sect">
      <div className="filn-details-trailer-titles">
        <h2 className="film-details-sect-title">{aboutFilmTitle}</h2>
      </div>
      <div className="film-details-create-category">
        <h4 className="film-details-sect-subtitle">{prodTitle}</h4>
        <div className="film-details-companies-list-wrapper">
          {productionCompanies.map((item) => (
            <div key={item.name}>
              <span className="film-details-company">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="film-details-create-category">
        <h4 className="film-details-sect-subtitle">{actorsTitle}</h4>
        <div className="film-details-actors-list-wrapper">
          <div className="film-details-actors-list">
            {actors.map((item) => (
              <span className="film-details-actor" key={item.name}>{item.name}</span>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
}
