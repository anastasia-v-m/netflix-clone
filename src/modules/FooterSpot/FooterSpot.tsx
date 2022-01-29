import React from 'react';

import data from './data.json';

import DataInterface, { IFooterProps } from './types';

import LangSelection from '../../components/langSelection';

import './footerSpot.scss';

function FooterLinks() {
  return (
    <ul className="links-list">
      {data.map((elem: DataInterface) => (
        <li className="footer-link-item" key={elem.id}>
          <a className="footer-link" href={elem.link}>
            {elem.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function FooterSpot(props?: IFooterProps) {
  const footerPrefix = (props as IFooterProps).footerPrefix ? 'login-page__footer' : '';
  return (
    <footer className={footerPrefix}>
      <div className="footer-wrapper">
        <div className="footer-links-container">
          <a className="footer-title" href="/#">
            <span>Есть вопросы? Свяжитесь с нами</span>
          </a>
          <FooterLinks />
          <LangSelection />
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
