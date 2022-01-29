import React from 'react';

import LangSelection from '../../components/langSelection';
import Button from '../../components/Button';
import NetflixLogo from './LandingHeaderLogo';
import StartCard from './LandingStartCard';

import './landingHeader.scss';

export default function Header(): JSX.Element {
  return (
    <>
      <div className="header-wrapper">
        <div className="header-container">
          <NetflixLogo />
          <LangSelection />
          <Button name="auth-button" nameContent="auth-button-content" content="Войти" href="/login-form" />
        </div>
      </div>
      <StartCard />
    </>
  );
}
