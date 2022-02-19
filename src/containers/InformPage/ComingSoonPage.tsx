import React from 'react';
import Footer from '../../modules/Footer';
import Header from '../../modules/Header/Header';
import { AppContext } from '../../components/constants';

import './termsUsePage.scss';

export default function ComingSoonPage(): JSX.Element {
  return (
    <AppContext.Consumer>
      {(context): JSX.Element => (
        <>
          <Header type="HEADER_404_PAGE" name="header-container" />
          <main className="inform-main">TODO</main>
          <Footer />
        </>
      )}
    </AppContext.Consumer>
  );
}
