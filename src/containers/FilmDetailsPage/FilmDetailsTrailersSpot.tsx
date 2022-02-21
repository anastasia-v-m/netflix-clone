import React, { useEffect, useState } from 'react';
import { AppContext } from '../../components/constants';
import dataDetails from './data';

import './filmDetailsPage.scss';

const endpoint = 'https://api.themoviedb.org/3/';
const API_KEY = '224ce27b38a3805ecf6f6c36eb3ba9d0';

const contentType = sessionStorage.getItem('contentType');
let request = 'movie';

if (contentType) {
  request = contentType;
}

export interface ITrailerVideoProp {
  results: Array<{ key: string; name: string }>;
}

function getBkg(imgKey: string): React.CSSProperties {
  const bkg: React.CSSProperties = {
    background: `url(//img.youtube.com/vi/${imgKey}/hqdefault.jpg) left bottom / contain no-repeat`,
  };
  return bkg;
}

const playerCommand = (command: string): void => {
  const trailerPayerEl = document.querySelector('#trailer-player') as HTMLIFrameElement;
  if (trailerPayerEl) {
    const iframe = trailerPayerEl.contentWindow;
    if (iframe) {
      iframe.postMessage(`{"event":"command","func":"${command}","args":""}`, '*');
    }
  }
};

class TrailerPlayer extends React.Component<ITrailerVideoProp, { adr: string; shown: boolean }> {
  constructor(props: ITrailerVideoProp) {
    super(props);
    this.state = {
      adr: '',
      shown: true,
    };
  }

  openBtnToogle = (): void => {
    const modalElem = document.querySelector('.film-details-modal');

    if (modalElem) {
      const { shown } = this.state;
      if (shown) {
        modalElem.classList.remove('film-non-active');
      } else {
        modalElem.classList.add('film-non-active');
      }
    }
  };

  handleClick = (curKey: string): void => {
    this.setState((prevState) => ({
      shown: !prevState.shown,
      adr: curKey,
    }));
    this.openBtnToogle();

    playerCommand('playVideo');
  };

  closeModal(): void {
    this.setState((prevState) => ({
      shown: !prevState.shown,
    }));
    this.openBtnToogle();
    playerCommand('stopVideo');
  }

  render(): JSX.Element {
    const { results } = this.props;
    const { adr } = this.state;
    return (
      <div>
        <div className="film-details-trailer-container">
          <div className="film-details-trailer-preview">
            {results.map((item) => (
              <div
                className="film-details-a-trailer-wrapper"
                id={item.key}
                onClick={this.handleClick.bind(this, item.key)}
                aria-hidden="true"
                key={item.key}
              >
                <div className="film-details-trailer" style={getBkg(item.key)}>
                  <div className="film-details-video-btn-container">
                    <svg viewBox="0 0 50 50" className="film-details-video-btn">
                      <g fill="none" fillRule="nonzero">
                        <path fill="#fff" d="M25 50C11.2 50 0 38.8 0 25S11.2 0 25 0s25 11.2 25 25-11.2 25-25 25z" />
                        <path fill="#000" d="M35.3 25l-15.6-8.6v17.2z" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="film-details-a-trailer-title-wrapper">
                  <h4 className="film-details-a-trailer-title">{item.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="film-details-modal film-non-active" onClick={this.closeModal.bind(this)} aria-hidden="true">
          <iframe
            className="film-details-trailer-video"
            id="trailer-player"
            src={`https://www.youtube.com/embed/${adr}?autoplay=1&enablejsapi=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    );
  }
}

export interface IMovieTrailersResp {
  id: string;
  results: Array<{ key: string; name: string }>;
}

export default function FilmDetailsTrailersSpot(props: { filmName: string; movieID: string }): JSX.Element {
  const { filmName, movieID } = props;
  const url = `${endpoint}/${request}/${movieID}/videos?api_key=${API_KEY}&language=en-US`;
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [gotData, setgotData] = useState({ id: '', results: [{ key: '', name: '' }] });

  useEffect(() => {
    setIsLoaded(false);

    fetch(url)
      .then((response) => response.json())
      .then((data: IMovieTrailersResp) => {
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

  return (
    <AppContext.Consumer>
      {(context): JSX.Element => (
        <section className="film-details-sect">
          <div className="for-modal-layer" />
          <div className="filn-details-trailer-titles">
            <h2 className="film-details-sect-title">{dataDetails[context.locale].videoTitle}</h2>
            <h2 className="film-details-trailers-title">{filmName}</h2>
          </div>
          <TrailerPlayer results={gotData.results} />
        </section>
      )}
    </AppContext.Consumer>
  );
}
