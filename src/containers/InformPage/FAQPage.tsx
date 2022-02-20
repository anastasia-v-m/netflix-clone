import React from 'react';
import Footer from '../../modules/Footer';
import Header from '../../modules/Header/Header';
import { AppContext } from '../../components/constants';
import { dataFAQ } from './data';

import './termsUsePage.scss';

export default function FAQPage(): JSX.Element {
  return (
    <AppContext.Consumer>
      {(context): JSX.Element => (
        <>
          <Header type="HEADER_404_PAGE" name="header-container" />
          <main className="inform-main">
            <div className="inform-container">
              <h2 className="inform-container__title">{dataFAQ[context.locale].title}</h2>
              <div className="inform-container__content faq-content">
                <img
                  className="inform-image"
                  src={dataFAQ[context.locale].srcImg}
                  alt="Netflix streaming titles on different devices"
                />
                <p>{dataFAQ[context.locale].aboutNetflix}</p>
                <h3>{dataFAQ[context.locale].aboutFilmsTitle}</h3>
                <img
                  className="inform-image"
                  src={dataFAQ[context.locale].srcImgFilms}
                  alt="Rows of images at an angle showing different tv shows and movies streaming on Netlfix"
                />
                <p>{dataFAQ[context.locale].aboutFilms}</p>
                <h3>{dataFAQ[context.locale].supportedDevicesTitle}</h3>
                <img
                  className="inform-image"
                  src={dataFAQ[context.locale].srcImgDevices}
                  alt="Some supported Netflix devices shown from top down"
                />
                <p>{dataFAQ[context.locale].supportedDevices}</p>
                <h3>{dataFAQ[context.locale].plansTitle}</h3>
                <img
                  className="inform-image"
                  src={dataFAQ[context.locale].srcImgPlans}
                  alt="Netflix has plans that let you watch on 1, 2, or 4 screens at the same time"
                />
                <p>{dataFAQ[context.locale].plans}</p>
              </div>
            </div>
          </main>
          <Footer />
        </>
      )}
    </AppContext.Consumer>
  );
}
