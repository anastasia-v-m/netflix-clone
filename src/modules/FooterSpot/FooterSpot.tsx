import React from 'react';

import data from './data.json';

import DataInterface from './types';

import './footerSpot.css';

const FooterLinks = () => {
  return (
    <ul className="links-list">
      {data.map((data: DataInterface) => {
        return (
          <li className="footer-link-item" key={data.id}>
            <a className="footer-link" href={data.link}>
              {data.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default function FooterSpot() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-links-container">
          <a className="footer-title" href="/#">
            <span>Есть вопросы? Свяжитесь с нами</span>
          </a>
          <FooterLinks />
          <div className="lang-selector">This space for langSelector</div>
          <p className="footer-country">Netflix Беларусь</p>
        </div>
      </div>
      <div className="developers-links">
        <div>Rss logo</div>
        <a className="dev-link" href="/#">
          Developer 1
        </a>
        <a className="dev-link" href="/#">
          Developer 2
        </a>
        <a className="dev-link" href="/#">
          Developer 3
        </a>
        <a className="dev-link" href="/#">
          Mentor
        </a>
        <div>Github logo</div>
      </div>
    </footer>
  );
}
