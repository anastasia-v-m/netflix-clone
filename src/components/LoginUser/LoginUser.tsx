import { SyntheticEvent, useState } from 'react';

import IFormData from '../UserFormMain/types';

import data from './data';

export default function LoginUser(props: IFormData) {
  let errorPrefixStatus = '';
  let focusPrefixStatus = '';
  const [errorPrefix, setErrorPrefix] = useState('');
  const [focusPrefix, setFocusPrefix] = useState('');

  const onChangeLogin = (e: SyntheticEvent) => {
    const validateEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    const email = (e.target as HTMLInputElement).value;
    const newFormData = props.formData;

    if (email) {
      focusPrefixStatus = 'focus';
      setFocusPrefix(focusPrefixStatus);
    } else {
      focusPrefixStatus = '';
      setFocusPrefix(focusPrefixStatus);
    }

    if (!validateEmail.test(email)) {
      errorPrefixStatus = 'active';
      setErrorPrefix(errorPrefixStatus);
    } else {
      errorPrefixStatus = '';
      setErrorPrefix(errorPrefixStatus);
      newFormData.email = email;
      newFormData.isEmailValid = true;
      props.setFormData(newFormData);
    }
  };

  return (
    <>
      <div className={`login-user__wrapper ${errorPrefix}`}>
        <input
          className={`login-user__input ${focusPrefix}`}
          type="text"
          name="login-user__id"
          id="id-login-user"
          onChange={onChangeLogin}
        />
        <label htmlFor="id-login-user" className="login-user__label">
          {data.label}
        </label>
      </div>
      <div className={`login-user__error ${errorPrefix}`}>{data.error}</div>
    </>
  );
}
