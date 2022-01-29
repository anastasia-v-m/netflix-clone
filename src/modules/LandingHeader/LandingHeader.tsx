import LangSelection from '../../components/langSelection';
import NetflixLogo from './LandingHeaderLogo';
import Buttons from '../../components/Button';
import StartCard from './LandingStartCard';

import './landingHeader.scss';

export default function Header() {
  return (
    <>
      <div className="header-wrapper">
        <div className="header-container">
          <NetflixLogo />
          <LangSelection />
          <Buttons name="auth-button" nameContent="auth-button-content" content="Войти" href="/login-form" />
        </div>
      </div>
      <StartCard />
    </>
  );
}
