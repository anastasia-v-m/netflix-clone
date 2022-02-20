import React from 'react';
import { Link } from 'react-router-dom';

import { data, IItem } from './data';
import RsSchoolSVG from '../../assets/RsSchoolSVG';
import { AppContext } from '../../components/constants';

import { IFooterProps } from './types';

import LangSelection from '../../components/langSelection';
import TwitterSVG from './svg/TwitterSVG';
import InstagramSVG from './svg/InstargamSVG';
import FacebookSVG from './svg/FacebookSVG';

import './footer.scss';

function FooterLinks(): JSX.Element {
  return (
    <AppContext.Consumer>
      {(context): JSX.Element => (
        <ul className="links-list">
          {data[context.locale].map((elem: IItem) => (
            <li className="footer-link-item" key={elem.id}>
              <Link className="footer-link" to={elem.link}>
                {elem.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </AppContext.Consumer>
  );
}

export default function Footer(props?: IFooterProps): JSX.Element {
  const { footerType = undefined } = props as IFooterProps;
  const prefix = footerType ? 'login-page__footer' : '';
  return (
    <footer className={prefix}>
      <div className="footer-wrapper">
        <div className="footer-links-container">
          <div className="footer-title">
            <span>Есть вопросы? Свяжитесь с нами</span>
          </div>
          <div className="internal-footer__item_descr">
            <a className="social-links" href="https://twitter.com/netflix" target="_blank" rel="noreferrer">
              <TwitterSVG />
            </a>
            <a
              className="social-links"
              href="https://www.instagram.com/accounts/login/?next=/netflix/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramSVG />
            </a>
            <a className="social-links" href="https://www.facebook.com/netflix" target="_blank" rel="noreferrer">
              <FacebookSVG />
            </a>
          </div>
          <FooterLinks />
          <LangSelection />
          <p className="footer-country">Netflix Беларусь</p>
        </div>
      </div>
      <div className="developers-links">
        <div className="developers-links_course">
          <a className="dev-link" href="https://rs.school/js/" target="_blank" rel="noreferrer">
            <RsSchoolSVG />
          </a>
          <span className="year-creation">2022</span>
        </div>
        <a className="dev-link" href="https://github.com/Arxons" target="_blank" rel="noreferrer">
          Developer: Arxons
        </a>
        <a className="dev-link" href="https://github.com/anastasia-v-m" target="_blank" rel="noreferrer">
          Developer: anastasia-v-m
        </a>
        <a className="dev-link" href="https://github.com/Divakotova" target="_blank" rel="noreferrer">
          Developer: Divakotova
        </a>
        <a className="dev-link" href="https://github.com/DimaKacer" target="_blank" rel="noreferrer">
          Mentor: DimaKacer
        </a>
      </div>
    </footer>
  );
}
