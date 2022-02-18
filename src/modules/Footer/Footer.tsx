import React from 'react';
import { Link } from 'react-router-dom';

import data from './data.json';
import dataInternal from './dataInternal.json';

import { DataInterface, IFooterProps } from './types';

import LangSelection from '../../components/langSelection';
import TwitterSVG from './svg/TwitterSVG';
import InstagramSVG from './svg/InstargamSVG';
import FacebookSVG from './svg/FacebookSVG';

import { FOOTER_INTERNAL_PAGE_TYPE } from '../../components/constants';

import './footer.scss';

function FooterLinks(): JSX.Element {
  return (
    <ul className="links-list">
      {data.map((elem: DataInterface) => (
        <li className="footer-link-item" key={elem.id}>
          <Link className="footer-link" to={elem.link}>
            {elem.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer(props?: IFooterProps): JSX.Element {
  const { footerType = undefined } = props as IFooterProps;
  if (footerType === FOOTER_INTERNAL_PAGE_TYPE) {
    return (
      <footer className={FOOTER_INTERNAL_PAGE_TYPE}>
        <ul className="internal-footer__links">
          <li className="internal-footer__item">
            <p className="internal-footer__item_descr">Company</p>
          </li>
          {dataInternal.leftColumn.map((elem) => (
            <li className="internal-footer__item_descr" key={elem.title}>
              <Link className="internal-footer__item_link" to={elem.link}>
                {elem.title}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="internal-footer__links">
          <li className="internal-footer__item">
            <p className="internal-footer__item_descr">Connect</p>
          </li>
          {dataInternal.midColumn.map((elem) => (
            <li className="internal-footer__item_descr" key={elem.title}>
              <Link className="internal-footer__item_link" to={elem.link}>
                {elem.title}
              </Link>
            </li>
          ))}
          <li className="internal-footer__item_descr">
            <Link className="social-links" to="/#">
              <TwitterSVG />
            </Link>
            <Link className="social-links" to="/#">
              <InstagramSVG />
            </Link>
            <Link className="social-links" to="/#">
              <FacebookSVG />
            </Link>
          </li>
        </ul>
        <ul className="internal-footer__links">
          <li className="internal-footer__item">
            <p className="internal-footer__item_descr">Legal</p>
          </li>
          {dataInternal.rightColumn.map((elem) => (
            <li className="internal-footer__item_descr" key={elem.title}>
              <Link className="internal-footer__item_link" to={elem.link}>
                {elem.title}
              </Link>
            </li>
          ))}
        </ul>
      </footer>
    );
  }

  const prefix = footerType ? 'login-page__footer' : '';
  return (
    <footer className={prefix}>
      <div className="footer-wrapper">
        <div className="footer-links-container">
          <Link className="footer-title" to="/#">
            <span>Есть вопросы? Свяжитесь с нами</span>
          </Link>
          <FooterLinks />
          <LangSelection />
          <p className="footer-country">Netflix Беларусь</p>
        </div>
      </div>
      <div className="developers-links">
        <div>Rss logo</div>
        <Link className="dev-link" to="/#">
          Developer 1
        </Link>
        <Link className="dev-link" to="/#">
          Developer 2
        </Link>
        <Link className="dev-link" to="/#">
          Developer 3
        </Link>
        <Link className="dev-link" to="/#">
          Mentor
        </Link>
        <div>Github logo</div>
      </div>
    </footer>
  );
}
