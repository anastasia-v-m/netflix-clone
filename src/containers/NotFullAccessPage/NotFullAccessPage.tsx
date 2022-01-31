import React from 'react';
import Image from '../../components/Image';
import FooterSpot from '../../modules/FooterSpot';
import LoginHeader from '../../modules/LoginHeader';
import data from './data.json';

import './notFullAccessPage.scss';

const n = 1;
const BTN_CONTENT = 'Log in for full access';

export default function NotFullAccessPage() {
  const bkg: React.CSSProperties = {
    background: `url(${data[n].imgSrc}) center top / cover no-repeat scroll`,
  };

  return (
    <>
      <LoginHeader />
      <section style={bkg}>
        <div className="blur-theme">
          <div className="btn-container">
            <div className="btn-position">
              <button className='red-btn'>{BTN_CONTENT}</button>
            </div>
            <div className="btn-line"></div>
          </div>
          <div className="movie-precontainer">
            <div className="movie-container">
              <h1 className="movie-title">{data[n].movieTitle}</h1>
              <h3 className="movie-meta-info">
                {`${data[n].item} ${data[n].releas} ${data[n].country} ${data[n].date}`}
              </h3>
              <div className="movie-description">
                <h6 className="movie-description__part-title">{data[n].loglineTitle}</h6>
                <div className="movie-description__part">
                  <p>{data[n].logline}</p>
                </div>
                <h6 className="movie-description__part-title">{data[n].synopsisTitle}</h6>
                <div className="movie-description__part">
                  <p>{data[n].synopsis}</p>
                </div>
                <div className="movie-tags">
                  {data[n].tags.map((item, index) => (
                    <div className="movie-tags__tag" key={`tag-${index}`}>
                      <span className="movie-tags__tag-wrapper">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="pre-movie-poster">  
              <div className="movie-poster">
                <Image
                  src={data[n].imgSrc}
                  alt={data[n].alt}
                  className='movie-img'
                />
              </div>
            </div>
          </div>
          <div className="related-articles-precontainer">
            <h3 className="related-articles-title"></h3>
            <div className="related-articles-container">
              {/* place for articles */}
            </div>
          </div>
        </div>
      </section>
      <FooterSpot footerPrefix="login-page__footer" />
    </>
  );
}
