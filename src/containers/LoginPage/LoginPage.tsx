import LoginHeader from '../../modules/LoginHeader';
import LoginOverlap from '../../modules/LoginOverlap';
import FooterSpot from '../../modules/FooterSpot';

import data from './data';

import './loginPage.scss';

export default function LoginPage(props: any) {
  if (props.reg) {
    return (
      <div className="login-wrapper">
        <div className="login-background">
          <img className="login-background__image" src={data.link} alt="login-background" />
          <div className="login-background__shadow" />
        </div>
        <LoginHeader />
        <LoginOverlap reg="true" />
        <FooterSpot footerPrefix="login-page__footer" />
      </div>
    );
  }
  return (
    <div className="login-wrapper">
      <div className="login-background">
        <img className="login-background__image" src={data.link} alt="login-background" />
        <div className="login-background__shadow" />
      </div>
      <LoginHeader />
      <LoginOverlap />
      <FooterSpot footerPrefix="login-page__footer" />
    </div>
  );
}
