import React from 'react';

import EmailForm from '../../components/EmailForm';

import data from './data.json';

import '../Header/header.scss';

export default function LandingStartSpot(): JSX.Element {
  return (
    <div className="start-card">
      <div className="start-card-background">
        <img className="start-card-img" src={data.imgSrc} alt={data.altDescription} />
        <div className="img-gradient" />
      </div>
      <div className="start-card-content">
        <h1>{data.title}</h1>
        <h2>{data.annotation}</h2>
        <EmailForm />
      </div>
    </div>
  );
}
