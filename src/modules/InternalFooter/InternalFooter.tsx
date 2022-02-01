import React from 'react';

import data from './data.json';

import TwitterSVG from './svg/TwitterSVG';
import InstagramSVG from './svg/InstargamSVG';
import FacebookSVG from './svg/FacebookSVG';

import './internalFooter.scss';

export default function InternalFooter(): JSX.Element {
  return (
    <footer className="internal-footer">
      <ul className="internal-footer__links">
        <li className="internal-footer__item">
          <p className="internal-footer__item_descr">Company</p>
        </li>
        {data.leftColumn.map((elem) => (
          <li className="internal-footer__item_descr">
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
        {data.midColumn.map((elem) => (
          <li className="internal-footer__item_descr">
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
        {data.rightColumn.map((elem) => (
          <li className="internal-footer__item_descr">
            <a className="internal-footer__item_link" href={elem.link}>
              {elem.title}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
