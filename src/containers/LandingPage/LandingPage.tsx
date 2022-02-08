import React from 'react';

import Footer from '../../modules/Footer';
import LandingHeader from '../../modules/LandingHeader';
import AnnouncesSpot from '../../modules/AnnouncesSpot';
import QuestionsSpot from '../../modules/QuestionSpot';

import EmailForm from '../../components/EmailForm';

export default function LandingStructure(): JSX.Element {
  return (
    <>
      <LandingHeader />
      <main>
        <div className="about">
          <AnnouncesSpot />
        </div>
        <div className="questions">
          <QuestionsSpot />
          <EmailForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
