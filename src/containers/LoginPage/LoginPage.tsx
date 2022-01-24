import LoginHeader from '../../modules/LoginHeader';
import LoginOverlap from '../../modules/LoginOverlap';

import './data';

import './reset.css';
import './loginPage.css';
import backgroundLink from './data';

export default function LoginPage() {
  return (
    <div className="login-wrapper">
      <div className="login-background">
        <img
          className="login-background__image"
          src={backgroundLink}
          alt="login-background"
        />
        <div className="login-background__shadow"></div>
      </div>
      <LoginHeader />
      <LoginOverlap />
      <footer className="login-footer"></footer>
    </div>
  );
}
