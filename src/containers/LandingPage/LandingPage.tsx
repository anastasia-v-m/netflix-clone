import React from 'react';

import Footer from '../../modules/Footer';
import Header from '../../modules/Header/Header';
import AnnouncesSpot from '../../modules/AnnouncesSpot';
import QuestionsSpot from '../../modules/QuestionSpot';

export default function LandingStructure(): JSX.Element {
  return (
    <>
      <Header type="HEADER_LANDING_PAGE" name="header-container" />
      <main>
        <div className="about">
          <AnnouncesSpot />
        </div>
        <div className="questions">
          <QuestionsSpot />
        </div>
      </main>
      <Footer />
    </>
  );
}
