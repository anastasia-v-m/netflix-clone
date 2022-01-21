import LoginHeader from '../../modules/LoginHeader';
import LoginOverlap from '../../modules/LoginOverlap';

import './reset.css';
import './loginPage.css';

export default function LoginPage() {
  return (
    <div className="login-wrapper">
      <div className="login-background">
        <img
          className="login-background__image"
          src="/#"
          alt="login-background"
        />
      </div>
      <LoginHeader />
      <LoginOverlap />
      <footer className="login-footer"></footer>
    </div>
  );
}
