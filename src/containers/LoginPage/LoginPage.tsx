import React from 'react';

import LoginOverlap from '../../modules/LoginOverlap';
import Footer from '../../modules/Footer';
import HeaderLogo from '../../components/HeaderLogo';

import data from './data';
import { FOOTER_LOGIN_PAGE_TYPE } from '../../components/constants';
import { IUserFormProps } from '../../modules/UserFormMain/types';

import './loginPage.scss';

export default function LoginPage(props: IUserFormProps): JSX.Element {
  const { reg } = props;

  if (reg) {
    return (
      <div className="login-wrapper">
        <div className="login-background">
          <img className="login-background__image" src={data.link} alt="login-background" />
          <div className="login-background__shadow" />
        </div>
        <HeaderLogo type="LOGO_PAGE" name="login-header" link="/" />
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
      <HeaderLogo type="LOGO_PAGE" name="login-header" link="/" />
      <LoginOverlap />
      <Footer footerType={FOOTER_LOGIN_PAGE_TYPE} />
    </div>
  );
}
