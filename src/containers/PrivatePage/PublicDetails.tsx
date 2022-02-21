import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Image from '../../components/Image';
import Footer from '../../modules/Footer';
import LoginHeader from '../../modules/LoginHeader';

import internalData from './data.json';
import { AppContext, FOOTER_INTERNAL_PAGE_TYPE } from '../../components/constants';
import { IFilmDetailsResp } from '../FilmDetailsPage/FilmDetailsPage';
import Button from '../../components/Button';

import './publicDetails.scss';

const BTN_CONTENT = 'Log in for full access';
const endpoint = 'https://api.themoviedb.org/3/';
const API_KEY = '224ce27b38a3805ecf6f6c36eb3ba9d0';

const contentType = sessionStorage.getItem('contentType');
let request = 'movie';

if (contentType) {
  request = contentType;
}

export default function PublicDetails(props: { movieID: string }): JSX.Element {
  const context = useContext(AppContext);
  const { movieID } = props;
  const url = `${endpoint}/${request}/${movieID}?api_key=${API_KEY}&language=${context.locale}`;

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [gotData, setGotData] = useState({
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
    production_companies: [{ name: '' }],
  });

  const navigator = useNavigate();

  useEffect(() => {
    setIsLoaded(false);

    fetch(url)
      .then((response) => response.json())
      .then((data: IFilmDetailsResp) => {
        setGotData(data);
        setIsLoaded(true);
      })
      .catch((err) => {
        navigator('*');
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
      <LoginHeader />
      <section style={bkg}>
        <div className="blur-theme">
          <div className="btn-container">
            <div className="btn-position">
              <Button
                type="BTN_TYPE_SIMPLE"
                name="red-btn"
                nameContent="auth-button-content"
                content={BTN_CONTENT}
                linkAdr="/login-form"
                logBtn
              />
            </div>
            <div className="btn-line">.</div>
          </div>
          <div className="movie-precontainer">
            <div className="movie-container">
              <h1 className="movie-title">{gotData.title}</h1>
              <h3 className="movie-meta-info">{gotData.release_date}</h3>
              <div className="movie-description">
                <p>{gotData.overview}</p>
                <div className="movie-tags">
                  {genres.map((item) => (
                    <div className="movie-tags__tag" key={`tag-${item.name}`}>
                      <span className="movie-tags__tag-wrapper">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="pre-movie-poster">
              <div className="movie-poster">
                <Image src={imgUrl} alt={internalData.alt} className="movie-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer footerType={FOOTER_INTERNAL_PAGE_TYPE} />
    </>
  );
}
