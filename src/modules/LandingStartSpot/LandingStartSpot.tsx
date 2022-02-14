import React from 'react';
import { FormattedMessage } from 'react-intl';

import EmailForm from '../../components/EmailForm';

import '../Header/header.scss';

export default function LandingStartSpot(): JSX.Element {
  return (
    <div className="start-card">
      <div className="start-card-background">
        <img
          className="start-card-img"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/20876cab-b49d-4957-bbaf-906ceb1c05f1/370ebdc0-5135-43c5-8aa4-14c48dfc1bee/BY-ru-20220117-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        <div className="img-gradient" />
      </div>
      <div className="start-card-content">
        <h1>
          <FormattedMessage id="landingHeaderTitle" />
        </h1>
        <h2>
          <FormattedMessage id="landingHeaderAnnotation" />
        </h2>
        <EmailForm />
      </div>
    </div>
  );
}
