import { SyntheticEvent, useState } from 'react';

import IFormData from '../UserFormMain/types';

import data from './data';

const withoutSpecialChars = /^[^-() /]*$/;
const containsLetters = /^.*[a-zA-Zа-яА-Я]+.*$/;
const from4To60 = /^.{4,60}$/;
const withoutSpaces = /^[\S]$/;

export default function PasswordUser(props: IFormData): JSX.Element {
  const [errorPrefixStatus, setErrorPrefix] = useState(false);
  const [focusPrefixStatus, setFocusPrefix] = useState(false);

  const onChangePassword = (e: SyntheticEvent) => {
    const password = (e.target as HTMLInputElement).value;
    const isEmail = true;
    const isValid = true;

    if (password) {
      setFocusPrefix(true);
    } else {
      setFocusPrefix(false);
    }

    if (
      !withoutSpecialChars.test(password) ||
      !containsLetters.test(password) ||
      !from4To60.test(password) ||
      withoutSpaces.test(password)
    ) {
      setErrorPrefix(true);
      props.update('', !isValid, !isEmail);
    } else {
      setErrorPrefix(false);
      props.update(password, isValid, !isEmail);
    }
  };
  const errorPrefix = errorPrefixStatus ? 'active' : '';
  const focusPrefix = focusPrefixStatus ? 'focus' : '';

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
