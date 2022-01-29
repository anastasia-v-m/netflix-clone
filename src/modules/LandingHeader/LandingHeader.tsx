import LangSelection from '../../components/langSelection';
import NetflixLogo from './LandingHeaderLogo';
import Button from '../../components/Button';
import StartCard from './LandingStartCard';

import './landingHeader.scss';

export default function Header() {
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
