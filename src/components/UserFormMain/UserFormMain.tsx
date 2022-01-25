import LoginUser from '../LoginUser';
import PasswordUser from '../PasswordUser';
import UserFormButton from '../UserFormButton';
import UserFormHelp from '../UserFormHelp';

import data from './data';

import './userFormMain.css';

export default function UserFormMain() {
  return (
    <div className="user-form__main">
      <h2 className="form-title">{data.title}</h2>
      <form className="user-form" method="POST">
        <LoginUser />
        <PasswordUser />
        <UserFormButton />
        <UserFormHelp />
      </form>
    </div>
  );
}
