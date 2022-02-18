import React from 'react';

import LoginOverlap from '../../modules/LoginOverlap';
import Footer from '../../modules/Footer';

import data from './data';
import { FOOTER_LOGIN_PAGE_TYPE } from '../../components/constants';
import { IUserFormProps } from '../../modules/UserFormMain/types';

import './loginPage.scss';
import HeaderLogo from '../../components/HeaderLogo';

export default function LoginPage(props: IUserFormProps): JSX.Element {
  const { reg } = props;

  if (reg) {
    return (
      <div className="login-wrapper">
        <div className="login-background">
          <img className="login-background__image" src={data.link} alt="login-background" />
          <div className="login-background__shadow" />
        </div>
        <HeaderLogo link="/" name="landing-header" />
        <LoginOverlap reg="true" />
        <Footer footerType={FOOTER_LOGIN_PAGE_TYPE} />
      </div>
    );
  }
  return (
    <div className="login-wrapper">
      <div className="login-background">
        <img className="login-background__image" src={data.link} alt="login-background" />
        <div className="login-background__shadow" />
      </div>
      <HeaderLogo link="/" name="landing-header" />
      <LoginOverlap />
      <Footer footerType={FOOTER_LOGIN_PAGE_TYPE} />
    </div>
  );
}
