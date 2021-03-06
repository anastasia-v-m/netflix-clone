import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../components/constants';
import dataDetails from './data';

import './filmDetailsPage.scss';

const acting = 'Acting';
const endpoint = 'https://api.themoviedb.org/3/';
const API_KEY = '224ce27b38a3805ecf6f6c36eb3ba9d0';

const contentType = sessionStorage.getItem('contentType');
let request = 'movie';

if (contentType) {
  request = contentType;
}

export interface IProdCompany {
  name: string;
}

export interface IMovieCreateResp {
  cast: Array<{ known_for_department: string; name: string }>;
}

export default function FilmDetailsCreateSpot(props: { productionCompanies: Array<IProdCompany>; movieID: string }): JSX.Element {
  const { productionCompanies, movieID } = props;
  const context = useContext(AppContext);
  const url = `${endpoint}/${request}/${movieID}/credits?api_key=${API_KEY}&language=${context.locale}`;

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
        <h2 className="film-details-sect-title">{dataDetails[context.locale].aboutFilmTitle}</h2>
      </div>
      <div className="film-details-create-category">
        <h4 className="film-details-sect-subtitle">{dataDetails[context.locale].prodTitle}</h4>
        <div className="film-details-companies-list-wrapper">
          {productionCompanies.map((item) => (
            <div key={item.name}>
              <span className="film-details-company">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="film-details-create-category">
        <h4 className="film-details-sect-subtitle">{dataDetails[context.locale].actorsTitle}</h4>
        <div className="film-details-actors-list-wrapper">
          <div className="film-details-actors-list">
            {actors.map((item) => (
              <span className="film-details-actor" key={item.name}>
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
