import UserFormMain from '../../components/UserFormMain';
import UserFormOther from '../../components/UserFormOther';

import './loginOverlap.css';

export default function LoginOverlap() {
  return (
    <div className="login-overlap">
      <div className="login-overlap__shadow"></div>
      <div className="login-overlap__form">
        <div className="login-overlap__content">
          <UserFormMain />
          <UserFormOther />
        </div>
      </div>
    </div>
  );
}