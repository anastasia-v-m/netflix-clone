import FacebookForm from '../FacebookForm';
import UserRecaptcha from '../UserRecaptcha';
import UserSignupNow from '../UserSignupNow';

import './userFormOther.css';

export default function UserFormOther() {
  return (
    <div className="user-form__other">
      <FacebookForm />
      <UserSignupNow />
      <UserRecaptcha />
    </div>
  );
}