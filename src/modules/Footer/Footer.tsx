import React from 'react';

import data from './data.json';
import dataInternal from './dataInternal.json';

import DataInterface, { IFooterProps } from './types';

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
          <a className="footer-link" href={elem.link}>
            {elem.title}
          </a>
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
          {dataInternal.leftColumn.map((elem, index) => (
            <li className="internal-footer__item_descr" key={index}>
              <a className="internal-footer__item_link" href={elem.link}>
                {elem.title}
              </a>
            </li>
          ))}
        </ul>
        <ul className="internal-footer__links">
          <li className="internal-footer__item">
            <p className="internal-footer__item_descr">Connect</p>
          </li>
          {dataInternal.midColumn.map((elem, index) => (
            <li className="internal-footer__item_descr" key={index}>
              <a className="internal-footer__item_link" href={elem.link}>
                {elem.title}
              </a>
            </li>
          ))}
          <li className="internal-footer__item_descr">
            <a className="social-links" href="/#">
              <TwitterSVG />
            </a>
            <a className="social-links" href="/#">
              <InstagramSVG />
            </a>
            <a className="social-links" href="/#">
              <FacebookSVG />
            </a>
          </li>
        </ul>
        <ul className="internal-footer__links">
          <li className="internal-footer__item">
            <p className="internal-footer__item_descr">Legal</p>
          </li>
          {dataInternal.rightColumn.map((elem, index) => (
            <li className="internal-footer__item_descr" key={index}>
              <a className="internal-footer__item_link" href={elem.link}>
                {elem.title}
              </a>
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
