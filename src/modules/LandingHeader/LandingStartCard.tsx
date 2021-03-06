import React from 'react';

import EmailForm from '../../components/EmailForm';

import landingStartCardData from './landingStartCardData.json';

import './landingHeader.scss';

export default function StartCard(): JSX.Element {
  return (
    <div className="start-card">
      <div className="start-card-background">
        <img className="start-card-img" src={landingStartCardData.imgSrc} alt={landingStartCardData.altDescription} />
        <div className="img-gradient" />
      </div>
      <div className="start-card-content">
        <h1>{landingStartCardData.title}</h1>
        <h2>{landingStartCardData.annotation}</h2>
        <EmailForm />
      </div>
    </div>
  );
}
