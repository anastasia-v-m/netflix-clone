import React, { SyntheticEvent, useState } from 'react';

import IFormData from '../UserFormMain/types';

import data from './data';

const validateEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

export default function LoginUser(props: IFormData): JSX.Element {
  const [errorPrefixStatus, setErrorPrefix] = useState(false);
  const [focusPrefixStatus, setFocusPrefix] = useState(false);
  const { update } = props;

  const onChangeLogin = (e: SyntheticEvent): void => {
    const email = (e.target as HTMLInputElement).value;
    const isEmail = true;
    const isValid = true;

    if (email) {
      setFocusPrefix(true);
    } else {
      setFocusPrefix(false);
    }

    if (!validateEmail.test(email)) {
      setErrorPrefix(true);
      update('', !isValid, isEmail);
    } else {
      setErrorPrefix(false);
      update(email, isValid, isEmail);
    }
  };
  const errorPrefix = errorPrefixStatus ? 'active' : '';
  const focusPrefix = focusPrefixStatus ? 'focus' : '';
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
