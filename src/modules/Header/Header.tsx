import React, { ReactElement } from 'react';

import LangSelection from '../../components/langSelection';
import Button from '../../components/Button';
import HeaderLogo from '../../components/HeaderLogo';
import LandingStartSpot from '../LandingStartSpot';
import InternalSearchSpot from '../InternalSearchSpot/InternalSearchSpot';
import PopupSearchInput from '../PopupSearchInput';

import './header.scss';

const HEADER_LANDING_PAGE = 'HEADER_LANDING_PAGE';
const HEADER_INTERNAL_PAGE = 'HEADER_INTERNAL_PAGE';
const HEADER_404_PAGE = 'HEADER_404_PAGE';

interface IHeader {
  name: string;
  type: typeof HEADER_LANDING_PAGE | typeof HEADER_INTERNAL_PAGE | typeof HEADER_404_PAGE;
}

export default function Header(props: IHeader): ReactElement {
  const { name, type } = props;

  if (type === HEADER_LANDING_PAGE) {
    return (
      <header>
        <div className="header-wrapper">
          <div className={name}>
            <HeaderLogo type="LOGO_LANDING_PAGE" name="landing-header" />
            <LangSelection />
            <Button
              type="BTN_TYPE_SIMPLE"
              name="auth-button"
              nameContent="auth-button-content"
              content="Войти"
              href="/login-form"
            />
          </div>
        </div>
        <LandingStartSpot />
      </header>
    );
  }
  if (type === HEADER_INTERNAL_PAGE) {
    return (
      <header>
        <div className="header-wrapper">
          <div className={name}>
            <HeaderLogo type="LOGO_PAGE" name="internal-header" link="/" />
            <Button
              type="BTN_TYPE_SIMPLE"
              name="auth-button"
              nameContent="auth-button-content"
              content="Войти"
              href="/login-form"
            />
            <PopupSearchInput />
          </div>
        </div>
        <InternalSearchSpot />
      </header>
    );
  }

  return (
    <header>
      <div className="header-wrapper">
        <div className={name}>
          <HeaderLogo type="LOGO_PAGE" name="page404-header" link="/" />
        </div>
      </div>
    </header>
  );
}
