import { SyntheticEvent, useState } from 'react';

import LoginUser from '../LoginUser';
import PasswordUser from '../PasswordUser';
import UserFormButton from '../UserFormButton';
import UserFormHelp from '../UserFormHelp';

import data from './data';

import './userFormMain.scss';

export default function UserFormMain() {
  let errorPrefixStatus = '';
  const formData = { email: '', isEmailValid: false, password: '', isPasswordValid: false };
  const [errorPrefix, setErrorPrefix] = useState('');
  const [formDataState, setFormData] = useState(formData);
  const submitHandle = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (formData.isEmailValid && formData.isPasswordValid) {
      errorPrefixStatus = '';
      console.log(formDataState);
      setErrorPrefix(errorPrefixStatus);
    } else {
      errorPrefixStatus = 'active';
      setErrorPrefix(errorPrefixStatus);
    }
  };

  return (
    <div className="user-form__main">
      <h2 className="form-title">{data.title}</h2>
      <div className={`form-invalid-data ${errorPrefix}`}>{data.invalid}</div>
      <form className="user-form" method="POST" onSubmit={submitHandle}>
        <LoginUser formData={formDataState} setFormData={setFormData} />
        <PasswordUser formData={formData} setFormData={setFormData} />
        <UserFormButton />
        <UserFormHelp />
      </form>
    </div>
  );
}
