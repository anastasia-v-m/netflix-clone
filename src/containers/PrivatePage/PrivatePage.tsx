import React from 'react';
import Image from '../../components/Image';
import Footer from '../../modules/Footer';
import LoginHeader from '../../modules/LoginHeader';
import data from './data.json';

import './privatePage.scss';

const BTN_CONTENT = 'Log in for full access';

export default function PrivatePage(): JSX.Element {
  const bkg: React.CSSProperties = {
    background: `url(${data.imgSrc}) center top / cover no-repeat scroll`,
  };

  return (
    <>
      <LoginHeader />
      <section style={bkg}>
        <div className="blur-theme">
          <div className="btn-container">
            <div className="btn-position">
              <button className="red-btn" type="button">
                {BTN_CONTENT}
              </button>
            </div>
            <div className="btn-line">.</div>
          </div>
          <div className="movie-precontainer">
            <div className="movie-container">
              <h1 className="movie-title">{data.movieTitle}</h1>
              <h3 className="movie-meta-info">{`${data.item} ${data.releas} ${data.country} ${data.date}`}</h3>
              <div className="movie-description">
                <h6 className="movie-description__part-title">{data.loglineTitle}</h6>
                <div className="movie-description__part">
                  <p>{data.logline}</p>
                </div>
                <h6 className="movie-description__part-title">{data.synopsisTitle}</h6>
                <div className="movie-description__part">
                  <p>{data.synopsis}</p>
                </div>
                <div className="movie-tags">
                  {data.tags.map((item) => (
                    <div className="movie-tags__tag" key={`tag-${item}`}>
                      <span className="movie-tags__tag-wrapper">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="pre-movie-poster">
              <div className="movie-poster">
                <Image src={data.imgSrc} alt={data.alt} className="movie-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer footerPrefix="internal-footer" />
    </>
  );
}
