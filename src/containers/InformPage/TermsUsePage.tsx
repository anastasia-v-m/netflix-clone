import React from 'react';
import Footer from '../../modules/Footer';
import Header from '../../modules/Header/Header';
import { AppContext } from '../../components/constants';
import { dataTermsUse } from './data';

import './termsUsePage.scss';

export default function TermsUsePage(): JSX.Element {
  return (
    <AppContext.Consumer>
      {(context): JSX.Element => (
        <>
          <Header type="HEADER_404_PAGE" name="header-container" />
          <main className="inform-main">
            <div className="inform-container">
              <h2 className="inform-container__title">{dataTermsUse[context.locale].termsUseTitle}</h2>
              <div className="inform-container__content">
                <p>{dataTermsUse[context.locale].termsUseDescribe}</p>
                <h3>{dataTermsUse[context.locale].membershipTitle}</h3>
                <p>{dataTermsUse[context.locale].membership1}</p>
                <p>{dataTermsUse[context.locale].membership2}</p>
                <h3>{dataTermsUse[context.locale].promotionalTitle}</h3>
                <p>{dataTermsUse[context.locale].promotionalOffers}</p>
              </div>
            </div>
          </main>
          <Footer />
        </>
      )}
    </AppContext.Consumer>
  );
}
