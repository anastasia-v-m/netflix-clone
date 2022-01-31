import { SyntheticEvent, useState } from 'react';

import IFormData from '../UserFormMain/types';

import data from './data';

export default function PasswordUser(props: IFormData) {
  let errorPrefixStatus = '';
  let focusPrefixStatus = '';
  const [errorPrefix, setErrorPrefix] = useState('');
  const [focusPrefix, setFocusPrefix] = useState('');

  const onChangePassword = (e: SyntheticEvent) => {
    const withoutSpecialChars = /^[^-() /]*$/;
    const containsLetters = /^.*[a-zA-Z]+.*$/;
    const from4To60 = /^.{4,60}$/;
    const withoutSpaces = /^[\S]$/;
    const password = (e.target as HTMLInputElement).value;
    const newFormData = props.formData;

    if (password) {
      focusPrefixStatus = 'focus';
      setFocusPrefix(focusPrefixStatus);
    } else {
      focusPrefixStatus = '';
      setFocusPrefix(focusPrefixStatus);
    }

    if (
      !withoutSpecialChars.test(password) ||
      !containsLetters.test(password) ||
      !from4To60.test(password) ||
      withoutSpaces.test(password)
    ) {
      errorPrefixStatus = 'active';
      setErrorPrefix(errorPrefixStatus);
      newFormData.password = '';
      newFormData.isPasswordValid = false;
      props.setFormData(newFormData);
    } else {
      errorPrefixStatus = '';
      setErrorPrefix(errorPrefixStatus);
      newFormData.password = password;
      newFormData.isPasswordValid = true;
      props.setFormData(newFormData);
    }
  };

  return (
    <>
      <div className={`password-user__wrapper ${errorPrefix}`}>
        <input
          className={`password-user__input ${focusPrefix}`}
          type="password"
          name="password-user__id"
          id="id-password-user"
          onChange={onChangePassword}
        />
        <label htmlFor="id-password-user" className="password-user__label">
          {data.label}
        </label>
      </div>
      <div className={`login-user__error ${errorPrefix}`}>{data.error}</div>
    </>
  );
}
