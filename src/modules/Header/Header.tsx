import React, { ReactElement } from 'react';

import LangSelection from '../../components/langSelection';
import Button from '../../components/Button';
import HeaderLogo from '../../components/HeaderLogo';
import LandingStartSpot from '../LandingStartSpot';
import PopupSearchInput from '../PopupSearchInput';

import store from '../../store/store';

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
              name="auth-button btn-flash"
              nameContent="auth-button-content"
              content={store.getState().value}
              linkAdr={store.getState().isDone ? '' : '/login-form'}
              logBtn
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
              name="auth-button btn-flash"
              nameContent="auth-button-content"
              content={<span id="logbtn">{store.getState().value}</span>}
              linkAdr={store.getState().isDone ? '' : '/login-form'}
              logBtn
            />
            <PopupSearchInput />
          </div>
        </div>
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
