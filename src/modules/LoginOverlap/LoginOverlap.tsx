import UserFormMain from '../UserFormMain';

import './loginOverlap.scss';

export default function LoginOverlap() {
  return (
    <div className="login-overlap">
      <div className="login-overlap__shadow" />
      <div className="login-overlap__form">
        <div className="login-overlap__content">
          <UserFormMain />
        </div>
      </div>
    </div>
  );
}
