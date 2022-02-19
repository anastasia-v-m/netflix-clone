import React, { Fragment, useEffect, useState } from 'react';
import Button from '../../components/Button';
import FilmDetailsCreateSpot from './FilmDetailsCreateSpot';
import FilmDetailsSimilarsSpot from './FilmDetailsSimilarSpot';
import FilmDetailsTrailersSpot from './FilmDetailsTrailersSpot';
import Header from '../../modules/Header/Header';
import Footer from '../../modules/Footer';

import './filmDetailsPage.scss';

const releaseTitle = 'Released: ';
const ratingTitle = 'Rating: ';
const toHome = 'Присоединяйтесь';
const toHomeTitle = 'Смотрите сколько хотите.';

const endpoint = 'https://api.themoviedb.org/3/';
const API_KEY = '224ce27b38a3805ecf6f6c36eb3ba9d0';

export interface IFilmDetailsResp {
  original_title: string,
  title: string,
  poster_path: string,
  genres: Array<{ id: string, name: string }>,
  overview: string,
  release_date: string,
  vote_average: number,
  tagline: string,
  backdrop_path: string,
  adult: boolean,
  production_companies: Array<{ name: string }>
}

export default function FilmDetailsPage(props: { movieID: string }): JSX.Element {
  const { movieID } = props;
  const url = `${endpoint}/movie/${movieID}?api_key=${API_KEY}&language=en-US`;

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [gotData, setGotData] = useState(
    {
      original_title: '',
      title: '',
      poster_path: '',
      genres: [{ id: '', name: '' }],
      overview: '',
      release_date: '',
      vote_average: 0,
      tagline: '',
      backdrop_path: '',
      adult: false,
      production_companies: [{ name: '' }]
    }
  );

  useEffect(() => {
    setIsLoaded(false);

    fetch(url)
      .then((response) => response.json())
      .then((data: IFilmDetailsResp) => {
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

  const imgUrl = `https://image.tmdb.org/t/p/original/${gotData.poster_path}`;
  const bkg: React.CSSProperties = {
    background: `url(${imgUrl}) center bottom / contain no-repeat`,
  };

  const genres = [...gotData.genres];
  if (gotData.adult) {
    genres.push({ id: '18+', name: '18+' });
  }

  return (
    <>
      <Header type="HEADER_404_PAGE" name="page404-header black-bkg" />
      <main className="film-details-main">
        <section className="film-details-sect">
          <div className="film-details-basic-container">
            <div className="film-details-maininfo">
              <div className="film-title-info-container">
                <h1 className="film-title">{gotData.original_title}</h1>
                <p className="film-tags">
                    {genres.map((item) => (
                      <Fragment key={`d-${item.id}`}>
                        <span className="film-tags__tag-wrapper">{item.name}</span>
                        <span className="film-tags-delimitor"> | </span>
                      </Fragment>
                    ))}
                </p>
                <h4 className="film-about">{gotData.overview}</h4>
                <div className="film-details-people">
                  <p>
                    <span className="film-details-people__titles">{releaseTitle}</span>
                    {gotData.release_date}
                  </p>
                  <p>
                    <span className="film-details-people__titles">{ratingTitle}</span>
                      {gotData.vote_average}
                  </p>
                </div>
              </div>
            </div>
            <div className="film-details-poster-container">
              <div className="film-details-poster" style={bkg} />
            </div>
          </div>
          <div className="film-details-to-reg-container">
            <svg className="film-details-logo" viewBox="225 0 552 1000">
              <defs>
                <radialGradient r="75%" gradientTransform="matrix(.38 0 .5785 1 .02 0)">
                  <stop offset="60%" stopOpacity=".3" />
                  <stop offset="90%" stopOpacity=".05" />
                  <stop offset="100%" stopOpacity="0" />
                </radialGradient>
              </defs>
              <path d="M225 0v1000c60-8 138-14 198-17V0H225" fill="#b1060e" />
              <path d="M579 0v983c71 3 131 9 198 17V0H579" fill="#b1060e" />
              <path d="M225 0v200l198 600V557l151 426c76 3 136 9 203 17V800L579 200v240L423 0H225" fill="url(#64dd5834-188f-43c7-9b7e-27cb13c1ebd2-a)" />
              <path d="M225 0l349 983c76 3 136 9 203 17L423 0H225" fill="#e50914" />
            </svg>
            <div className="film-details-to-home-wrapper">
              <span className="film-details-to-home-title">{toHomeTitle}</span>
              <Button
                type="BTN_TYPE_SIMPLE"
                name="film-details-btn-to-home"
                href="/"
                content={toHome}
              />
            </div>
          </div>
        </section>
        <section className="film-description-sect">
          <div className="film-description-border" />
          <div className="film-description-container">{gotData.tagline === '' ? gotData.overview : gotData.tagline}</div>
          <div className="film-description-border" />
        </section>
        <FilmDetailsTrailersSpot filmName={gotData.title} />
        <FilmDetailsCreateSpot productionCompanies={gotData.production_companies} movieID={movieID} />
        <FilmDetailsSimilarsSpot movieID={movieID} />
      </main>
      <Footer />
    </>
  );
}
