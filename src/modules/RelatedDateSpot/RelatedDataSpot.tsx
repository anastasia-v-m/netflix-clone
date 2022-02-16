import React from 'react';
import data from './data.json';

import { Link } from 'react-router-dom';

import './relatedDataSpot.scss';

const SPOT_TITLE = 'Related Articles';
const READ_MORE = 'Read More';

export default function PrivatePage(): JSX.Element {
  return (
    <section>
      <div className="related-data-wrapper">
        <h3 className="related-data-title">{SPOT_TITLE}</h3>
        <div className="related-data">
          {data.map((item) => (
            <div className="related-data__item-wrapper" key={`tag-${item.articleTitle}`}>
              <div className="related-data__item">
                <Link className="related-data__item-link" to={item.pageSrc} target="_blank" rel="noreferrer">
                  <div className="related-data__item-img-container">
                    <img
                      alt="placeholder"
                      src="https://media.netflix.com/static/images/news_placeholder.png"
                      aria-hidden="true"
                    />
                    <div
                      className="related-data__item-img"
                      style={{
                        background: `url(${item.imgSrc}) center top / cover no-repeat scroll`,
                      }}
                    />
                  </div>
                  <div className="article-container">
                    <div className="article">
                      <svg className="article__icon-link" viewBox="0 0 24 24">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path fill="white" d="M8 15h8v2H8zM20 7H8v6h12zm-2 4h-8V9h8z" />
                          <path
                            fill="white"
                            d="M4 3v4H0v11a3 3 0 003 3h18a3 3 0 003-3V3zm0 16H3a1 1 0 01-1-1V9h2zm18-1a1 1 0 01-1 1H6V5h16z"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="time-container">
                      <time>{item.date}</time>
                    </div>
                    <div className="article-title-wrapper">
                      <h4 className="article-title">{item.articleTitle}</h4>
                    </div>
                    <div className="read-more-btn-container">
                      <span className="read-more-btn">{READ_MORE}</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
